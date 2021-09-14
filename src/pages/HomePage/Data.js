import { LogoReact } from "../../components/InfoSection/InfoSection.elements";
import { LogoHtml } from "../../components/InfoSection/InfoSection.elements";
import { LogoCss } from "../../components/InfoSection/InfoSection.elements";
import { LogoJavaScripit } from "../../components/InfoSection/InfoSection.elements";
import { LogoApi } from "../../components/InfoSection/InfoSection.elements";
import { LogoJson } from "../../components/InfoSection/InfoSection.elements";
import { Link } from "react-router-dom";

export const homeObjOne = {
  imgStart: "",
  buttonLabel: "contact me",
  img: require("../../images/svg2.svg").default,
  alt: "profilePhoto",
  start: "true",
};
export const homeObjTwo = {
  headline: "Webull Mockup",
  icon: <LogoReact />,
  description:
    "Webull front page, navbar and a search bar created using React and styled components.",
  buttonLabel: (
    <Link
      to={{ pathname: "https://webullmockup.netlify.app/" }}
      target="_blank"
      style={{ textDecoration: "none", color: "#fff" }}
    >
      preview
    </Link>
  ),
  imgStart: "start",
  img: require("../../images/Screenshot 2021-09-14 012913.png").default,
  alt: "profilePhoto",
  start: "true",
};
export const homeObjThree = {
  headline: "Movies you might like",
  description:
    "My passion for movies and cinema inspired me to make a blog-type website that posts list about all kinds of movies and shows where peple can discuss about all kinds of cinema related topics",
  icon: <LogoHtml />,
  icon1: <LogoCss />,
  icon2: <LogoJavaScripit />,
  buttonLabel: (
    <Link
      to={{ pathname: "https://movies-you-might-like.netlify.app/" }}
      target="_blank"
      style={{ textDecoration: "none", color: "#fff" }}
    >
      preview
    </Link>
  ),
  imgStart: "",
  img: require("../../images/movies.png").default,
  alt: "profilePhoto",
  start: "",
};
export const homeObjFour = {
  headline: "Weather App",
  description:
    "The app provides the temperature, weather conditions, humidity and wind speed for any city in the world",
  icon: <LogoHtml />,
  icon1: <LogoCss />,
  icon2: <LogoJavaScripit />,
  icon3: <LogoApi />,
  buttonLabel: (
    <Link
      to={{ pathname: "https://simple-weather-app-api.netlify.app/" }}
      target="_blank"
      style={{ textDecoration: "none", color: "#fff" }}
    >
      preview
    </Link>
  ),
  imgStart: "start",
  img: require("../../images/weatherApp.png").default,
  alt: "profilePhoto",
  start: "true",
};
export const homeObjFive = {
  headline: "To Do List",
  description:
    "Simple todo app made with react and Json server while learning about the subject.",
  icon: <LogoReact />,
  icon1: <LogoJson />,
  buttonLabel: (
    <Link
      to={{ pathname: "https://github.com/milovanovicf/react-to-do-app" }}
      target="_blank"
      style={{ textDecoration: "none", color: "#fff" }}
    >
      preview
    </Link>
  ),
  imgStart: "",
  img: require("../../images/toDo.png").default,
  alt: "profilePhoto",
  start: "true",
};
