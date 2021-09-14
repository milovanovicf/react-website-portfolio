import React from "react";
import { Link } from "react-router-dom";
import { homeObjOne } from "../../pages/HomePage/Data";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Span,
  Heading,
  Subtitle,
  Letter,
  Button,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container } from "../../globalStyles";

const InfoSection = ({ imgStart, buttonLabel, img, alt, start }) => {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading>
                  Hi! <br /> I'm <Letter data-heading="F">F</Letter>
                  ilip, front end developer
                </Heading>
                <Subtitle>
                  I'm a 23 year old junior Front End Developer living in
                  Belgrade, Serbia. I have diverse set of skills that include{" "}
                  <Span>HTML</Span> & <Span>CSS</Span> + <Span>JavaScript</Span>{" "}
                  and a bit of <Span>PHP</Span> and <Span>Wordpress</Span>.
                  <br />
                  All my projects are available in the Projects section. If you
                  want to find out more press the button bellow.
                </Subtitle>
                <Link to="/contacts">
                  <Button>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} style={{ maxHeight: "300px" }} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
