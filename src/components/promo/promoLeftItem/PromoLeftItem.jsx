import { useEffect, useState } from "react";

import PromoCalculatorButtons from "./promoCalculatorButtons/PromoCalculatorButtons";
import PromoDonateForm from "./promoDonateForm/PromoDonateForm";

const PromoLeftItem = ({page}) => {
    const [pageStatus, setPageStatus] = useState(null);
// do page status with react router (get page from status from react router) COMMENT

    useEffect(() => {
        if ( page === "promoCalculator" || page === "promoDonateForm") {
            setPageStatus(page);
        } else {
            console.warn("Invalid initial page name: ", page);
            setPageStatus('promoCalculatorButtons');
        } 
    },[page]);

    if ( pageStatus === "promoCalculatorButtons") {
        return (<PromoCalculatorButtons />);
        
    } else if (pageStatus === "promoDonateForm") { 
        return (
            <div className="promo__left">
                <h1 className="promo__title promo__title-donate">Donate Form</h1>
                
                <PromoDonateForm />
            </div>
        );
    } 
}

export default PromoLeftItem;


