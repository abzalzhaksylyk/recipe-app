import styled from 'styled-components';

export const UlList = styled.ul`
    margin-top: 2rem;
`;

export const ImageBlock = styled.img`
    width: 450px;
    margin-top: 1.2rem;
`;

export const DetailsBlock = styled.div`
    width: 100%;
    margin-left: 3rem;
`;

export const InfoBlock = styled.div`
    display: flex;
    align-self: baseline;

    button {
        padding: 1rem 2rem;
        color: #313131;
        background-color: #fff;
        border: 2px solid #000;
        margin-right: 1rem;
        font-weight: 600;
        display: block;
        cursor: pointer;
    }

    .active {
        background-color: #313131;
        color: #fff;
    }
`;