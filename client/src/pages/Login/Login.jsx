import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { loginfunction } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/astronaut.jpg";
import { Phone, Fingerprint } from 'lucide-react';
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginfunction(email, password);
      console.log(response);
      if (response && response.exists) {
        const { token } = response;
        sessionStorage.setItem("auth_token", token)
        navigate('/reception');
      }
      else {
        console.log("Fetching error");
        navigate('/');
      }
    } catch (error) {
      console.log("Server Error", error);
      toast.error("Server Error");
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
              <label htmlFor="email">User email</label>
              <input
                type="email"
                id="email"
                email="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
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
                email="password"
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
                value="Verify User"
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