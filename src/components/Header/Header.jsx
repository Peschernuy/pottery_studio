import './header.scss';
import logo from './logo_header.png';
import btnlogin from './btn_login.png';
import btnSearch from './btn_search.png';
import btnBascet from './btn_basket.png';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
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
