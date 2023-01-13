import React , { useEffect, useReducer, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import classes from './Register.module.css'

const nameReducer = (state, action) => {
    if(action.type === "USER_NAME") {
      return {value : action.payload}
    } 
    return {value : ''}
  }

  const mobileReducer = (state, action) => {
    if(action.type === "USER_MOBILE") {
      return {value : action.payload, isValid : action.payload.trim().length >= 10}
    } 
    if(action.type === "INPUT_BLUR") {
      return {value : state.value, isValid : state.value.trim().length >= 10}
    }
    return {value : '', isValid : false}
  }

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

  function Register(props) {

  const [formIsValid, setFormIsValid] = useState(false);

  const [NameState, dispatchName] = useReducer( nameReducer, {
    value : ''
  }) 
  const [mobileState, dispatchMobile] = useReducer( mobileReducer, {
    value : '',
    isValid : null
  }) 
  const [emailState, dispatchEmail] = useReducer( emailReducer, {
    value : '',
    isValid : null
  }) 
  const [passState, dispatchPass] = useReducer( passReducer, {
    value : '',
    isValid : null
  })

  
  const {isValid : numIsValid} = mobileState
  const { isValid : emailIsValid} = emailState
  const {isValid : passIsValid} = passState

  useEffect(() => {
    const identifier = setTimeout(()=> {
       //console.log("in set time out")
       setFormIsValid(
         emailIsValid && passIsValid && numIsValid
       );
     }, 500)
 
     return () => {
       //console.log("clean up")
       clearTimeout(identifier)
     }
   },[emailIsValid,passIsValid,numIsValid])

   const emailChangeHandler = (event) => {
    dispatchEmail({type : "USER_EMAIL", payload : event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type : "USER_PASS", payload : event.target.value})
  };

  const mobileChangeHandler = (event) => {
    dispatchMobile({type : "USER_MOBILE", payload : event.target.value})
  };

  const nameChangeHandler = (event) => {
    dispatchName({type : "USER_NAME", payload : event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type : "INPUT_BLUR"})
  };

  const validateMobileHandler = () => {
    dispatchMobile({type : "INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPass({type : "INPUT_BLUR"})
  };
  
  const naviagte = useNavigate()

  const submitHandler = async (event) => {
    event.preventDefault();
    props.setIsLoggedIn(true)

    const _id = emailState.value
    const name = NameState.value
    const emailid = emailState.value
    const mobile = mobileState.value
    const password = passState.value
  
    //console.log(name, emailid, mobile, password)
    const result = fetch("/userProfile", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        _id, name, emailid, mobile, password
      })
    });
    const res = await (result).json()
      props.handleRegistration(_id)
      sessionStorage.setItem("login-data", _id)
    //console.log(res)
      naviagte('/topNews')
    
  };

  return (
    <Card>
      <h3>Register</h3>
        <form onSubmit={submitHandler}>
        <div
          className={`${classes.control}`}
        >
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={NameState.value}
            onChange={nameChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail/UserName</label>
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
            mobileState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="name">Mobile Number</label>
          <input
            type="number"
            id="number"
            value={mobileState.value}
            onChange={mobileChangeHandler}
            onBlur={validateMobileHandler}
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
                Register
            </Button>
        </div>
        </form>
        <div>Had an account  <Link to='/login'><span>Login</span></Link></div>
    </Card>
  )
}

export default Register