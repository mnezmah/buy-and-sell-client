import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Adds from './components/Adds'
import SingleItemContainer from './components/SingleItemContainer'
import SingleItem from './components/SingleItem'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Adds} />
        <Route
          path="/singleitem/:id"
          component={SingleItemContainer}
        />
    </div>
  );
}

export default App;
