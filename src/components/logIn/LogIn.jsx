import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const LogIn = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="wrap">
            <div className="contents--">
              <h2>WELCOME BACK!</h2>
              <p className="singUp">
                Don’t have a account,{" "}
                <Link to={""} className="text-[#8699DA]">
                  Sign up
                </Link>
              </p>
              <form className="logIn">
                <div className="userName_password">
                  <label htmlFor="userName">Username</label>
                  <input
                    type="text"
                    id="userName"
                    placeholder="deniel123@gmail.com"
                  />
                </div>
                <div className="userName_password">
                  <label htmlFor="passWord">Password</label>
                  <input type="password" id="passWord" placeholder="Password" />
                </div>
                <div className="forgetPass">
                  <p>
                    <div className="checkBox">
                      <div className="miniBox"></div>
                    </div>
                    Remember me
                  </p>
                  <Link className="forget" to={""}>
                    Forget password?
                  </Link>
                </div>
                <button>Sign In</button>
              </form>
              <h4>
                <span>or continue with</span>
              </h4>
              <div className="socialIcon">
                <Link to={""}>
                  <FcGoogle />
                </Link>
                <Link to={""}>
                  <FaFacebook className="text-[#8699DA]" />
                </Link>
                <Link to={""}>
                  <FaApple />
                </Link>
              </div>
            </div>
            <div className="images">
              <img src="./logIn.png" alt="LogIn_Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
