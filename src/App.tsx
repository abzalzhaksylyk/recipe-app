import React from 'react';

import SearchRecipe from './components/SearcheRecipe/SearchRecipe';
import Categories from './components/Categories/Categories';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import Pages from './pages/Pages';

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
