import React, { useState } from 'react';

import { SearchForm, SearchInput } from './SearchRecipe.styles'

import { useNavigate } from 'react-router-dom';

const SearchRecipe = () => {
    const [input, setInput] = useState<string>('');
    const navigate = useNavigate();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/searched/'+input);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
      }

    return (
        <div className='SearchRecipe'>
            <SearchForm id="search-recipe-form" onSubmit={submitHandler}>
                <SearchInput
                    onChange={handleInputChange} 
                    className='search'
                    value={input} 
                    type="text"
                />
            </SearchForm>
        </div>
    )
}

export default SearchRecipe;