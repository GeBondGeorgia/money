import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import { lazy } from "react";
const ErrorPage = lazy(() => import("../errorPage/ErrorPage"));

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/promo-donate-form" element={<MainPage />} />
				<Route path="/promo-calculator-menu" element={<MainPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
