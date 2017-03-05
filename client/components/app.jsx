import React from 'react';
import MarketInfo from './market/marketInfo.jsx';
import MapView from './map/MapView.jsx';
import { Gmaps, Marker } from 'react-gmaps';
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      markets: [],
    };
  }
  componentDidMount() {
    request.get('/api/markets')
            .then((res) => {
              this.setState({
                markets: res.body
              })
            })
  }
  render() {
    const marketInfo = this.state.markets.map((market, idx) => {
      return (
        <div id='info' key={idx}>
          <div id='format'>
            <h3>
              <a href={market.link}>{market.market}</a></h3>
            <p>{market.address}, {market.city}, NY {market.zip}</p>
            <p>{market.hours}</p>
            <p>{market.season}</p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h1 id='title'>NY Farmers Markets</h1>
        <div id='scroll'>
          {
            marketInfo
          }
        </div>
        <MapView id='map'/>
      </div>
    )
  }
}

export default App;
