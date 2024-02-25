import {
    Home,
    About,
    Shop,
    BookClassesVideo,
    BookClassesWheel,
    BookClassesInfo,
    OpenHours,
    Contacts,
} from '../../components';
import Schedule from '../../components/Schedule/Schedule';
import './landing.scss';

const Landing = () => {
    return (
        <>
            <Home />
            <About />
            <Shop />
            <BookClassesVideo />
            <BookClassesWheel />
            <BookClassesInfo />
            <Schedule />
            <OpenHours />
            <Contacts />
        </>
    );
};

export default Landing;
