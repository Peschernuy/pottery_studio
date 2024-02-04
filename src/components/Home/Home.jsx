import './home.scss';
import hero_big_foto_default from '../../assets/images/home/hero_big_foto_default.svg';
import hero_little_foto_default from '../../assets/images/home/hero_little_foto_default.svg';
import { Link } from 'react-router-dom';
import MyButton from '../UI/MyButton/MyButton';

const Home = () => {
    return (
        <section className="home">
            <div className="content">
                <div className="title">
                    <div className="our__classes">
                        <div>Our classes and courses are friendly everyone.</div>
                    </div>
                    <div className="explore">Explore the Ancient Art</div>
                </div>
                <div className="body">
                    <div className="item">
                        <img src={hero_little_foto_default} alt="" />
                        <div>We are a Studio offering Pottery and Classes</div>
                    </div>
                    <div className="go__to__shop">
                        <div></div>
                        <div className="go__to__shop__text">
                            <div>
                                Unleash your creativity in our pottery studio, offering inspiring
                                classes and a curated shop.
                            </div>
                            <Link to="/products">
                                <MyButton theme="light">shop</MyButton>
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
