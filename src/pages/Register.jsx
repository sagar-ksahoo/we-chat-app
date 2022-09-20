import React from 'react'
import avatarLogo from "../images/avatar-logo.png"
const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">We Chat</span>
            <span className="title">Register</span>

            <form>
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{display: "none"}} type="file" id='file'/>

                <label htmlFor="file">
                    <img src = {avatarLogo} alt="" />
                    <span>Add an Avatar</span>
                </label>

                <button>Sign Up</button>
            </form>

            <p>Already have an account? Sign In</p>
        </div>
    </div>
  )
}

export default Register;