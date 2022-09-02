import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontColor: string,
    color : {
        primary: string,
        second: string,
    }
  }
}