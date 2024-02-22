import {
  Home,
  About,
  Shop,
  BookClassesVideo,
  BookClassesWheel,
  BookClassesInfo,
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
      <BookClassesVideo />
      <BookClassesWheel />
      <BookClassesInfo />
      <OpenHours />
      <Contacts />
    </>
  );
};

export default Landing;
