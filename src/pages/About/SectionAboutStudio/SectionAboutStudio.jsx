import React, { useState } from 'react';
import './sectionAboutStudio.scss';
import foto_big_1 from '../../../assets/images/pageAbout/foto_big_1.svg';
import foto_big_2 from '../../../assets/images/pageAbout/foto_big_2.svg';
import foto_big_3 from '../../../assets/images/pageAbout/foto_big_3.svg';
import foto_little_1 from '../../../assets/images/pageAbout/foto_little_1.svg';
import foto_little_2 from '../../../assets/images/pageAbout/foto_little_2.svg';
import foto_little_3 from '../../../assets/images/pageAbout/foto_little_3.svg';
import Slider from '../../../components/UI/Slider/Slider';

const SectionAbout = ({ children, className, ...props }) => {
    const bigImages = [foto_big_1, foto_big_2, foto_big_3];
    const littleImages = [foto_little_1, foto_little_2, foto_little_3];

    const [selectedSlide, setSelectedSlide] = useState(0);

    return (
        <section className="about__studio" {...props}>
            <img src={bigImages[selectedSlide]} alt="" />
            <div className="about__studio__container">
                <div className="about__studio__container__content">
                    <li>About</li>
                    <div>
                        <span>
                            About
                            <br />
                            Studio
                        </span>
                        <p>
                            Welcome to our pottery studio, where creativity takes shape! Nestled in
                            the heart of artistic expression, our studio is a haven for both
                            beginners and seasoned potters alike.
                            <br />
                            <br /> We believe in the transformative power of clay and the joy that
                            comes from creating something beautiful with your own hands. Our pottery
                            studio is more than just a space; it's a community where art and
                            imagination come together.
                        </p>
                    </div>
                </div>
                <Slider
                    selectedSlide={selectedSlide}
                    setSelectedSlide={setSelectedSlide}
                    littleImages={littleImages}
                />
            </div>
        </section>
    );
};

export default SectionAbout;
