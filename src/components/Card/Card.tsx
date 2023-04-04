import React from 'react';
import { CardBlock, Gradient, RecipeImage, RecipeTitle } from './Card.styles';

// import { Link } from 'react-router-dom';

interface CardInterface {
    recipeTitle?: string
    recipeImage?: string,
    linkTo: string
}

const Card: React.FC<CardInterface> = ({ recipeTitle, recipeImage, linkTo }) => {
  return (
    <CardBlock>
        <RecipeTitle>{ recipeTitle }</RecipeTitle>
        <RecipeImage src={recipeImage} alt={ recipeTitle }/>
        <Gradient/>
    </CardBlock>
  )
}

export default Card;