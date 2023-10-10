import React, { useState } from 'react';
import { User, Mail, Phone, CalendarDays, CreditCard } from 'lucide-react';
import { registerfunction } from "../../Services/api";
import Success from '../../Components/Popups/Success';
import "./register.css";

function Register() {

  const [name, setName] = useState('');
  const [health, setHealth] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [mrn, setMrn] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const ClosePopup = () => {
    setShowSuccess(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Clicked Successfully");
    try {
      const response = await registerfunction(name, health, phone, birth, gender, mrn);
      console.log(response);
      setShowSuccess(true);
    }

    catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='wizard-Container'>
      <div className="register-container">
        <div className="register-main">
          <div className="register-wrapper">
            <span>START FOR FREE</span>
            <h1>Create new account  </h1>
            <span>Already A Member?</span>
            <div className="form-wrapper">



              {/* PERSONAL INFORMATION */}
              <div className="text-row">
                <div className="text-field-register">
                  <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                  <User size={32} color="#7CE395" strokeWidth={1.5} />
                </div>
                <div className="text-field-register">
                  <input type="tel" name="phone" id="phone" placeholder='Phone' maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <Phone size={32} color="#7CE395" strokeWidth={1.5} />
                </div>
              </div>

              {/* DOCTOR OR PATIENT REGISTER */}
              <div className="text-field-register column">
                  <input type="text" name="text" id="mrn" placeholder='MRN' value={mrn} onChange={(e) => setMrn(e.target.value)} />
                  <CreditCard size={32} color="#7CE395" strokeWidth={1.5} />
              </div>

              {/* HEALTH CARD DETAILS */}
              <div className="text-field-register column">
                <input type="text" name="text" id="health" placeholder='Health Card' value={health} onChange={(e) => setHealth(e.target.value)} />
                <Mail size={32} color="#7CE395" strokeWidth={1.5} />
              </div>

              {/* DATE OF BIRTH */}    
              <div className="text-field-register column">
                <input type="date" name="birth" id="birth" placeholder='mm/dd/yyyy' value={birth} onChange={(e) => setBirth(e.target.value)} />
                <CalendarDays size={32} color="#7CE395" strokeWidth={1.5} />
              </div>
              <div className="text-field-register radio">
                <label className="radio-label">
                  <input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                  <span className="radio-button"></span> Male
                </label>
                <label className="radio-label">
                  <input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                  <span className="radio-button"></span> Female
                </label>
                <label className="radio-label">
                  <input type="radio" name="gender" id="others" value="others" checked={gender === 'others'} onChange={(e) => setGender(e.target.value)} />
                  <span className="radio-button"></span> Others
                </label>
              </div>

              {/* REGISTER BUTTON */}
              <div className="form-submit">
                <input
                  type="submit"
                  className="my-form_register_button"
                  value="Register"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccess && (
        <Success onClose={ClosePopup} />
      )}
    </div>
  )
}

export default Register