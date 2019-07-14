import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Ads from './components/Ads'
import SingleItemContainer from './components/SingleItemContainer'
import NewAdContainer from './components/NewAdContainer';

function App() {
  return (
    <div className="App">
      <Route
        exact path="/"
        component={Ads} />
      <Route
        path="/singleitem/:id"
        component={SingleItemContainer}
      />
      <Route
        path="/newad"
        component={NewAdContainer}
      />

    </div>
  );
}

export default App;
