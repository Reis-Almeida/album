import styled from "styled-components";

export const StyledHome = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.color.primary};

    .album {
        display: flex;
        margin-top: 40px;
        flex-wrap: wrap;
        justify-content: space-between;
        width: calc(100% - 120px);

        a {
            width: 270px;
            height: 300px;
            position: relative;
            margin-bottom: 30px;
        }
    }

    @media(min-width: 1500px) {
        .album {
            max-width: 1400px;
        }
    }

    @media(max-width:960px) {
        .album a {
            height: 400px;
            width: 47%;
        }
    }

    @media(max-width: 800px) {
        .album {
            width: calc(100% - 20px);
        }
    }

    @media(max-width:600px) {
        .album a {
            height: 400px;
            width: 100%;
        }
    }
`