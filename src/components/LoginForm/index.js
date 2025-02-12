import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
// import { useCookie } from "@use-hook/use-cookie";

import 
{ 
  LoginFormContainer, 
  LoginButton,LoginFormLogo,
  UserNameContainer,
  PasswordContainer ,
  InputElement,
  Label,
  FormContainer ,
  ErrorMsg
} 
 
from './styledComponnts'

const LoginForm = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [errorMsg , setErrorMsg] = useState('')
  // const [token , setJwtToken] = useCookie('')
  const [errorBgPwd , setErrorBgPwd] = useState('')
  const [errorBgUser , setErrorBgUser] = useState('')
  const [token , getToken] = useState()
  const navigate = useNavigate()
  console.log(errorBgUser) ;
  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token' , jwtToken)
    if (!jwtToken) {
      return  navigate('/login')
    }else {
      return navigate('/')
    }
  }

  const onSubmitFailure = (errorMsg) => {
    setErrorMsg(`*${errorMsg}`) 
  }
  const errorUserHandle = () => {
    console.log('Event Is Triggered')
    setErrorBgUser('red')
  }

  const errorPasswordHandle = () => {
    setErrorBgPwd('red')
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    console.log(userDetails);
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data);
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
    else if (response.status === 500) {
      setErrorMsg('Network Error')
    }
    else {
      onSubmitFailure(data.error_msg)
    }
  }
  const onChangeUsername = event => {
    setUsername(event.target.value)
  }
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const renderPasswordField = () => {
    return (
      <PasswordContainer>
        <Label className="input-label" htmlFor="password">
          PASSWORD
        </Label>
        <InputElement
          type="password"
          placeholder='Enter Password'
          id="password"
          className="password-input-filed"
          value={password}
          onChange={onChangePassword}
          onBlur={errorPasswordHandle}
          style={password.length > 0 ? {borderColor:'green'}: {borderColor :`${errorBgPwd}`}}
        />
      </PasswordContainer>
    )
  }
  const renderUsernameField = () => {
    return (
      <UserNameContainer>
        <Label className="input-label" htmlFor="username">
          USERNAME
        </Label>
        <InputElement
          type="text"
          placeholder='Enter Username'
          id="username"
          className="username-input-filed"
          value={username}
          onChange={onChangeUsername}
          onBlur={errorUserHandle}
          style={username.length > 0 ? {borderColor :'green'}: {borderColor :`${errorBgUser}`}}
        />
      </UserNameContainer>
    )
  }
    return (
      <LoginFormContainer>
        <FormContainer className="form-container" onSubmit={submitForm}>
          <LoginFormLogo>Nxt Trends</LoginFormLogo>
            <div className="input-container">{renderUsernameField()}</div>
            <div className="input-container">{renderPasswordField()}</div>
          <LoginButton type="submit">
            Login
          </LoginButton>
          <ErrorMsg>{`${errorMsg}`}</ErrorMsg>
        </FormContainer>
      </LoginFormContainer>
    )
  }
export default LoginForm ;