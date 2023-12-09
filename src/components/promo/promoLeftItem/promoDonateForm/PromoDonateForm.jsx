import { useState, useRef, useEffect } from "react";
import serverAPI from "../../../../server/serverAPI";
import "./promoDonateForm.scss";

const PromoDonateForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    donateAmount: "",
    currency: "USD",
    userAvatar: "",
    description: "",
  });

  const [uploadMenuActive, setUploadMenuActive] = useState("hide");
  const [currencyOptions, setCurrencyOptions] = useState(["USD", "GEL", "EUR"]);
  const [formValid, setFormValid] = useState("able");
  const [validateErrors, setValidateErrors] = useState({
    username: "",
    donateAmount: "",
  });
  const [fetchError, setFetchError] = useState();

  const fileInputRef = useRef(null);

  useEffect(() => {
    setCurrencyOptions(["USD", "GEL", "EUR"]);
  }, []);

  const openFileMenu = () => {
    fileInputRef.current.click();
  };
//  read all under down code COMMENT
  const onImageUpload = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64Img = reader.result; // This will contain the base64-encoded image
        console.log(base64Img);
  
        setFormData({
          ...formData,
          imageName: file.name,
          imageData: base64Img,
        });
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (formData.username.trim() === "") {
      newErrors.username = "Please write username";
      valid = false;
    } else {
      newErrors.username = "";
    }

    if (isNaN(+formData.donateAmount) || formData.donateAmount === "") {
        newErrors.donateAmount = "Please enter a valid number";
        valid = false;
      } else {
        newErrors.donateAmount = "";
      }

    setValidateErrors(newErrors);
    return valid;
  };
  
  const postUserDonationForm = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormValid("able");

      serverAPI(formData, "blogs", "POST").catch(error => {
        setFetchError(error)
      });
    } else {
      setFormValid("disable");
    }
  };

  const { username, donateAmount, currency, userAvatar, description } = formData;
  if (fetchError) {
    console.log(fetchError);
    return(
        <div className="promo__donate-form__wrapper">
            <h1 className="promo__donate-form-errorTitle">ERROR</h1>
            <h2>Please reload page</h2>
        </div>
    );
    
  }

  return (
    <>
      <div className={`black-layer ${uploadMenuActive}`}></div>

      <form  disabled={formValid === "disable"}
          action="/submit-url"
          method="post"
          onSubmit={postUserDonationForm}
          className="promo__donate-form">

          <div className={`promo__donate-form__uploadMenu ${uploadMenuActive}`}>
              <div className="promo__donate-form__uploadMenu-wrapper">
                  <button type="button" 
                      className="promo__donate-form__uploadMenu-closeBtn"
                      onClick={() => setUploadMenuActive("hide")}>
                      &#x2718;
                  </button>
                  <button type="button" 
                      onClick={openFileMenu}
                      className="promo__donate-form__uploadMenu-fileBtn">
                          DRAG YOUR IMAGE
                  </button>
              </div>
          </div>
          <div className="promo__donate-form__inputs">
              <div className="promo__donate-form__inputs-wrapper">
                  <div className="promo__donate-form__input">
                      <label htmlFor="username"
                          className="promo__donate-form__input-label">
                              Your name:
                      </label>
                      <input id="username"
                          value={username}
                          onChange={onChange}
                          type="text"
                          name="username"
                          className="promo__donate-form__input-field" 
                      />
                  {validateErrors.username && <div className="error-message">{validateErrors.username}</div>}
                  </div>
                  <div className="promo__donate-form__input">
                      <label htmlFor="donateAmount"
                          className="promo__donate-form__input-label">
                              Donate Value:
                      </label>
                      <input id="donateAmount"
                          value={donateAmount}
                          onChange={onChange}
                          type="text"
                          name="donateAmount"
                          className="promo__donate-form__input-field"
                      />
                      {validateErrors.donateAmount && <div className="error-message">{validateErrors.donateAmount}</div>}
                  </div>
                  <div className="promo__donate-form__input">
                      <label htmlFor="currency"
                          className="promo__donate-form__input-label">
                              Currency:
                      </label>
                      <select id="currency"
                          value={currency}
                          onChange={onChange}
                          list="currencyList"
                          name="currency"
                          className="promo__donate-form__input-field promo__donate-form__input-selection">
                          {currencyOptions.map(option => (
                              <option key={option}>{option}</option>
                          ))}
                      </select>
                  </div>
                  <div className="promo__donate-form__input">
                      <label htmlFor="userAvatar"
                          className="promo__donate-form__input-label">
                              Your logo:
                      </label>
                      <button id="userAvatar"
                          onClick={() => setUploadMenuActive("active")}  
                          type="button" 
                          name="userAvatar"
                          className="promo__donate-form__input-field">
                              Click on me
                      </button>
                  </div>
                  <div className="promo__donate-form__input">
                      <label htmlFor="description"
                          className="promo__donate-form__input-label">
                              Description:
                      </label>
                      <textarea id="description"
                          value={description}
                          onChange={onChange}
                          name="description" 
                          className="promo__donate-form__input-field 
                              promo__donate-form__input-field__textarea" />
                  </div>
              </div>
          </div>

          <input type="submit"
              value="SUBMIT"
              className="promo__donate-form__button" />
          <input type="file"
              ref={fileInputRef}
              name="userAvatar"
              value={userAvatar}
              onChange={onImageUpload}
              className="promo__donate-form__input-field hide" />
      </form>
    
    </>
  );
};

export default PromoDonateForm;
