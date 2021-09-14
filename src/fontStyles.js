import { createGlobalStyle } from "styled-components";
import Aquire from "./fonts/Aquire.woff";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Aquire Regular';
    src: url(${Aquire}) format('woff')
}
`;

export default FontStyles;
