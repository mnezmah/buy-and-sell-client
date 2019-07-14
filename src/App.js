import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Ads from './components/Ads'
import SingleItemContainer from './components/SingleItemContainer'
import NewAdContainer from './components/NewAdContainer';
import EditAdContainer from './components/EditAdContainer'

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
      <Route
        path ="/editad"
        component={EditAdContainer}
      />

    </div>
  );
}

export default App;
