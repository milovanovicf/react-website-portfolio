import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";
import { InfoSection } from "../../components";
import HeroPage from "./HeroPage";
import { Featuring } from "../../components/InfoSection/InfoSection.elements";
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Featuring>Featuring</Featuring>
      <HeroPage {...homeObjTwo} />
      <HeroPage {...homeObjThree} />
      <HeroPage {...homeObjFour} />
      <HeroPage {...homeObjFive} />
    </>
  );
};

export default Home;
