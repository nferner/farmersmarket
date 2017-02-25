import React from 'react';
import Mapview from '/map/mapView.jsx';
import Marketview from '/market/marketView.jsx';
import Request from 'superagent';

class App extends React.Component {
  constructor () {
    super ();
  }
  render (){
    return (
      <div id='app'>
        <p>I am working</p>
      </div>
    );
  }
}


export default App;
