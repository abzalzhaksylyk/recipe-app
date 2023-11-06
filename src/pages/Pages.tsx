import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from './Home/Home';
// import Searched from './Searched/Searched';
// import Cuisine from './Cuisine/Cuisine';
// import Recipe from './Recipe/Recipe';


function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='recipe/:id' element={<Recipe/>}/> */}
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
