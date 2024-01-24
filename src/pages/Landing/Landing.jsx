import {
  Home,
  About,
  Shop,
  BookClasses,
  OpenHours,
  Contacts,
} from "../../components";
import "./landing.scss";

const Landing = () => {
  return (
    <>
      <Home />
      <About />
      <Shop />
      <BookClasses />
      <OpenHours />
      <Contacts />
    </>
  );
};

export default Landing;
