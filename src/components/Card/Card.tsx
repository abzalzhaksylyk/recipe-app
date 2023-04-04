import React from 'react';
import { CardBlock, Gradient, RecipeImage, RecipeTitle, CardLink } from './Card.styles';


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
        <CardLink to={linkTo}></CardLink>
    </CardBlock>
  )
}

export default Card;