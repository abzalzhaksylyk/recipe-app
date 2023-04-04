import React from 'react';

import Home from './pages/Home/Home';
import SearchRecipe from './components/SearcheRecipe/SearchRecipe';
import Categories from './components/Categories/Categories';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <SearchRecipe/>
        <Categories/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
