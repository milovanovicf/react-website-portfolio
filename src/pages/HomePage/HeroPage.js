import React from "react";
import { Link } from "react-router-dom";
import { homeObjOne } from "../../pages/HomePage/Data";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Button,
  IconContainer,
} from "../../components/InfoSection/InfoSection.elements";
import { Container } from "../../globalStyles";

const HeroPage = ({
  imgStart,
  headline,
  description,
  img,
  alt,
  start,
  buttonLabel,
  icon,
  icon1,
  icon2,
  icon3,
}) => {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper style={{ textAlign: "left", fontStyle: "normal" }}>
                <Heading
                  style={{
                    fontSize: "43px",
                    borderBottom: "1px solid #e3a93f",
                  }}
                >
                  {headline}
                </Heading>
                <IconContainer>
                  {icon}
                  {icon1}
                  {icon2}
                  {icon3}
                </IconContainer>
                <Subtitle>{description}</Subtitle>
                <Button to="/contacts">{buttonLabel}</Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default HeroPage;
