import "./homeLayout.scss";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <h1>Home layout</h1>
      <nav>Pottery Studio</nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
