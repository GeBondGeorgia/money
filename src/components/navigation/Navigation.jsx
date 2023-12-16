import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/GBC.svg";
import "./navigation.scss";

const Navigation = () => {
	const [calculatorMenu, setCalculatorMenuActive] = useState("");
	const [donateFormActive, setDonateFormActive] = useState("");
	const { pathname } = useLocation();

	useEffect(() => {
		const seeActiveLink = () => {
			if (pathname === "/promo-donate-form") {
				setDonateFormActive("active");
				setCalculatorMenuActive("");
			} else if (pathname === "/promo-calculator-menu" || pathname === "/") {
				setDonateFormActive("");
				setCalculatorMenuActive("active");
			}
		};
		seeActiveLink();
	}, [pathname]);

	return (
		<div className="navigation">
			<img src={logo} alt="Logo GBC" />

			<ul className="items">
				<Link to="/promo-calculator-menu" className={`item ${calculatorMenu}`}>
					HOME
				</Link>
				<Link to="/promo-donate-form" className={`item ${donateFormActive}`}>
					DONATE
				</Link>
			</ul>
		</div>
	);
};

export default Navigation;
