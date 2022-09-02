import styled from "styled-components";

export const StyledDetails = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        display: flex;
        cursor: pointer;
        font-weight: bold;
        color: ${({theme}) => theme.fontColor};

        svg {
            font-size: 2rem;
        }
    }

    .search {
        width: 100%;
        display: flex;
        margin-bottom: 60px;

        a {
            position: absolute;
            margin-left: 60px;
        }
    }

    .container {
        display: flex;
        align-items: flex-start;

        .image {
            width: 500px;
            height: 300px;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
        }

        h1 {
            margin: 30px 0;
            color: ${({theme}) => theme.fontColor};
        }

        p {
            opacity: 0.6;
            color: ${({theme}) => theme.fontColor};
        }

        article {
            margin: 0 60px 0 30px;
            width: calc(100% - 500px);
            color: ${({theme}) => theme.fontColor};
        }

    }

    .navigation {
        display: flex;
        margin: 30px 0;
        width: calc(100% - 120px);
        justify-content: space-between;
    }

    @media(min-width: 1500px) {
        .search, .container, .navigation {
            max-width: 1400px;

            .image {
                height: 320px;
            }

            a {
                margin: 0;
            }
        }
    }


    @media(max-width: 900px) {
        .container {
            .image {
                width: 400px;
                height: 280px;
            }

            article {
                width: calc(100% - 400px);
            }
        }

    }

    @media(max-width: 800px) {

        .search {
            flex-direction: column;

            a {
                margin-left: 0;
                margin-bottom: 20px;
                position: relative;
            }
        }

        .container {
            flex-direction: column;
            margin: 0 10px;

            .image {
                height: 400px;
            }

            .image, article {
                width: 100%;
                margin: 0;
            }
        }

        .navigation {
            width: calc(100% - 60px);
        }

    }

    @media(max-width: 500px) {
        .container .image {
                height: 300px;
            }
    }

    @media(max-width: 400px) {
        .container .image {
                height: 200px;
            }

    }
`