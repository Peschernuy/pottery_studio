import "./bookClassesInfo.scss";
import MyButton from "../UI/MyButton/MyButton";

function BookClassesInfo() {
  return (
    <section className="bookInfo__section">
      <div className="bookInfo__inner">
        <li className="bookInfo__li">Classes</li>
        <h1 className="bookInfo__title">Pottery Studio Classes Schedule</h1>
        <p className="bookInfo__text--1">
          Choose from a variety of classes catering to different skill levels,
          from beginners eager to experience the joy of molding clay to advanced
          artisans looking to refine their techniques.
        </p>
        <p className="bookInfo__text--2">
          Booking a class is a seamless process on our user-friendly website.
          Simply browse through our class offerings, select the one that suits
          your interest and schedule, and proceed to secure your spot.
        </p>
        <MyButton theme="transparent" size='252px'>see all</MyButton>
      </div>
    </section>
  );
}

export default BookClassesInfo;
