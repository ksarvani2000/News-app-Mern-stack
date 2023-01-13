import React, { useContext, useState } from "react";
import { NewsContext } from "../../AppContext/NewsContext";
import Covid19NewsArticles from "./Covid19NewsArticles";
import data from "../../Data/Covid19News.json"

function Covid19News() {
  //const { covidTrackerData } = useContext(NewsContext);
  //console.log(covidTracker);
  const [covidTrackerData, setCovid19News] = useState(data)

  return (
    <div>
      <div className="wrapper">
        {covidTrackerData
          ? covidTrackerData.articles.map((news) => (
              <Covid19NewsArticles covidTrackerData={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Covid19News;