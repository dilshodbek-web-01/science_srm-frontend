import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import LoginInput from "../../UI/LoginInput";
import Button from "../../UI/Button";

const index = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authFunction = (e) => {
    e.preventDefault();

    const registerForm = {
      username: username,
      email: email,
      password: password,
    };

    const check = {
      username: username.trim().length === 0,
      email: email.trim().length === 0,
      password: password.trim().length === 0,
    };

    if (check.username || check.email || check.password) {
      toast.error("Please fill the form");
    } else {
      toast.success("Loading ...", {
        autoClose: 1000,
      });

      const register = async () => {
        await axios
          .post(`http://localhost:3003/auth/sign-up`, registerForm)
          .then((response) => {
            if (response.status === 201) {
              toast.success("New user succesfully created", {
                autoClose: 3000,
              });
              localStorage.setItem("token", response.data.token);
              navigate("/");
            }
          })
          .catch((error) => {
            if (error.response.status === 409) {
              toast.warn("User already exists, try other username");
            }
          });
      };
      setUsername("");
      setEmail("");
      setPassword("");
      register();
    }
  };

  return (
    <>
      <div className="register card shadow-lg py-5 px-4 mt-5 mx-auto w-75">
        <h1 className="text-center text-success mb-3">Sign-up</h1>

        <div className="d-flex align-items-center column-gap-3 justify-content-between">
          <div className="register__image">
            <img
              className="img-fluid"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="loginImage"
            />
          </div>

          <form action="#" className="w-100" onSubmit={(e) => authFunction(e)}>
            <LoginInput
              id={"username"}
              type={"text"}
              pl={"username"}
              labelText={"Enter username"}
              value={username}
              setValue={setUsername}
            />

            <LoginInput
              id={"email"}
              type={"text"}
              pl={"email"}
              labelText={"Enter email"}
              value={email}
              setValue={setEmail}
            />

            <LoginInput
              id={"password"}
              type={"password"}
              pl={"password"}
              labelText={"Enter password"}
              value={password}
              setValue={setPassword}
            />

            <Button
              type={"submit"}
              text={"Login"}
              btnClass={"btn bg-primary text-white w-100 mt-2 mb-3"}
            />

            <strong>
              Already have an account? <Link to={"/login"}>Login</Link>
            </strong>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
