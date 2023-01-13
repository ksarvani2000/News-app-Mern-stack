import React, { useEffect, useReducer, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import classes from './Login.module.css'

const emailReducer = (state, action) => {
    if(action.type === "USER_EMAIL") {
      return {value : action.payload, isValid : action.payload.includes('@')}
    } 
    if(action.type === "INPUT_BLUR") {
      return {value : state.value, isValid : state.value.includes("@")}
    }
    return {value : '', isValid : false}
  }
  const passReducer = (state, action) => {
    if(action.type === "USER_PASS") {
      return {value : action.payload, isValid : action.payload.trim().length > 6}
    } 
    if(action.type === "INPUT_BLUR") {
      return {value : state.value, isValid : state.value.trim().length > 6}
    }
    return {value : '', isValid : false}
  }

function Login(props) {
    const [formIsValid, setFormIsValid] = useState(false);
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')

  const [emailState, dispatchEmail] = useReducer( emailReducer, {
    value : '',
    isValid : null
  }) 
  const [passState, dispatchPass] = useReducer( passReducer, {
    value : '',
    isValid : null
  })

  const { isValid : emailIsValid} = emailState
  const {isValid : passIsValid} = passState

  useEffect(() => {
    const identifier = setTimeout(()=> {
       //console.log("in set time out")
       setFormIsValid(
         emailIsValid && passIsValid 
       );
     }, 500)
 
     return () => {
       //console.log("clean up")
       clearTimeout(identifier)
     }
   },[emailIsValid,passIsValid])

   const emailChangeHandler = (event) => {
    dispatchEmail({type : "USER_EMAIL", payload : event.target.value})
    setUserEmail(event.target.value)
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type : "USER_PASS", payload : event.target.value})
    setPassword(event.target.value)
  };

  const validateEmailHandler = () => {
    dispatchEmail({type : "INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPass({type : "INPUT_BLUR"})
  };

  const naviagte = useNavigate()
  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("email id", userEmail)
    localStorage.setItem("password", password)
    const val= true;
    props.setIsLoggedIn(val)
    naviagte('/topNews')
  };

  return (
    <Card>
      <h3>Login</h3>
        <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                Login
            </Button>
        </div>
        </form>
    </Card>
  )
}

export default Login