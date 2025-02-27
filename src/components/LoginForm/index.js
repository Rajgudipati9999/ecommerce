import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import {
  LoginFormContainer,
  LoginButton,
  LoginFormLogo,
  UserNameContainer,
  PasswordContainer,
  InputElement,
  Label,
  FormContainer,
  ErrorMsg,
} from "./styledComponnts";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorBgPwd, setErrorBgPwd] = useState("");
  const [errorBgUser, setErrorBgUser] = useState("");
  const navigate = useNavigate();
  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 60 });
    navigate("/");
  };

  const onSubmitFailure = (errorMsg) => {
    setErrorMsg(`*${errorMsg}`);
  };
  const errorUserHandle = () => {
    setErrorBgUser("red");
  };

  const errorPasswordHandle = () => {
    setErrorBgPwd("red");
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    } else if (response.status === 500) {
      setErrorMsg("Network Error");
    } else {
      onSubmitFailure(data.error_msg);
    }
  };
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const renderPasswordField = () => {
    return (
      <PasswordContainer>
        <Label className="input-label" htmlFor="password">
          PASSWORD
        </Label>
        <InputElement
          type="password"
          placeholder="Enter Password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={onChangePassword}
          onBlur={errorPasswordHandle}
          style={password.length > 0 ? null : { borderColor: `${errorBgPwd}` }}
        />
      </PasswordContainer>
    );
  };
  const renderUsernameField = () => {
    return (
      <UserNameContainer>
        <Label className="input-label" htmlFor="username">
          USERNAME
        </Label>
        <InputElement
          type="text"
          placeholder="Enter Username"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={onChangeUsername}
          onBlur={errorUserHandle}
          style={username.length > 0 ? null : { borderColor: `${errorBgUser}` }}
        />
      </UserNameContainer>
    );
  };
  return (
    <LoginFormContainer>
      <FormContainer className="form-container" onSubmit={submitForm}>
        <LoginFormLogo>Trendzy</LoginFormLogo>
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <LoginButton type="submit">Login</LoginButton>
        <ErrorMsg>{`${errorMsg}`}</ErrorMsg>
      </FormContainer>
    </LoginFormContainer>
  );
};
export default LoginForm;
