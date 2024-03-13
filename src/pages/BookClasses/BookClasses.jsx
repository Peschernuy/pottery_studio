import "./bookClasses.scss";
import smallImg1 from "../../assets/images/bookClasses/small1.png";
import smallImg2 from "../../assets/images/bookClasses/small2.png";
import smallImg3 from "../../assets/images/bookClasses/small3.png";
import smallImg4 from "../../assets/images/bookClasses/small4.png";
import smallImg5 from "../../assets/images/bookClasses/small5.png";
import bigImg1 from "../../assets/images/bookClasses/big1.png";
import bigImg2 from "../../assets/images/bookClasses/big2.png";
import bigImg3 from "../../assets/images/bookClasses/big3.png";
import { Help, OpenHours } from "../../components";

import ItemContainer from "../../components/ItemContainer/ItemContainer";

const BookClasses = () => {
  return (
    <section className="book-classes">
      <div className="book-classes__intro">
        <div className="book-classes__intro-image">
          <img src={smallImg1} alt="smallImg1" />
        </div>
        <div className="book-classes__intro-content">
          <li>Handmade</li>
          <h1>Welcome to our Classes</h1>
          <p>
            Enroll in a class today and embark on a creative adventure. Our
            classes are designed to inspire, educate, and foster a sense of
            community among fellow pottery enthusiasts.
          </p>
          <p>
            Founded in 1991 on the principles of passion and craftsmanship, our
            studio is a vibrant space dedicated to the art of pottery.
          </p>
        </div>
        <div className="book-classes__intro-image">
          <img src={bigImg1} alt="bigImg1" />
        </div>
      </div>
      <div className="book-classes__choose">
        <div className="book-classes__choose-image">
          <li>Choose</li>
          <ItemContainer
            src={bigImg2}
            alt="bigCup"
            size="big"
            title="“Raku firing”"
            price="$100"
          />
        </div>
        <div className="book-classes__choose-content">
          <h2>Choose your Classes</h2>

          <p>
            Our classes are taught by experienced instructors who will inspire
            you, motivate, eimmerse you in the experience, and impart new
            knowledge. Enjoyment, creativity, new skills and relaxation await
            you.
          </p>

          <p>
            Discover the joy of pottery through our diverse range of classes and
            workshops. From introductory sessions for beginners to specialized
            courses for advanced artists.
          </p>
          <div className="book-classes__choose-products">
            <ItemContainer
              src={smallImg2}
              alt="cup1"
              size="small"
              title="“Clay creations”"
              price="$80"
            />
            <ItemContainer
              src={smallImg3}
              alt="cup1"
              size="small"
              title="“Kids Clay Playtime”"
              price="$50"
            />
          </div>
        </div>
      </div>
      <div className="book-classes__explore">
        <div className="book-classes__explore-content">
          <div className="book-classes__explore-text">
            <p>
              Individual and group pottery class beginner for all ages. For
              children from 3 years old, teenagers and adults. We work from 10
              a.m. to 8 p.m. every day.
            </p>
            <p>
              If you have a company of more than 5 people, we will offer you
              private lessons in pottery class NYC beginner.
            </p>
          </div>
          <div className="book-classes__explore-products">
            <ItemContainer
              src={smallImg4}
              alt="cup1"
              size="small"
              title="“Sculptural pottery”"
              price="$80"
            />
            <ItemContainer
              src={smallImg5}
              alt="cup1"
              size="small"
              title="“Glazing techniques”"
              price="$120"
            />
          </div>
        </div>
        <div className="book-classes__explore-image">
          <ItemContainer
            src={bigImg3}
            alt="bigCup"
            size="big"
            title="“Functional intensive”"
            price="$120"
          />
        </div>
      </div>
      <OpenHours />
      <Help />
    </section>
  );
};

export default BookClasses;
