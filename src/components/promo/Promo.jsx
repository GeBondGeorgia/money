import { useState } from "react";
import man from "../../assets/images/Man.svg"
import "./promo.scss";
import { Link } from "react-router-dom";

const Promo = ({pageStatus}) => { 
    console.log(pageStatus); 

    return (
        <div className="promo">
            <div className="container">
                {                
                    GetPromoLeftItem(pageStatus)
                }
                <div className="promo__right">
                    <img src={man} alt="man with money" className="promo__img" />
                </div> 
            </div>
        </div>
    );
}

const GetPromoLeftItem = (pageStatus) => {
    const [pageName, setPageName] = useState(pageStatus);  
    const mainPage = (
        <div className="promo__left">
        <h1 className="promo__title title">We are free online calculator</h1>
        <h2 className="promo__subtitle subtitle">There you can calculate:</h2>

        <div className="promo__buttons">
            <Link to="/mortgage">
                <button className="promo__button button">mortgage</button>
            </Link>
            <Link>
                <button className="promo__button button">pawnshop</button>
            </Link>
            <Link>
                <button className="promo__button button">deposit</button>
            </Link>
            <Link>
                <button className="promo__button button">credit</button>
            </Link>
            <Link>
                <button className="promo__button button">tax percentage</button>
            </Link>
            <Link>
                <button className="promo__button button">payroll tax</button>
            </Link>
        </div>
    </div>
    );


    if ( pageName === "mainPage") {
        return mainPage;
        
    } else if (pageName === "donatePage") { 
        return (
            <div className="promo__left">
                <h1 className="promo__title promo__title-donate">Donate Form</h1>
                
                {FormCreater()}
            </div>
        );
    } else {
        console.warn("Unexpected page name:", pageName);
        setPageName("mainPage");

        return mainPage;
    }             // Create realization with memory
}

const FormCreater = () => { 
    const [formData, setFormData] = useState({
        username: "",
        donateAmount: "",
        currency: "",
        userAvatar: "",
        description: "",
    });
    

    const onChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData, 
            [name]: value
        });
    }

    const postUserDonationForm = (e) => {
        console.log(e);

        e.preventDefault();
        
        console.log("Form data: ", formData); 
    }

    const {username, donateAmount, currency, userAvatar, description} = formData;
    const currencyOptions = ['USD', 'GEL', 'EUR'];
    
    return (
        <form action="/submit-url" method="post" onSubmit={postUserDonationForm} className="promo__donate-form">
          <div className="promo__donate-form__wrapper">     
            <div className="promo__donate-form__input">
              <label htmlFor="username" className="promo__donate-form__label">Username:</label>
              <input value={username} onChange={onChange} type="text" name="username" id="username" className="promo__donate-form__input-field" />
            </div>
            
            <div className="promo__donate-form__input">
              <label htmlFor="donateAmount" className="promo__donate-form__label">Donate Amount:</label>
              <input value={donateAmount} onChange={onChange} type="text" name="donateAmount" id="donateAmount" className="promo__donate-form__input-field" />
            </div>
      
            <div className="promo__donate-form__input">
              <label htmlFor="currencyList" className="promo__donate-form__label">Currency</label>
         
      
              <select value={currency} onChange={onChange} list="currencyList" id="currencyList" name="currency" className="promo__donate-form__selection-field">
                {currencyOptions.map(option => (
                  <option key={option}  > {option} </option>
                ))}
              </select>          
            </div>
      
            <div className="promo__donate-form__input">
              <label htmlFor="userAvatar" className="promo__donate-form__label">User Avatar:</label>
              <input value={userAvatar} onChange={onChange} type="image" name="userAvatar" id="userAvatar" className="promo__donate-form__input-field" />
            </div>
      
            <div className="promo__donate-form__input">
              <label htmlFor="description" className="promo__donate-form__label">Description:</label>
              <textarea value={description} onChange={onChange} id="description" name="description" className="promo__donate-form__input-field" />
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      );

}


export default Promo;