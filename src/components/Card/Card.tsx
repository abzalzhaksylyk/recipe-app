import React from 'react';
import { CardBlock, Gradient, RecipeImage, RecipeTitle, CardLink } from './Card.styles';

interface CardProps {
    recipeTitle?: string
    recipeImage?: string,
    linkTo: string
}

const Card: React.FC<CardProps> = ({ recipeTitle, recipeImage, linkTo }) => {
  return (
    <CardBlock>
        <RecipeTitle>{ recipeTitle }</RecipeTitle>
        <RecipeImage src={recipeImage} alt={ recipeTitle }/>
        <Gradient/>
        <CardLink to={linkTo}></CardLink>
    </CardBlock>
  )
}

export default Card;