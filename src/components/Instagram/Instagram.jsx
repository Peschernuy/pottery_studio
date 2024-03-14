import React from 'react';
import "./instagram.scss";
import inst1 from "../../assets/images/instagram/inst1.png";
import inst2 from "../../assets/images/instagram/inst2.png";
import inst3 from "../../assets/images/instagram/inst3.png";
import inst4 from "../../assets/images/instagram/inst4.png";

const Instagram = () => {
  const images = [inst1, inst2, inst3, inst4];

  return (
    <section className="instagram__section">
      <div className="instagram__info">
        <li>Instagram</li>
        <h1>Follow us on Instagram</h1>
        <p>@potterystudio</p>
      </div>
      <div className="instagram__images">
        {images.map((image, index) => (
          <img className='instagram__img' key={index} src={image} alt={`Instagram Image ${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Instagram;
