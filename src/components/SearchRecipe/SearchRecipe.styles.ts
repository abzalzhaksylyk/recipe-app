import styled from 'styled-components';

export const SearchForm = styled.form`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
`;

export const SearchInput = styled.input`
    width: 70%;
    padding: 10px;
    border: 1px solid #49494a;
    border-radius: 5px;
    background-color: #49494a;
    color: #dbdbdb;
    font-size: 1rem;

    &::placeholder {
        color: #dbdbdb;
    }
`;