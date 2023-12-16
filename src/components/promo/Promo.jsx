import man from "../../assets/images/Man.svg";
import "./promo.scss";

import PromoLeftItem from "./promoLeftItem/PromoLeftItem";

const Promo = ({ pageStatus }) => {
	return (
		<div className="promo">
			<div className="container">
				<PromoLeftItem />
				<div className="promo__right">
					<img src={man} alt="man with money" className="promo__img" />
				</div>
			</div>
		</div>
	);
};

export default Promo;
