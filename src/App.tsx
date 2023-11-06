import React from 'react';
import './index.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import Pages from './pages/Pages';

import SearchRecipe from './components/SearchRecipe/SearchRecipe';
import Categories from './components/Categories/Categories';

const styleForLogo = {
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 400,
}

const styleforDiv = {
  paddingTop: '2rem',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}

function App() {
  return (
    <div className="App">
      <Router>
        <div style={styleforDiv}>
          <Link to={'/'} style={styleForLogo}>Home</Link>
        </div>
        <SearchRecipe/>
        <Categories/>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
