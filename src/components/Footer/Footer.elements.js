import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos";
import { Linkedin } from "@styled-icons/boxicons-logos";
import { Instagram } from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/entypo";

export const FooterContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterHeadline = styled.h3`
  color: #fff;
  font-size: 1.7em;
  font-weight: 500;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoGithub = styled(Github)`
  width: 50px;
  padding: 5px;
  border: 1px solid #fff;
  margin: 5px;
  color: #fff;
  box-shadow: inset 0 0 0 0;
  transition: ease-out 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 0 #6a040f;
  }
`;
export const LogoLinkedin = styled(Linkedin)`
  width: 50px;
  padding: 5px;
  border: 1px solid #fff;
  margin: 5px;
  color: #fff;
  box-shadow: inset 0 0 0 0;
  transition: ease-out 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 0 #6a040f;
  }
`;
export const LogoInstagram = styled(Instagram)`
  width: 50px;
  padding: 5px;
  border: 1px solid #fff;
  margin: 5px;
  color: #fff;
  box-shadow: inset 0 0 0 0;
  transition: ease-out 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 0 #6a040f;
  }
`;
export const LogoEmail = styled(Email)`
  width: 50px;
  padding: 5px;
  border: 1px solid #fff;
  margin: 5px;
  color: #fff;
  box-shadow: inset 0 0 0 0;
  transition: ease-out 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 0 #6a040f;
  }
`;
