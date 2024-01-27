import { Footer, Header } from '../../components';
import './homeLayout.scss';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <Header />
            <div className="homeLayout__content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default HomeLayout;
