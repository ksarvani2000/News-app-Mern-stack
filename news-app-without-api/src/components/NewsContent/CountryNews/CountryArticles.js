import React from "react";
import { useNavigate } from "react-router-dom";

function CountryArticles(props) {
  //console.log(props)
  const emailNotifications = sessionStorage.getItem("login-data")
  const subscribeHandler = () => {
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
      <a href={`mailto:${emailNotifications}?subject=You have subscribed to ${props.countryData.name}`}><button onClick={subscribeHandler}>Subscribe</button></a>
    </div>
    </div>
  );
}

export default CountryArticles;