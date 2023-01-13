import React, { useContext } from "react";
import { NewsContext } from "../../AppContext/NewsContext";
import Covid19NewsArticles from "./Covid19NewsArticles";

function Covid19News() {
  const { covidTrackerData } = useContext(NewsContext);
  //console.log(covidTracker);

  return (
    <div>
      {/* <h1 className="head__text">Covid19 News</h1> */}
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