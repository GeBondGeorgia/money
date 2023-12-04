import "./sponsor.scss";

import arem from "../../assets/images/arem.png"
import heart from "../../assets/images/heart.svg"

const Sponsor = () => {

    return (
        <div className="sponsor">
            <div className="container">
                    <img src={heart} alt="man with heart" />
                    
                    <div className="sponsor__content">
                        <h1 className="sponsor__title title">
                            Our sponsor
                        </h1>

                        <h2 className="sponsor__subtitle subtitle">
                            Thank you for helping this project live
                        </h2>

                        <button className="sponsor__button ">
                                
                                <img src={arem} alt="user" />
                                <h2 className="sponsor__nick">Arem</h2>
                                <h2 className="sponsor__value">Donated: 100$</h2>

                                <p className="sponsor__description">
                                    This is a very good project in the future with great opportunities
                                </p>
                        </button>
                    </div>
            </div>
        </div>
    )

}


export default Sponsor;