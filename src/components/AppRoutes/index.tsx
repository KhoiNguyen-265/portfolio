import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import Home from "../../pages/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
