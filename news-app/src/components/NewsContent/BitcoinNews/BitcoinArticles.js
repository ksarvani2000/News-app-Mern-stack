import React from "react";
import "./BitcoinArticles.css"

function BitcoinArticles({bitcoinData}) {
  //console.log("in country articles")
  const alternative = "https://www.bing.com/images/search?view=detailV2&ccid=ULqAQAwO&id=90D9085783D31D522A9B314CCADC6B9EA0C9D174&thid=OIP.ULqAQAwO_oIW9rDIg6S9GgHaEL&mediaurl=https%3a%2f%2fak1.picdn.net%2fshutterstock%2fvideos%2f3210211%2fthumb%2f9.jpg&exph=480&expw=852&q=news+images&simid=608012007616051036&FORM=IRPRST&ck=367BB1C61C9860184BA7362C38E27F79&selectedIndex=50"
  return (
    <div className="card">
      <div className="card__body">
      <img className="card__image" alt="photo" src={ `${bitcoinData.urlToImage}`} />
      <h2 className="card__title">{bitcoinData.title}</h2>
      <p className="card__desc">{bitcoinData.description}</p><br />
      <span className="card__url"><span><b>Info : </b></span><a href = {bitcoinData.url} target= "_blank">Click Here</a></span> <br /><br />
      <span className="news__author">Author : {bitcoinData.author}</span> <br />
      <span className="news__published">Published At : {bitcoinData.publishedAt}</span><br />
      <span className="news__source">Source : {bitcoinData.source.name}</span><br />
    </div>
    </div>
  );
}

export default BitcoinArticles;