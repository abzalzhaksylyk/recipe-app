import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from '../../axios-url';

import { motion } from 'framer-motion';

import { ImageBlock, DetailsBlock, UlList, LiList, InfoBlock } from './Recipe.styles';

interface RecipeDetails {
    title: string,
    image: string,
    summary: string,
    instructions: string,
    extendedIngredients: Array<{ id: number, original: string }>
}

const Recipe = () => {
    const [details, setDetails] = useState<RecipeDetails>({
        title: "",
        image: "",
        summary: "",
        instructions: "",
        extendedIngredients: []
    });
  const [activeTab, setActiveTab] = useState('instructions');
  const params = useParams();

  const fetchDetails = () => {
    axios.get(`${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setDetails(res.data);
      })
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  const motionStyle = {
    "marginTop": "5rem",
    "marginBottom": "5rem",
    "display": "flex",
    "justifyContent": "space-between",
  }
  
  return (
    <motion.div 
        className='detail-wrapper'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={motionStyle}
    >
                <div>
                <h2>{details.title}</h2>
                <ImageBlock src={details.image} alt={details.title} />
                </div>
                <DetailsBlock className='info-details'>
                    <InfoBlock className='info'>
                        <button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</button>
                        <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
                    </InfoBlock>
                    {activeTab === 'instructions' && (
                        <div>
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                        </div>
                    )}
                    {activeTab === 'ingredients' && (
                        <UlList>
                        {
                            details.extendedIngredients.map(ingredient => {
                            return (
                                <li key={ingredient.id}>
                                {ingredient.original}
                                </li>
                            )
                            })
                        }
                        </UlList>
                    )}
                </DetailsBlock>
    </motion.div>
  )
}

export default Recipe;
