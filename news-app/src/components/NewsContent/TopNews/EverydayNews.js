import React, { useContext } from "react";
import NewsArticle from "./NewsArticle";

function EverydayNews(props) {
  //const { everydayData } = useContext(NewsContext);
 //console.log(props.everydayData);

  return (
    <div>
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