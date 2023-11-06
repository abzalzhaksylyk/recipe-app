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

const motionStyle = {
    "marginTop": "30px",
    "display": "grid",
    "gridTemplateColumns": "repeat(auto-fit, minmax(13rem, 1fr))",
    "gridGap": "2rem",
}

const Cuisine = () => {
    const [cuisine, setCuisine] = useState<Recipe[]>([]);
    const [error, setError] = useState<string | null>(null);
    let params = useParams();

    const getCuisine = async (name: string) => {
        try {
          const response = await axios.get(`complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
          setCuisine(response.data.results);
          setError(null);
        } catch (error: unknown) {
          console.error('Error fetching cuisine:', error);
          setError("An error occurred while fetching cuisine.");
        }
      };
      
    useEffect(() => {
        if(params.type) {
            getCuisine(params.type);
        }
    }, [params.type]);

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
                error ? (
                    <div className="error-message">
                        {error}
                    </div>
                ) : (
                cuisine.map(item => (
                    <Card
                    key={item.id}
                    linkTo={'/recipe/' + item.id}
                    recipeImage={item.image}
                    recipeTitle={item.title}
                    />
                ))
            )}
            </div>
        </motion.div>
    )
}

export default Cuisine;
