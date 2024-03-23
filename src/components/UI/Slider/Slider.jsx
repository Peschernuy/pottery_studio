import React from 'react';
import './slider.scss';

const Slider = ({ selectedSlide, setSelectedSlide, littleImages }) => {
    return (
        <div className="slider">
            <img src={littleImages[selectedSlide]} alt="" />
            <div className="selector">
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
