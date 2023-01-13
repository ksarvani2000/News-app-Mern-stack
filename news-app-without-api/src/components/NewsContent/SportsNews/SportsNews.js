import React, { useContext, useState } from "react";
import { NewsContext } from "../../AppContext/NewsContext";
import SportsArticles from "./SportsArticles";
import data from "../../Data/SportsNews.json"

function SportsNews() {
  //const { sportsData } = useContext(NewsContext);
  //console.log(props.countryData);
  //console.log("in country news")
  const [sportsData, setSportsData] = useState(data)

  return (
    <div>
    {/* <h2 className="head__text" style={{"alignItems" : "center"}}>Sports News</h2> */}
    <div className="wrapper">
        {sportsData
          ? sportsData.articles.map((news) => (
              <SportsArticles sportsData={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default SportsNews;