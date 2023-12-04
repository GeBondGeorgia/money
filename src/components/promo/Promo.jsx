import man from "../../assets/images/Man.svg"
import "./promo.scss";
import { Link } from "react-router-dom";

const Promo = (imgPageStatus) => { 

    return (
        <div className="promo">
            <div className="container">
                    <div className="promo__left">
                        <h1 className="promo__title title">We are free online calculator</h1>
                        <h2 className="promo__subtitle subtitle">There you can calculate:</h2>

                        <div className="promo__buttons">
                            <Link to="/mortgage">
                                <button className="promo__button button">mortgage</button>
                            </Link>
                            <Link >
                                <button className="promo__button button">pawnshop</button>
                            </Link>
                            <Link >
                                <button className="promo__button button">deposit</button>
                            </Link>
                            <Link >
                                <button className="promo__button button">credit</button>
                            </Link>
                            <Link >
                                <button className="promo__button button">tax percentage</button>
                            </Link>
                            <Link >
                                <button className="promo__button button">payroll tax</button>
                            </Link>

                        </div>
                    </div>

                    <div className="promo__right">
                        <img src={man} alt="man with money" className="promo__img" />
                    </div>
                </div>
            </div>
    )
}

const returnPromoLeftItem = (imgPageStatus) => {
    
}

export default Promo;