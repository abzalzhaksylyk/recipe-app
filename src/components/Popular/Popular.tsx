import React, { useState, useEffect } from 'react'
import axios from '../../axios-url';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Card from '../Card/Card';

interface Recipe {
    id: number,
    title: string,
    image: string
}

const Popular = () => {
    const [popularRecipes, setPopularRecipes] = useState<Recipe[]>([]);

    const getPopular = async () => {
        const check = localStorage.getItem('popular');
        if (check) {
            setPopularRecipes(JSON.parse(check));
        } else {
            const res = await axios.get(`random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
            setPopularRecipes(res.data.recipes);
            localStorage.setItem("popular", JSON.stringify(res.data.recipes));
        }
    };

    useEffect(() => {
        getPopular();
    }, [])

    return (
        <div className='wrapper'>
            <h3>Trending</h3>
            <Splide options={{
                    autoplay: true,
                    pauseOnHover : false,
                    resetProgress: false,
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "3rem",
                }}
            >
                {
                    popularRecipes.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card
                                    linkTo={'recipe/'+recipe.id}
                                    recipeImage={recipe.image}
                                    recipeTitle={recipe.title}
                                />
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}

export default Popular;