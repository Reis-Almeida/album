import { createGlobalStyle, DefaultTheme } from 'styled-components'


export const theme = (dark: boolean):DefaultTheme => {
    return {
        fontColor: dark ? '#fff' : '#000',
        color : {
            primary: dark ? '#000' : '#fff',
            second: '#565656',
        }
    }
} 


export const GlobalStyle = createGlobalStyle`

    * {
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        align-items: center;
        text-decoration: none;
        overflow-x: hidden;
        background-color: ${({theme}) => theme.color.primary};
    }
   
`