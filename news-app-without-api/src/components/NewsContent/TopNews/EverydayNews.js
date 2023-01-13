import React, { useContext, useState } from "react";
import DailyUpdatedNews from "./DailyUpdatedNews";
import NewsArticle from "./NewsArticle";

function EverydayNews(props) {
  //const { everydayData } = useContext(NewsContext);
  //console.log(props.everydayData);
  //console.log(props.userData)

  return (
    <div>
      <div className="wrapper">
        {props.userData
          ? props.userData.map((news) => (
            //console.log(news);
            <DailyUpdatedNews userData={news} key={news._id} />
          ))
          : "loading"}
      </div>

      <div className="wrapper">
        {props.everydayData
          ? props.everydayData.articles.map((news) => (
              <NewsArticle everydayData={news} key={news.url} />
            ))
          : "Loading"}
      </div>

    </div>
  );
}

export default EverydayNews;