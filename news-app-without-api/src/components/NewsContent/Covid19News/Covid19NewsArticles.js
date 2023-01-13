import React from "react";

function Covid19NewsArticles({ covidTrackerData }) {
  const emailNotifications = sessionStorage.getItem("login-data")
  const subscribeHandler = () => {
    alert(`Your will receive notification from ${covidTrackerData.source.name}`)
  }
  return (
    <div className="card">
      <div className="card__body">
      <img className="card__image" src={`${covidTrackerData.urlToImage}`} ></img>
      <h2 className="card__title">{covidTrackerData.title}</h2>
      <p className="card__desc">{covidTrackerData.description}</p><br />
      <span className="card__url"><span><b>Info : </b></span><a href = {covidTrackerData.url} target= "_blank">Click Here</a></span><br />
      <span className="news__author">Author : {covidTrackerData.author}</span> <br />
      <span className="news__published">Published At : {covidTrackerData.publishedAt}</span>
      <span className="news__source">Source : {covidTrackerData.source.name}</span>
      <a href={`mailto:${emailNotifications}?subject=You have subscribed to ${covidTrackerData.source.name}`}><button onClick={subscribeHandler}>Subscribe</button></a>
    </div>
    </div>
  );
}

export default Covid19NewsArticles;