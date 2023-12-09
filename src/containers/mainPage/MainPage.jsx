
import Navigation from "../../components/navigation/Navigation"
import Promo from "../../components/promo/Promo";
import Sponsor from "../../components/sponsor/Sponsor";
import Footer from "../../components/footer/Footer";
// import ErrorPage from "../errorPage/ErrorPage";




const MainPage = () => {
    const pageStatus = "promoDonateForm";


    return ( 
        <div className="mainPage">
            <Navigation />
            <Promo pageStatus={pageStatus}/>
            <Sponsor />
            <Footer />
        
        </div>

    )
}

export default MainPage;
