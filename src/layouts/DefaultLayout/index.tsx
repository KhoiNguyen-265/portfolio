import { Outlet } from "react-router-dom";
import FooterLayout from "./components/FooterLayout";
import HeaderLayout from "./components/HeaderLayout";

function DefaultLayout() {
  return (
    <>
      <HeaderLayout />
      <div className="container">
        <Outlet />
      </div>
      <FooterLayout />
    </>
  );
}

export default DefaultLayout;
