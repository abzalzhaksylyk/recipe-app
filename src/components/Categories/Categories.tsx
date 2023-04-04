import React, { CSSProperties } from 'react';
import { MdRamenDining } from 'react-icons/md';
import { GiPizzaSlice, GiChopsticks, GiHamburger } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';

import { RecipeIcons, Span } from './Categories.styles'

const Category = () => {
    const checkStyle = (isActive: boolean): CSSProperties => {
        return {
            backgroundImage: isActive? "linear-gradient(to right, #f27121, #e94057)" : '',
            width: "60px",
            height: "60px",
            fontSize: "20px",
            borderRadius: "50%",
            backgroundColor: "#49494a",
            textDecoration: "none",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
        };
    };

    return (
        <div className='Category'>
            <RecipeIcons className='recipe-icons'>
                <NavLink style={({ isActive }) => checkStyle(isActive)} to={'/cuisine/Italian'} className='recipe'>
                    <GiPizzaSlice className='icon'/>
                    <Span>Italian</Span>
                </NavLink>
                <NavLink style={({isActive}) => checkStyle(isActive)} to={'/cuisine/American'} className='recipe'>
                    <GiHamburger className='icon'/>
                    <Span>American</Span>
                </NavLink>
                <NavLink style={({isActive}) => checkStyle(isActive)} to={'/cuisine/Thai'} className='recipe'>
                    <MdRamenDining className='icon'/>
                    <Span>Thai</Span>
                </NavLink>
                <NavLink style={({isActive}) => checkStyle(isActive)} to={'/cuisine/Japanese'} className='recipe'>
                    <GiChopsticks className='icon'/>
                    <Span>Japanese</Span>
                </NavLink>
            </RecipeIcons>
        </div>
    );
};

export default Category
