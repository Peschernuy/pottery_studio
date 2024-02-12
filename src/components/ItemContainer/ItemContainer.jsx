import "./itemContainer.scss";

const ItemContainer = ({ src, size, title, price, ...otherProps }) => {
  return (
    <div className="itemContainer__container" {...otherProps}>
      <img
        src={src}
        alt={title}
        className={`itemContainer__image ${
          size && `itemContainer__image--${size}`
        }`}
      />
      <div className="itemContainer__info">
        <h3 className="itemContainer__title">{title}</h3>
        <p className="itemContainer__price">
          {price ? (
            typeof price === "number" ? (
              price.toFixed(2)
            ) : (
              price
            )
          ) : (
            <span className="itemContainer__missing">Price unavailable</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ItemContainer;
