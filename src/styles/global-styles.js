import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* manrope-regular - latin */
    font-family: "Manrope", sans-serif;
    @font-face {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      src: url('../assets/fonts/manrope-v8-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
      url('../assets/fonts/manrope-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../assets/fonts/manrope-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */ url('../assets/fonts/manrope-v8-latin-regular.woff') format('woff'), /* Modern Browsers */ url('../assets/fonts/manrope-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */ url('../assets/fonts/manrope-v8-latin-regular.svg#Manrope') format('svg'); /* Legacy iOS */
    }
  }
`;
