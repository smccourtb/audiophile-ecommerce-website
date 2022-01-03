import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* manrope-regular - latin */
    font-family: "Manrope ExtraLight", sans-serif;
    font-size: 15px;
    @font-face {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      src: url('../assets/fonts/manrope-v8-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
      url('../assets/fonts/manrope-v8-latin-regular.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */,
      url('../assets/fonts/manrope-v8-latin-regular.woff2') format('woff2') /* Super Modern Browsers */,
      url('../assets/fonts/manrope-v8-latin-regular.woff') format('woff') /* Modern Browsers */,
      url('../assets/fonts/manrope-v8-latin-regular.ttf') format('truetype') /* Safari, Android, iOS */,
      url('../assets/fonts/manrope-v8-latin-regular.svg#Manrope') format('svg'); /* Legacy iOS */
    }
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: ${({ primary }) => (primary ? "#d87d4a" : "transparent")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#000000")};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  transition: all 0.2s ease-out;
  border: ${({ primary }) => (primary ? "none" : "1px solid #000000")};

  :hover {
    background-color: ${({ primary }) => (primary ? "#fbaf85" : "#000000")};
    color: #ffffff;
  }
`;
