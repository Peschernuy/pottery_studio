import React from 'react';
import './myButton.scss';

const MyButton = ({ size, theme, ...props }) => {
    return (
        <button
            {...props}
            className={`my__btn ${theme === 'light' && 'light'} ${theme === 'dark' && 'dark'}`}
            style={{ width: size }}></button>
    );
};

export default MyButton;
