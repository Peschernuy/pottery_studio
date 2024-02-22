import "./bookClassesWheel.scss";
import wheelSmall1 from "../../assets/images/wheel/wheelSmall1.png";
import wheelBig1 from "../../assets/images/wheel/wheelBig1.png";
import wheelSmall2 from "../../assets/images/wheel/wheelSmall2.png";
import wheelBig2 from "../../assets/images/wheel/wheelBig2.png";

import MyButton from "../UI/MyButton/MyButton";

function BookClassesWheel() {
  return (
    <section className="wheel__section">
      <div className="wheel__wrapper">
        <div className="wheel__imgContainer">
          <img
            className="wheel__imgContainer--1"
            src={wheelBig1}
            alt="wheelBig1"
          />
          <img
            className="wheel__imgContainer--2"
            src={wheelSmall1}
            alt="wheelSmall1"
          />
        </div>
        <div className="wheel__inner">
          <h2 className="wheel__inner--title">Mastering the Potter's Wheel</h2>
          <p className="wheel__inner--subtitle">
            gathering of like-minded individuals
          </p>
          <p className="wheel__inner--date">15 Jan. 2024</p>
          <MyButton theme="transparent">more info</MyButton>
        </div>
        <div className="wheel__imgContainer">
          <img
            className="wheel__imgContainer--3"
            src={wheelSmall2}
            alt="wheelSmall2"
          />
          <img
            className="wheel__imgContainer--4"
            src={wheelBig2}
            alt="wheelBig2"
          />
        </div>
      </div>
    </section>
  );
}

export default BookClassesWheel;
