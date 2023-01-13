import React from "react";
import { useNavigate } from "react-router-dom";

function SportsArticles({ sportsData }) {
  const naviagte = useNavigate()
  const emailNotifications = sessionStorage.getItem("login-data")
  const subscribeHandler = () => {
    naviagte('/subscribe')
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
      <a href={`mailto:${emailNotifications}?subject=You have subscribed to ${sportsData.source.name}`}><button onClick={subscribeHandler}>Subscribe</button></a>
    </div>
    </div>
  );
}

export default SportsArticles;