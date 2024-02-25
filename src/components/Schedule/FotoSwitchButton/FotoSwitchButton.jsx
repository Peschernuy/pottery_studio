import React from 'react';
import './fotoSwitchButton.scss';
import arrow from '../../../assets/images/schedule/arrow.svg';

const FotoSwitchButton = ({ selectedFotos, setSelectedFotos, index, title, body }) => {
    return (
        <div
            className={`foto__switch__button ${
                selectedFotos === index && 'foto__switch__button__active'
            } ${index === 5 && 'foto__switch__button__last'}`}
            onClick={() => setSelectedFotos(index)}>
            <div className="foto__switch__button__container">
                <div className="foto__switch__button__number">{index + 1}</div>
                <div>
                    <div className="foto__switch__button__title">{title}</div>
                    <div className="foto__switch__button__body">{body}</div>
                </div>
            </div>
            {selectedFotos === index && (
                <div style={{ height: '100%' }}>
                    <img src={arrow} />
                </div>
            )}
        </div>
    );
};

export default FotoSwitchButton;
