import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterHeadline,
  LogoGithub,
  LogoLinkedin,
  LogoInstagram,
  LogoEmail,
  FooterIcons,
} from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterHeadline>Lets be internet BFFS</FooterHeadline>
        <FooterIcons>
          <Link
            to={{
              pathname: "https://github.com/milovanovicf",
            }}
            target="_blank"
          >
            <LogoGithub />
          </Link>
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/filip-milovanovic-b8272a218/",
            }}
            target="_blank"
          >
            <LogoLinkedin />
          </Link>
          <LogoInstagram />
          <Link to="/">
            <LogoEmail />
          </Link>
        </FooterIcons>
      </FooterContainer>
    </>
  );
};

export default Footer;
