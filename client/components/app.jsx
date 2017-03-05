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
    this.getMarkets = this.getMarkets.bind(this);
  }
  getMarkets(){
    request.get('/api/markets')
            .then((res) => {
              this.setState({
                markets: res.body
              })
            })
  }
  componentDidMount() {
    this.getMarkets()
  }
  findAll(){
    //when find all button is clicked
    //clear current state
    //then set state to all markets
    //map shoul load (this includes scroll bar)
  }
// maybe because we have multiple inputs, we want something that will handle an input and then do a componentDidUpdate

  findByZip(){
    //take user input zipcode
    //clear current state
    //grab all markets
    //cycle through all markets
    //look for markets equal to inputted zipcode
    //set state equal to the zipcode
    //map includes scroll
  }
  findMarket(id){
    const singleMarket = `/api/markets/id/${id}`;
    //user click button
    //clear state
    //send id request
    //set state to id
    request.get(singleMarket)
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
              <button onClick={this.onClick} type="button" value={idx}>Find Me</button>
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
