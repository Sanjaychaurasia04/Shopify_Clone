import React from 'react'
import "../CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='enter name ' />
          <input type="email" placeholder='enter your email' />
          <input type="passward" placeholder='enter passward' />
        </div>
        <button>Continue</button>
        <p className="login">
          Already Have An Account ? <span>Login Here</span>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing , i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup