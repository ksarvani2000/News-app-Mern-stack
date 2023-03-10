import React, { useContext } from "react";
import { NewsContext } from "../../AppContext/NewsContext";
import CountryArticles from "./CountryArticles";

function CountryNews(props) {
  //const { countryData } = useContext(NewsContext);
  //console.log(props.countryData);
  //console.log("in country news")
  //console.log(props.countryData)

  return (
    <div className="container">
      <div className="wrapper">
        {props.countryData
          ? props.countryData.map((news) => (
              <CountryArticles countryData={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default CountryNews;