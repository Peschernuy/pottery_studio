import './home.scss';
import hero_big_foto_default from '../../assets/images/home/hero_big_foto_default.svg';
import hero_little_foto_default from '../../assets/images/home/hero_little_foto_default.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home">
            <div className="home__content">
                <div className="home__title">
                    <div className="home__our__classes">
                        <div>Our classes and courses are friendly everyone.</div>
                    </div>
                    <div className="home__explore">Explore the Ancient Art</div>
                </div>
                <div className="home__body">
                    <div className="home__item">
                        <img src={hero_little_foto_default} alt="" />
                        <div>We are a Studio offering Pottery and Classes</div>
                    </div>
                    <div className="home__go__to__shop">
                        <div></div>
                        <div className="home__go__to__shop__text">
                            <div>
                                Unleash your creativity in our pottery studio, offering inspiring
                                classes and a curated shop.
                            </div>
                            <Link to="/products">
                                <div className="home__link">shop</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <img src={hero_big_foto_default} alt="" />
        </section>
    );
};

export default Home;
