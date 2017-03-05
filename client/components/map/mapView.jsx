import React from 'react';
import request from 'superagent';
import MarketInfo from '../market/marketInfo.jsx';
import { Gmaps, Marker } from 'react-gmaps';

const propTypes = {
  marketInfo: React.PropTypes.func,
}

class MapView extends React.Component {
  constructor() {
    super();
    this.state = {
      markets: [],
    }
  }
  componentDidMount() {
    request.get('/api/markets').then((res) => { this.setState({
        markets: res.body
      })
    })
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }
  onClick(e) {
    console.log(`ok`);
  }
  render() {
    const mapMarker = this.state.markets.map((market, idx) => {
      return (
        <Marker
          key={idx}
          lat={market.latitude}
          lng={market.longitude}
          onClick={this.onClick}
        />
      )
    });
    return (
      <div id='map'>
        <Gmaps
          width={'37rem'}
          height={'20rem'}
          border={'0px'}
          display={'inline-flex'}
          position={'relative'}
          lat={40.646462}
          lng={-73.973158}
          zoom={12}
          params={{v: '3.exp', key: 'AIzaSyBL02Rn5sd62yXQvz9IwEuvvjt4Vdi24TA'}}
          onMapCreated={this.onMapCreated}>
            {
              mapMarker
            }
        </Gmaps>
      </div>
    );
  }
}

MapView.propTypes = propTypes;

export default MapView;
