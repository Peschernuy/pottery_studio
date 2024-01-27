import { useRouteError, Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="error__main">
        <div className="error__container">
          <h1 className="error__title">404</h1>
          <h3 className="error__text">Oops, something went wrong...</h3>
          <Link className="error__link" to="/">
            home page
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="error__main">
      <div className="error__container">
        <h3 className="error__text">there was an error...</h3>
        <Link className="error__link" to="/">
          home page
        </Link>
      </div>
    </main>
  );
};

export default Error;
