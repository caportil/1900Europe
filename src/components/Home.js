import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Ocean from './Ocean.js';
import OceanTiles from './OceanTiles.js';
import LandTiles from './LandTiles.js';
import EuropeMap from './EuropeMap.js';
import Territories from './Territories.js';

class Home extends Component {
  constructor(props) {
    super(props);
    let self = this;
    this.state = {
      occupiedOcean: [],
      occupiedLand: [],
      england: ['London', 'Wales', 'York', 'Liverpool', 'Edinburgh', 'Clyde'],
      germany: ['Berlin', 'Kiel', 'Ruhr', 'Silesia', 'Munich', 'Prussia'],
      france: ['Paris', 'Brest', 'Burgundy', 'Picardy', 'Marseilles', 'Gascony'],
      italy: ['Rome', 'Venice', 'Tuscany', 'Piemonte', 'Naples', 'Apulia'],
      austria: ['Vienna', 'Budapest', 'Bohemia', 'Galicia', 'Trieste', 'Tyrolia'],
      russia: ['Moscow', 'Finland', 'Livonia', 'Ukraine', 'Warsaw', 'StPetersburg', 'Sevastopol'],
      ottomans: ['Constantinople', 'Syria', 'Smyrna', 'Armenia', 'Ankara'],
      neutral: ['Iceland', 'Ireland', 'Spain', 'Portugal', 'North Africa', 'Tunisia', 'Norway', 'Sweden', 'Holland', 'Denmark', 'Albania', 'Serbia', 'Greece', 'Bulgaria', 'Romania'],
      units: {
        england: {
          infantry: ['Liverpool'],
          navy: ['Edinburgh', 'London']
        },
        germany: {
          infantry: ['Berlin', 'Munich'],
          navy: ['Kiel']
        },
        france: {
          infantry: ['Paris', 'Marseilles'],
          navy: ['Brest']
        },
        italy: {
          infantry: ['Venice', 'Rome'],
          navy: ['Naples']
        },
        austria: {
          infantry: ['Vienna', 'Budapest'],
          navy: ['Trieste']
        },
        russia: {
          infantry: ['Moscow', 'Warsaw'],
          navy: ['StPetersburg']
        },
        ottomans: {
          infantry: ['Constantinople', 'Smyrna'],
          navy: ['Ankara']
        },
      },
      latestChange: '',
      newOwner: false,
    }
  }

  transferOwnership(tile, fromm, to) {
    let self = this;
    // console.log('self.state is:', self.state, 'and self.state[from] is:', self.state[from])
    let fromCountry = self.state[fromm];
    let toCountry = self.state[to];
    // console.log('transferOwnership invoked! fromCountry is:', fromCountry)
    let fromIndex = fromCountry.indexOf(tile);
    let toIndex = toCountry.indexOf(tile);
    let newStateObject = {};
    fromCountry = fromCountry.slice(0, fromIndex).concat(fromCountry.slice(fromIndex + 1));
    toCountry.push(tile);
    newStateObject[fromm] = fromCountry;
    newStateObject[to] = toCountry;
    newStateObject['latestChange'] = tile;
    self.setState(newStateObject);
  }

  toggleOccupiedLand(tile) {
    let self = this;
    let index = self.state.occupiedLand.indexOf(tile);
    let newOccupied = self.state.occupiedLand; 
    if (index > -1) {
      newOccupied = newOccupied.slice(0, index).concat(newOccupied.slice(index + 1));
    } else {
      newOccupied.push(tile);
    }
    self.setState({occupiedLand: newOccupied})
  }

  findOwnership(tile) {
    let self = this;
    if (self.state.england.indexOf(tile) > -1) {
      console.log('england found!')
      return 'england';
    } else if (self.state.germany.indexOf(tile) > -1) {
      console.log('germany found!')
      return 'germany';
    } else if (self.state.france.indexOf(tile) > -1) {
      return 'france';
    } else if (self.state.italy.indexOf(tile) > -1) {
      return 'italy';
    } else if (self.state.austria.indexOf(tile) > -1) {
      return 'austria';
    } else if (self.state.russia.indexOf(tile) > -1) {
      return 'russia';
    } else if (self.state.ottomans.indexOf(tile) > -1) {
      return 'ottomans';
    } else {
      console.log('Nobody owns this tile!')
      return 'neutral';
    }
  }

  cycleOwnership(tile) {
    let self = this;
    let owner = self.findOwnership(tile);
    owner === 'england' ? self.transferOwnership(tile, 'england', 'germany') : self.transferOwnership(tile, 'germany', 'england')
  }

  componentWillMount() {
    console.log('Running componentWillMount');
  }

  componentDidMount() {
    console.log('Finished mounting')
  }

  componentDidUpdate() {
    let self = this;
    console.log('Finished rendering...')
  }

  loadNewOwner(country) {
    let self = this;
    console.log('Territories is:', Territories);
    console.log('self.state.newOwner:', self.state.newOwner)
    self.state.newOwner === 'neutral' ? self.setState({newOwner: false}) : self.setState({newOwner: country});
  }

  assignNewOwner(tile) {
    let self = this;
    let oldOwner = self.findOwnership(tile);
    let newOwner = self.state.newOwner;
    self.transferOwnership(tile, oldOwner, newOwner);
  }

  render() {
  let self = this;
  console.log('Rendering in App.js... Countries currently are:', self.state, 'and self.state.altSprite is:', self.state.altSprite, 'and props is currently', this.props);
    return (

      <div onSubmit={(event) => {
        event.preventDefault();
        console.log('CommentText submitted! Body:' + document.getElementsByName('CommentText')[0].value);
      }}>
        <h1>Diplomacy 1900 Map</h1>
        <form>Enter move orders: <input name="CommentText" />
        <button>Submit</button>{`Currently selected: ${self.state.newOwner}`}
        </form>
        <br />

        <span>
          <img src="http://imgur.com/DbVHtZT.png" 
            onClick={() => self.loadNewOwner('england')}
          />
          __
          <img src="http://imgur.com/3W5OZye.png" 
            onClick={() => self.loadNewOwner('germany')}
          />
          __
          <img src="http://imgur.com/MUnHPm1.png" 
            onClick={() => self.loadNewOwner('france')}
          />
          __
          <img src="http://imgur.com/g5j3CXa.png" 
            onClick={() => self.loadNewOwner('italy')}
          />
          __
          <img src="http://imgur.com/bYFvBtv.png" 
            onClick={() => self.loadNewOwner('austria')}
          />
          __
          <img src="http://imgur.com/fotK6eO.png" 
            onClick={() => self.loadNewOwner('russia')}
          />
          __
          <img src="http://imgur.com/yxoLqJ7.png" 
            onClick={() => self.loadNewOwner('ottomans')}
          />
          __
          <img src="http://www.paulnoll.com/Locations/visiting-Neutral-Zone-flag.gif" style={{height: 60, width: 100}}
            onClick={() => self.loadNewOwner('neutral')}
          />
        </span>


        {/* Europe Map Background*/}
        <img 
          src="http://imgur.com/2fEgXab.png" 
          style={{position: 'absolute', 
            left: '100px', 
            top: '200px',
            height: '1290px',
            width: '2022px',
            // height: '968px',
            // width: '1517px',
          }}
        />

        <EuropeMap
          england={self.state.england}
          germany={self.state.germany}
          france={self.state.france}
          italy={self.state.italy}
          austria={self.state.austria}
          russia={self.state.russia}
          ottomans={self.state.ottomans}
          occupiedOcean={self.state.occupiedOcean}
          latestChange={self.state.latestChange}
          newOwner={self.state.newOwner}
          assignNewOwner={self.assignNewOwner.bind(self)}
        />

    {/* City Overlay */}

        <map name="overlayMap" id="olMap">
          <area alt="" title="" href="#" shape="poly" coords="4,4,14,58,73,57,71,20,77,3" onClick={() => console.log('Bzz')}/>
        </map>

      </div>
    );
  }
}

export default connect(store => {
  return {
    territories: store.territories
  }
})(Home);