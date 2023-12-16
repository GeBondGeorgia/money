import SponsorContent from "./sponsorContent/SponsorContent";

import heart from "../../assets/images/heart.svg";

const Sponsor = () => {
	return (
		<div className="sponsor">
			<div className="container">
				<img src={heart} alt="man with heart" />

				<SponsorContent />
			</div>
		</div>
	);
};

export default Sponsor;
