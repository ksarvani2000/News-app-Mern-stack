import React from "react";
import { useNavigate } from "react-router-dom";

function CountryArticles(props) {
  //console.log(props)
  const emailId = sessionStorage.getItem("login-data")
  const subscribeHandler = (event) => {
    event.preventDefault()
    window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "k.sarvani2000@gmail.com",
      Password : "2E28971EFB0094FDA575C09446600F172DA3",
      Server : "smtp.elasticemail.com",
      Port : 2525,
      To : `${emailId}`,
      From : "k.sarvani2000@gmail.com",
      Subject : `You have subsrcibed to ${props.countryData.source.name}`,
      Body : `Thank you for subsrcibing for ${props.countryData.source.name} news. You will be receiving daily updated from ${props.countryData.source.name}. Check out the latest news here ${props.countryData.url}`
    }).then(msg => alert(msg))
    alert(`Your will receive notification from ${props.countryData.name}`)
  }
  //console.log("in country articles")
  return (
    <div className="card">
      <div className="card__body">
      <h2 className="card__title">{props.countryData.name}</h2>
      <p className="card__desc">{props.countryData.description}</p><br />
      <span className="card__url"><span><b>Info : </b></span><a href = {props.countryData.url} target= "_blank">Click Here</a></span>
      <span className="news__published"><span>Country : </span>{props.countryData.country}</span>
      <button onClick={subscribeHandler}>Subscribe</button>
    </div>
    </div>
  );
}

export default CountryArticles;