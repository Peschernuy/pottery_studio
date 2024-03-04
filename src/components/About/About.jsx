import './about.scss';
import foto_big_1 from '../../assets/images/about/foto_big_1.svg';
import foto_big_2 from '../../assets/images/about/foto_big_2.svg';
import foto_big_3 from '../../assets/images/about/foto_big_3.svg';
import foto_little_1 from '../../assets/images/about/slider/foto_little_1.svg';
import foto_little_2 from '../../assets/images/about/slider/foto_little_2.svg';
import foto_little_3 from '../../assets/images/about/slider/foto_little_3.svg';
import MyButton from '../UI/MyButton/MyButton';
import Slider from './Slider/Slider';
import { useState } from 'react';

const About = () => {
    const bigImages = [foto_big_1, foto_big_2, foto_big_3];
    const littleImages = [foto_little_1, foto_little_2, foto_little_3];

    const [selectedSlide, setSelectedSlide] = useState(0);

    console.log(selectedSlide);

    return (
        <section className="about">
            <img src={bigImages[selectedSlide]} alt="" />
            <div className="content">
                <div className="title__content">
                    <div className="title">
                        <li>About</li>
                        <span>About Studio</span>
                    </div>
                    <Slider
                        selectedSlide={selectedSlide}
                        setSelectedSlide={setSelectedSlide}
                        littleImages={littleImages}
                    />
                </div>
                <div className="body">
                    <div>
                        Welcome to our pottery studio, where creativity takes shape! Nestled in the
                        heart of artistic expression, our studio is a haven for both beginners and
                        seasoned potters alike.
                    </div>
                    <MyButton theme="light">more info</MyButton>
                </div>
            </div>
        </section>
    );
};

export default About;
