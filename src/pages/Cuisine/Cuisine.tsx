import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from '../../axios-url';

import Card from '../../components/Card/Card';

import { motion } from 'framer-motion';

interface Recipe {
    id: number,
    title: string,
    image: string
};

const Cuisine = () => {
    const [cuisine, setCuisine] = useState<Recipe[]>([]);
    let params = useParams();

    const getCuisine = (name: string) => {
        axios.get(`complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            .then(res => {
                setCuisine(res.data.results);
            })
    };

    useEffect(() => {
        if(params.type) {
            getCuisine(params.type);
        }
    }, [params.type]);

    const motionStyle = {
        "marginTop": "30px",
        "display": "grid",
        "gridTemplateColumns": "repeat(auto-fit, minmax(13rem, 1fr))",
        "gridGap": "2rem",
    }

    return (
        <motion.div 
            className='Cuisine'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='grid' style={motionStyle}>
                {
                    cuisine.map(item => {
                        return (
                            <Card
                                key={item.id}
                                linkTo={'/recipe/'+item.id}
                                recipeImage={item.image}
                                recipeTitle={item.title}
                            />
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default Cuisine;
