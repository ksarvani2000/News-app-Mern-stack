import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Articles/Articles.css"
import "../TopNews/TopNews.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileByAuthorName from '../Profile/ProfileByAuthorName';

function DailyUpdatedNews(props) {
    //console.log(props.userData)
    const navigate = useNavigate()
    const handleProfileByAuthor = (emailid, e) => {
        e.preventDefault()
        localStorage.setItem("profile-emailid", emailid);
        navigate("/profileByAuthorName") 
    }
  return ( 
    <div className="card">
      <div className="card__body">
      <img className="card__image" src={`${props.userData.urlToImage}`} ></img>
      <h2 className="card__title">{props.userData.title}</h2>
      <p className="card__desc">{props.userData.description}</p>
      <span className="card__url"><span><b>Info : </b></span><a href = {props.userData.url} target= "_blank">Click Here</a></span> <br />
      <a style={{"textDecoration" : "none"}} href=''><span className="news__author" id={props.userData._id} onClick={(e) => handleProfileByAuthor(props.userData.emailid, e)}>Author : {props.userData.author}</span></a> <br />
      <span className="news__published">Published At : {props.userData.publishedAt}</span>
      <span className="news__source">Source : {props.userData.source.name}</span>
    </div>
    </div>
  )
}

export default DailyUpdatedNews