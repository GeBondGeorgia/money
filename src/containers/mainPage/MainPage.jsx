import Navigation from "../../components/navigation/Navigation";
import Promo from "../../components/promo/Promo";
import Sponsor from "../../components/sponsor/Sponsor";
import Footer from "../../components/footer/Footer";

const MainPage = () => {
	return (
		<div className="mainPage">
			<Navigation />
			<Promo />
			<Sponsor />
			<Footer />
		</div>
	);
};

export default MainPage;
