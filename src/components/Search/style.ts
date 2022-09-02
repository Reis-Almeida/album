import styled from "styled-components";

export const StyledSearch = styled.div`
    display: flex;
    margin: 0 auto;
    border-radius: 50px;
    align-items: center;
    background-color: ${({theme}) => theme.color.second};

    input {
        color: #fff;
        padding: 15px;
        width: 400px;
        border: none;
        outline: none;
        font-size: 1rem;
        background-color: ${({theme}) => theme.color.second};
    }
    
    svg {
        color: #fff;
        cursor: pointer;
        font-size: 2rem;
        margin: 0 15px 0 5px;
        background-color: ${({theme}) => theme.color.second};
    }

    @media(max-width: 500px) {
        width: calc(100% - 20px);

        input {
            width: 100%;
            font-size: 0.9rem;
        }
    }
`