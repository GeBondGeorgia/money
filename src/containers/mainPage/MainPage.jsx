import Navigation from "../../components/navigation/Navigation"
import Promo from "../../components/promo/Promo";
import Sponsor from "../../components/sponsor/Sponsor";
import Footer from "../../components/footer/Footer";

import "./mainPage.scss";

const pageStatus = "donatePage";


const MainPage = () => {
    return ( 
        <div>
            <Navigation />
            <Promo pageStatus={pageStatus}/>
            <Sponsor />
            <Footer />
        </div>
    )
}

export default MainPage;
