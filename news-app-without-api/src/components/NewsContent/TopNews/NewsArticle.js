import React from "react";

function NewsArticle(props) {
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
      Subject : `You have subsrcibed to ${props.everydayData.source.name}`,
      Body : `Thank you for subsrcibing for ${props.everydayData.source.name} news. You will be receiving daily updated from ${props.everydayData.source.name}. Check out the latest news here ${props.everydayData.url}`
    }).then(msg => alert(msg))
    alert(`Your will receive notification from ${props.everydayData.source.name}`)
  }
  return (
    <div className="card">
      <div className="card__body">
      <img className="card__image" src={`${props.everydayData.urlToImage}`} ></img>
      <h2 className="card__title">{props.everydayData.title}</h2>
      <p className="card__desc">{props.everydayData.description}</p>
      <span className="card__url"><span><b>Info : </b></span><a href = {props.everydayData.url} target= "_blank">Click Here</a></span> <br />
      <span className="news__author">Author : {props.everydayData.author}</span> <br />
      <span className="news__published">Published At : {props.everydayData.publishedAt}</span>
      <span className="news__source">Source : {props.everydayData.source.name}</span>
      <button onClick={subscribeHandler}>Subscribe</button>
    </div>
    </div>
  );
}

export default NewsArticle;