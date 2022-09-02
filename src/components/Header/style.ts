import styled from "styled-components";

export const StyledHeader = styled.header<{ dark:boolean }>`
    display: flex;
    margin: 0 60px;
    padding-top: 60px;
    padding-bottom: 40px;
    justify-content: flex-end;

    h1 {
        margin: auto;
        color: ${({theme}) => theme.fontColor};
    }

    svg {
        cursor: pointer;
        font-size: 1.6rem;
        position: absolute;
        color: ${({theme}) => theme.fontColor};
    }


    .theme {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        padding: 10px;
        width: 160px;
        height: 100px;
        top: 95px;
        color: #fff;
        background-color: #000;
        border: solid 2px #fff;
        border-radius: 10px;

        button {
            width: 60px;
            height: 22px;
            padding: 2px;
            border: none;
            cursor: pointer;
            overflow: hidden;
            border-radius: 20px;
            background-color: #fff;
        }

        p {
            background-color: #000;
        }

        .ball {
            width: 18px;
            height: 18px;
            border-radius: 20px;
            transition: margin-left .5s;
            margin-left: ${({dark}) => dark ? '38px' : 0 };
            background-color: ${({theme}) => theme.color.second};
        }

        .mode {
            opacity: ${({dark}) => dark ? 1 : 0.5 };
        }
    }

    @media(min-width: 1500px) {
        margin: 0 auto;
        max-width: 1400px;
    }


    @media(max-width: 800px) {
        margin: 0 10px;
    }

    @media(max-width: 560px) {
        justify-content: space-between;

        h1 {
            margin: 0;
            font-size: 1.5rem;
        }

        svg {
            position: relative;
        }

        .theme {
            right: 10px;
        }
    }
`