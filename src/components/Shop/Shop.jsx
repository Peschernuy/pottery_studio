import ItemContainer from "../ItemContainer/ItemContainer";
import MyButton from "../UI/MyButton/MyButton";
import bigCup from "../../assets/images/shop/teaBig.png";
import smallCup1 from "../../assets/images/shop/tea1.png";
import smallCup2 from "../../assets/images/shop/tea2.png";
import { Link } from "react-router-dom";
import "./shop.scss";

const Shop = () => {
  return (
    <section className="shop__section">
      <ItemContainer
        className="shop__bigCup"
        src={bigCup}
        alt="bigCup"
        size="big"
        title="Teacup"
        price="$100"
      />
      <ItemContainer
        src={smallCup1}
        alt="cup1"
        size="small"
        title="Teapot Jan"
        price="$100"

      />
      <li className="shop__li">Pottery shop</li>
      <div className="shop__inner">
        <h2 className="shop__title">Visit our Pottery Shop</h2>
        <p className="shop__subtitle">
          Step into a world of craftsmanship and creativity where each piece
          tells a unique story. Our shelves boast a diverse collection of
          handcrafted pottery, from functional dinnerware to exquisite
          decorative pieces, all crafted by skilled artisans.
        </p>
        <Link to="/products">
          <MyButton theme="transparent">more info</MyButton>
        </Link>
        <ItemContainer
          src={smallCup2}
          alt="cup2"
          size="small"
          title="Teapot Jan"
          price="$100"
          className="shop__inner--img"
        />
      </div>
    </section>
  );
};

export default Shop;
