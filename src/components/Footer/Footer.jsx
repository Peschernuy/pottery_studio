import './footer.scss';
import logo from '../../assets/images/footer/logo_footer.svg';
import btn_instagram from '../../assets/images/footer/btn_instagram.svg';
import btn_facebook from '../../assets/images/footer/btn_facebook.svg';
import btn_telegram from '../../assets/images/footer/btn_telegram.svg';

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="footer__content">
                <div className="footer__nav__hrefs">
                    <a>About</a>
                    <a>Shop</a>
                    <a>Book classes</a>
                    <a>Open hours</a>
                    <a>Contacts</a>
                </div>
                <div className="footer__logo">
                    <img src={logo} alt="" />
                    <div>2024 © All rights reserved</div>
                </div>
                <div className="footer__contact__icons">
                    <img src={btn_instagram} alt="" />
                    <img src={btn_facebook} alt="" />
                    <img src={btn_telegram} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
