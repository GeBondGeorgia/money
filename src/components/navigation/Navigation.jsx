import logo from "../../assets/images/GBC.svg"

import "./navigation.scss"

const Navigation = () => {
    return ( 
        <div className="navigation">
            <img src={logo} alt="Logo GBC" />

            <ul className="items">
                <li className="item active">HOME</li>
                <li className="item">DONATE</li>
            </ul>        
        </div>
    )
}

export default Navigation;