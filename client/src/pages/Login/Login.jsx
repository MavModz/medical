import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { loginfunction } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/astronaut.jpg";
import { Phone, Fingerprint } from 'lucide-react';
import "./login.css";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginfunction(name);
      console.log(response);
      if (response && response.exists) {
        console.log(response.name);
        const { token } = response;
        sessionStorage.setItem("auth_token", token)
        navigate('/');
      }
      else {
        console.log("Fetching error");
        const { token } = response;
        sessionStorage.setItem("register_token", token)
        navigate('/register');
      }
    } catch (error) {
      console.log("Enter Valid OTP", error);
      toast.error("OTP Invalid");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <span className="centering">
          <form className="my-form">
            <span className="login-welcome-row">
              <img src={Image} className="login-welcome" alt="main logo img" />
              <h1>LogIn</h1>
            </span>
            <div className="text-field">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter name"
                maxLength={10}
                autoComplete="off"
                required
              />
              <Phone color="#1D3A70" strokeWidth={1.5} />
            </div>
            <div className="text-field">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                maxLength={6}
              />
              <Fingerprint color="#1D3A70" strokeWidth={1.5} />
            </div>
            <div className="Verify_Otp">
              <input
                type="submit"
                className="my-form__button"
                value="Verify OTP"
                onClick={handleSubmit}
              />
            </div>
          </form>
          <div id="sign-in-button"></div>
        </span>
      </div>
    </>
  );
};

export default Login;