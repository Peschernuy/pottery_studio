import { useState } from "react";
import "./openHours.scss";
import Slider from "../About/Slider/Slider";
import foto_big_1 from "../../assets/images/openHours/foto_big_1.svg";
import foto_big_2 from "../../assets/images/openHours/foto_big_2.svg";
import foto_big_3 from "../../assets/images/openHours/foto_big_3.svg";
import foto_little_1 from "../../assets/images/openHours/foto_little_1.svg";
import foto_little_2 from "../../assets/images/openHours/foto_little_2.svg";
import foto_little_3 from "../../assets/images/openHours/foto_little_3.svg";
import MyButton from "../UI/MyButton/MyButton";

const OpenHours = () => {
  const bigImages = [foto_big_1, foto_big_2, foto_big_3];
  const littleImages = [foto_little_1, foto_little_2, foto_little_3];

  const [selectedFoto, setSelectedFoto] = useState(0);

  return (
    <section className="open__hours__section">
      <img src={bigImages[selectedFoto]} alt="" />
      <div className="open__hours__content">
        <div className=" open__hours__content__title">
          <div className="open__hours__content__title__hours">
            <li>Open Hours</li>
            <span>
              Working
              <br />
              Hours
            </span>
          </div>
          <Slider
            selectedSlide={selectedFoto}
            setSelectedSlide={setSelectedFoto}
            littleImages={littleImages}
          />
        </div>
        <div className="open__hours__content__body">
          <div className=" open__hours__content__body__hours">
            <p>
              <span>Monday:</span>
              10:00 AM - 8:00 PM
            </p>
            <p>
              <span>Tuesday:</span>
              10:00 AM - 8:00 PM
            </p>
            <p>
              <span>Wednesday:</span>
              11:00 AM - 7:00 PM
            </p>
            <p>
              <span>Thursday:</span>
              Closed (Private Workshops available)
            </p>
            <p>
              <span>Friday:</span>
              9:00 AM - 7:00 PM
            </p>
            <p>
              <span>Saturday:</span>
              12:00 AM - 4:00 PM
            </p>
            <p>
              <span>Sunday:</span>
              Open for special events
            </p>
          </div>
          <MyButton theme="light">more info</MyButton>
        </div>
      </div>
    </section>
  );
};

export default OpenHours;
