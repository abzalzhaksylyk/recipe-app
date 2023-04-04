import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from '../../axios-url';
import { motion } from 'framer-motion';

import Card from '../../components/Card/Card';

interface Recipe {
    id: number,
    title: string,
    image: string,
}

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState<Recipe[]>([]);

    let params = useParams();

    useEffect(() => {
        if (params.search) {
            getSearched(params.search)
        }
    }, [params.search])

    const getSearched = (name: string) => {
        axios.get(`complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
            .then(res => {
                setSearchedRecipes(res.data.results);
            })
    };

    const motionStyle = {
        "marginTop": "30px",
        "display": "grid",
        "gridTemplateColumns": "repeat(auto-fit, minmax(13rem, 1fr))",
        "gridGap": "2rem",
    }
    
    return (
        <motion.div 
            className='searched-page'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={motionStyle}
        >
            {
                searchedRecipes.map(item => {
                    return (
                        <Card
                            linkTo={'/recipe/'+item.id}
                            key={item.id}
                            recipeTitle={item.title}
                            recipeImage={item.image}
                        />
                    )
                })
            }
        </motion.div>
    )
}

export default Searched;