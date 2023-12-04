import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => { 
    return ( 
        <div className="footer">
                    <Link to="tel:+995 588 21 34 11" className="footer__link">+995 588 21 34 11</Link>
                    <Link to="mailto:gbccomp@gmail.com" className="footer__link">gbccomp@gmail.com</Link>
        </div>
    )
}

export default Footer;