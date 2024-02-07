import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import LoginInput from "../../UI/LoginInput";
import Button from "../../UI/Button";

const index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authFunction = (e) => {
    e.preventDefault();

    const loginForm = {
      username: username,
      password: password,
    };

    const check = {
      username: username.trim().length === 0,
      password: password.trim().length === 0,
    };

    if (check.username || check.password) {
      toast.error("Please fill the form");
    } else {
      toast.success("Loading ...", {
        autoClose: 1000,
      });

      const login = async () => {
        await axios
          .post(`http://localhost:3003/auth/sign-in`, loginForm)
          .then((response) => {
            if (response.status === 201) {
              toast.success("User Succesfully sign-in", {
                autoClose: 3000,
              });
              localStorage.setItem("token", response.data.token);
              navigate("/");
            }
          })
          .catch((error) => {
            if (error.response.status === 404) {
              toast.error("User not found or password is incorrect !!!");
            }
          });
      };
      setUsername("");
      setPassword("");
      login();
    }
  };

  return (
    <>
      <div className="login card shadow-lg py-5 px-4 mt-5 mx-auto w-75">
        <h1 className="text-center text-success mb-3">Sign-in</h1>

        <div className="d-flex align-items-center column-gap-3 justify-content-between">
          <div className="login__image">
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
              Don't have an account? <Link to={"/register"}>Sign-up</Link>
            </strong>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
