import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: 'Oswald',sans-serif;
}
html {
  background: #a9e4f7; /* Old browsers */
  background: -moz-linear-gradient(130deg,
    #03071e,
    #020620,
    #01051f,
    #27020a,
    #370617); /* FF3.6+ */
  background: -webkit-gradient(linear,130deg,
    #03071e,
    #020620,
    #01051f,
    #27020a,
    #370617); /* Chrome,Safari4+ */ 
  background: -webkit-linear-gradient(130deg,
    #03071e,
    #020620,
    #01051f,
    #27020a,
    #370617); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(130deg,
    #03071e,
    #020620,
    #01051f,
    #27020a,
    #370617); /* Opera 11.10+ */
  background: -ms-linear-gradient(130deg,
    #03071e,
    #020620,
    #01051f,
    #27020a,
    #370617); /* IE10+ */
  background: linear-gradient(130deg,
    #03071e,
    #020620,
    #01051f,
    #27020a,
    #370617); /* W3C */ 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03071e', endColorstr='#370617',GradientType=1 );
  background-attachment: fixed;
}

`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;
