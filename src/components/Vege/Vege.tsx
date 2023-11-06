import React, { useState, useEffect } from 'react';
import axios from '../../axios-url';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Card from '../Card/Card';

interface Recipe {
    id: number,
    title: string,
    image: string
}

const Vege = () => {
    const [veggie, setVeggie] = useState<Recipe[]>([]);

    const getVege = async ()  => {
        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const res = await axios.get(`random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
            setVeggie(res.data.recipes);
            localStorage.setItem("veggie", JSON.stringify(res.data.recipes));
        }
    }

    useEffect(() => {
        getVege();
    }, []);

    return (
        <div className='wrapper'>
            <h3>Our Vegetarian Picks</h3>
            <Splide options={{
                    autoplay: true,
                    pauseOnHover : false,
                    resetProgress: false,
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "3rem",
                }}>
                    {
                        veggie.map(recipe => {
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

export default Vege;
