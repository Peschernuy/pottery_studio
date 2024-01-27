import './header.scss';
import logoHeader from '../../assets/images/header/logo_header.svg';
import btnlogin from '../../assets/images/header/btn_login.svg';
import btnSearch from '../../assets/images/header/btn_search.svg';
import btnBascet from '../../assets/images/header/btn_basket.svg';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header">
                <Link to={'/'} className="header__logo">
                    <img src={logoHeader} alt="" />
                </Link>
                <Navbar />
                <div className="header__btn">
                    <img src={btnSearch} alt="" />
                    <img src={btnlogin} alt="" />
                    <Link to="/cart">
                        <img src={btnBascet} alt="" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
