import styled from "styled-components";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Api } from "@styled-icons/material-rounded/Api";
import { FileJson } from "@styled-icons/boxicons-solid/FileJson";

export const InfoSec = styled.div`
  color: #fff;
  padding: 50px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0%;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  line-height: 1.4;
  font-style: italic;
  font-size: 1.2rem;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 786px) {
    padding-bottom: 65px;
    font-size: 1rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 21px;
  line-height: 24px;
`;

export const Span = styled.span`
  color: #ac081a;
`;

export const Letter = styled.span`
  @keyframes flicker {
    0%,
    19.999%,
    22%,
    62.999%,
    64%,
    64.999%,
    70%,
    100% {
      opacity: 0.99;
      text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.4),
        1px -1px 0 rgba(255, 255, 255, 0.4), -1px 1px 0 rgba(255, 255, 255, 0.4),
        1px 1px 0 rgba(255, 255, 255, 0.4), 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00,
        0 0 10px #f44, 0 0 2px #ff7e00, 0 2px 3px #000;
    }
    20%,
    21.999%,
    63%,
    63.999%,
    65%,
    69.999% {
      opacity: 0.4;
      text-shadow: none;
    }
  }
  font-family: "Aquire Regular";
  color: rgba(45, 45, 45, 1);
  text-shadow: none;

  &:before {
    content: attr(data-heading);
    position: absolute;
    overflow: hidden;
    color: #e3a93f;
    width: 30%;
    z-index: 5;
    text-shadow: none;
    text-align: left;
    animation: flicker 3s linear infinite;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  color: #9d0208;
  outline: none;
  cursor: pointer;
  padding: 8px 15px;
  margin-right: 170px;
  background-color: transparent;
  border: 2px solid #9d0208;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    transition: all 0.3s ease-out;
    background: #9d0208;
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  border-radius: 15px;
  padding: 0 0 25px 15px;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;

export const Featuring = styled.h2`
  color: #fff;
  margin-bottom: 50px;
  font-size: 35px;
  line-height: 1.1;
  text-align: center;
`;

export const IconContainer = styled.div`
  padding-bottom: 20px;
`;

export const LogoReact = styled(ReactLogo)`
  width: 40px;
`;

export const LogoHtml = styled(Html5)`
  width: 40px;
`;
export const LogoCss = styled(Css3)`
  width: 40px;
`;
export const LogoJavaScripit = styled(Javascript)`
  width: 40px;
`;
export const LogoApi = styled(Api)`
  width: 40px;
`;
export const LogoJson = styled(FileJson)`
  width: 40px;
`;
