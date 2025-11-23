import { HashRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import Home from "../../pages/Home";

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default AppRoutes;
