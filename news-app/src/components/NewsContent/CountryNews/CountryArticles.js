import React from "react";

function CountryArticles(props) {
  //console.log("in country articles")
  return (
    <div className="card">
      <div className="card__body">
      <h2 className="card__title">{props.countryData.name}</h2>
      <p className="card__desc">{props.countryData.description}</p><br />
      <span className="card__url"><span><b>Info : </b></span><a href = {props.countryData.url} target= "_blank">Click Here</a></span>
      <span className="news__published"><span>Country : </span>{props.countryData.country}</span>
    </div>
    </div>
  );
}

export default CountryArticles;