import { useState } from 'react';
import './schedule.scss';
import foto_0 from '../../assets/images/schedule/foto_1.svg';
import foto_1 from '../../assets/images/schedule/foto_2.svg';
import foto_2 from '../../assets/images/schedule/foto_3.svg';
import foto_3 from '../../assets/images/schedule/foto_4.svg';
import foto_4 from '../../assets/images/schedule/foto_5.svg';
import foto_5 from '../../assets/images/schedule/foto_6.svg';
import FotoSwitchButton from './FotoSwitchButton/FotoSwitchButton';

const Schedule = () => {
    const fotos = [foto_0, foto_1, foto_2, foto_3, foto_4, foto_5];

    const [selectedFotos, setSelectedFotos] = useState(0);

    const buttons = [
        { title: 'Clay Creations', body: 'Unleash your imagination in our Clay Creations.' },
        {
            title: 'Kids Clay Playtime',
            body: "Spark your child's creativity, a fun and educational experience.",
        },
        {
            title: 'Glazing Techniques',
            body: 'Discover the art of surface decoration, experiment with a variety of glazing methods.',
        },
        { title: 'Raku Firing', body: 'Try a unique and ancient Japanese technique.' },
        {
            title: 'Functional intensive',
            body: 'Learn to craft pottery that seamlessly blends practicality with artistic flair.',
        },
        {
            title: 'Sculptural Pottery',
            body: "Essentials class, where you'll create unique and expressive pottery.",
        },
    ];

    return (
        <section className="open__hours__section">
            <div className="open__hours__container">
                <img src={fotos[selectedFotos]} alt="" />
                <div className="open__hours__body">
                    {buttons.map((button, index) => (
                        <FotoSwitchButton
                            setSelectedFotos={setSelectedFotos}
                            selectedFotos={selectedFotos}
                            index={index}
                            key={index}
                            title={button.title}
                            body={button.body}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
