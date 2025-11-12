import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import Home from "../../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
