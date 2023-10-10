import React from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/astronaut.jpg"
import "./success.css";

function Success() {
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            navigate('/register');
        }
        catch (error) {
            console.log("internal Server Error")
        }
    }

  return (
    <div className="success_container">
        <span className="success_centering">
          <form className="success_my-form">
            <span className="login-welcome-row">
              <img src={Image} className="login-welcome" alt="main logo img" />
              <h1>LogIn</h1>
            </span>
            <div className="Verify_Otp">
              <input
                type="submit"
                className="success_my-form__button"
                value="Click to Proceed"
                onClick={handleSubmit}
              />
            </div>
          </form>
          <div id="sign-in-button"></div>
        </span>
      </div>
  )
}

export default Success