import React, { useContext } from "react";
import { NewsContext } from "../../AppContext/NewsContext";
import BitcoinArticles from "./BitcoinArticles";

function BitcoinNews() {
  const { bitcoinData } = useContext(NewsContext);
  //console.log(everydayData);

  return (
    <div>
      {/* <h1 className="head__text">Bitcoin News</h1> */}
      <div className="wrapper" >
        {bitcoinData
          ? bitcoinData.articles.map((news) => (
              <BitcoinArticles bitcoinData={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default BitcoinNews;