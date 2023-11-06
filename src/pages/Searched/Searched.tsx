import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios-url';
import { motion } from 'framer-motion';
import Card from '../../components/Card/Card';

interface Recipe {
    id: number;
    title: string;
    image: string;
}

const motionStyle = {
    "marginTop": "30px",
    "display": "grid",
    "gridTemplateColumns": "repeat(auto-fit, minmax(13rem, 1fr))",
    "gridGap": "2rem",
};

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState<Recipe[]>([]);
    const [error, setError] = useState<string | null>(null);

    let params = useParams();

    useEffect(() => {
        if (params.search) {
        getSearched(params.search);
        }
    }, [params.search]);

    const getSearched = async (name: string) => {
        try {
        const response = await axios.get(`complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        setSearchedRecipes(response.data.results);
        setError(null);
        } catch (error) {
        console.error('Error fetching searched recipes:', error);
        setError("An error occurred while fetching searched recipes.");
        }
    };

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
            error ? (
                <div className="error-message">
                {error}
                </div>
            ) : (
                searchedRecipes.map(item => (
                <Card
                    linkTo={'/recipe/' + item.id}
                    key={item.id}
                    recipeTitle={item.title}
                    recipeImage={item.image}
                />
                ))
            )
        }
        </motion.div>
    );
}

export default Searched;
