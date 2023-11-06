import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardBlock = styled.div`
    min-height: 18rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;

export const RecipeTitle = styled.p`
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #ffff;
    width: 90%;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const RecipeImage = styled.img`
    border-radius: 2rem;
    position: absolute;
    padding-top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`;

export const CardLink = styled(Link)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99999;
`;