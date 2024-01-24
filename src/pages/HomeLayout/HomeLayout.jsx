import { Footer, Header } from "../../components";
import "./homeLayout.scss";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <h1>Home layout</h1>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
