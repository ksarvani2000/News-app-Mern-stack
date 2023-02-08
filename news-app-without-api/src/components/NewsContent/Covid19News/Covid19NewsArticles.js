import React from "react";

function Covid19NewsArticles({ covidTrackerData }) {
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
      Subject : `You have subsrcibed to ${covidTrackerData.source.name}`,
      Body : `Thank you for subsrcibing for ${covidTrackerData.source.name} news. You will be receiving daily updated from ${covidTrackerData.source.name}. Check out the latest news here ${covidTrackerData.url}`
    }).then(msg => alert(msg))
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
      <button onClick={subscribeHandler}>Subscribe</button>
    </div>
    </div>
  );
}

export default Covid19NewsArticles;