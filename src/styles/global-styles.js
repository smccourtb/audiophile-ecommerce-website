import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Manrope ExtraLight", sans-serif;
    font-size: 15px;
    @font-face {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      src: url('../../public/assets/fonts/manrope-v8-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
      url('../../public/assets/fonts/manrope-v8-latin-regular.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */,
      url('../../public/assets/fonts/manrope-v8-latin-regular.woff2') format('woff2') /* Super Modern Browsers */,
      url('../../public/assets/fonts/manrope-v8-latin-regular.woff') format('woff') /* Modern Browsers */,
      url('../../public/assets/fonts/manrope-v8-latin-regular.ttf') format('truetype') /* Safari, Android, iOS */,
      url('../../public/assets/fonts/manrope-v8-latin-regular.svg#Manrope') format('svg'); /* Legacy iOS */
    }
  }
`;
