import React from "react";

function NewsArticle(props) {
  const emailNotifications = sessionStorage.getItem("login-data")
  const subscribeHandler = () => {
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
      <a href={`mailto:${emailNotifications}?subject=You have subscribed to ${props.everydayData.source.name}`}><button onClick={subscribeHandler}>Subscribe</button></a>
    </div>
    </div>
  );
}

export default NewsArticle;