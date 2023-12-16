import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import serverAPI from "../../../../server/serverAPI";

import "./promoCalculatorButtons.scss";
import PromoError from "../promoError/PromoError";
import { Helmet } from "react-helmet";

const PromoCalculatorButtons = () => {
	const [buttonsList, setButtonsList] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [buttonListLoading, setButtonsListLoading] = useState("LOADING....");

	useEffect(() => {
		serverAPI("buttons")
			.then((buttons) => {
				setButtonsList(buttons);
				setButtonsListLoading(null);
			})
			.catch((error) => {
				setFetchError(error.message);
			});
	}, []);

	if (fetchError) {
		return <PromoError error={fetchError} />;
	}

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />

				<meta
					name="description"
					content="Page where you can chose some calculator"
				/>

				<title>GBC CALCULATOR</title>

				<link
					rel="canonical"
					href="http://localhost:3000/promo-calculator-menu"
				/>
			</Helmet>
			<div className="promo__left">
				<h1 className="promo__title title">We are free online calculator</h1>
				<h2 className="promo__subtitle subtitle">There you can calculate:</h2>
				{buttonListLoading}
				<div className="promo__buttons">
					{buttonsList.map(({ button }) => {
						const buttonName = Object.keys(button);
						const buttonLink = Object.values(button);
						return (
							<Link
								to={"/promo-calculator-menu" + buttonLink}
								key={buttonName}
								className="promo__button button"
							>
								{buttonName}
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default PromoCalculatorButtons;
