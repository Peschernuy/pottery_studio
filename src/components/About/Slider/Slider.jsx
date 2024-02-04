import React from 'react';
import './slider.scss';

import foto_little_1 from '../../../assets/images/about/slider/foto_little_1.svg';
import foto_little_2 from '../../../assets/images/about/slider/foto_little_2.svg';
import foto_little_3 from '../../../assets/images/about/slider/foto_little_3.svg';

const littleImages = [foto_little_1, foto_little_2, foto_little_3];

const Slider = ({ selectedSlide, setSelectedSlide }) => {
    return (
        <div className="slider">
            <img src={littleImages[selectedSlide]} alt="" />
            <div className="slider__selector">
                <button
                    onClick={() => setSelectedSlide(0)}
                    className={selectedSlide === 0 ? 'active' : ''}>
                    ●
                </button>
                <button
                    onClick={() => setSelectedSlide(1)}
                    className={selectedSlide === 1 ? 'active' : ''}>
                    ●
                </button>
                <button
                    onClick={() => setSelectedSlide(2)}
                    className={selectedSlide === 2 ? 'active' : ''}>
                    ●
                </button>
            </div>
        </div>
    );
};

export default Slider;
