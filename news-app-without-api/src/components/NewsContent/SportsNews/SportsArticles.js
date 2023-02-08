import React from "react";

function SportsArticles({ sportsData }) {
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
      Subject : `You have subsrcibed to ${sportsData.source.name}`,
      Body : `Thank you for subsrcibing for ${sportsData.source.name} news. You will be receiving daily updated from ${sportsData.source.name}. Check out the latest news here ${sportsData.url}`
    }).then(msg => alert(msg))
    alert(`Your will receive notification from ${sportsData.source.name}`)
  }
  return (
    <div  className="card">
    <div className="card__body">
      <img className="card__image" src={`${sportsData.urlToImage}`} ></img>
      <h2 className="card__title">{sportsData.title}</h2>
      <p className="card__desc">{sportsData.description}</p><br />
      <span className="card__url"><span><b>Info : </b></span><a href = {sportsData.url} target= "_blank">Click Here</a></span> <br />
      <span className="news__author">Author : {sportsData.author}</span> <br />
      <span className="news__published">Published At : {sportsData.publishedAt}</span>
      <span className="news__source">Source : {sportsData.source.name}</span>
      <button onClick={subscribeHandler}>Subscribe</button>
    </div>
    </div>
  );
}

export default SportsArticles;