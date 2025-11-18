import { Outlet } from "react-router-dom";
import FooterLayout from "./components/FooterLayout";
import HeaderLayout from "./components/HeaderLayout";

function DefaultLayout() {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default DefaultLayout;
