import React, { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [bitcoinData, setBitcoinData] = useState('')
  const [covidTrackerData, setCovidTrackerData] = useState('')
  const [sportsData, setSportsData] = useState('')
  const apiKey = "72f47afc0004424daecb9ab5728ee666";
  //const apiKey = "c9d9a0ccaaa34bb5a1252e3dc102036d"

  
  useEffect(() => {
    fetch(
        `http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => response.json()).then((data) => {
        setBitcoinData(data)
       //console.log("data",data)
      })
  },[])
  useEffect(() => {
    fetch(
        `http://newsapi.org/v2/everything?q=covid&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => response.json()).then((data) => {
        setCovidTrackerData(data)
       //console.log("data",data)
      })
  },[])

  useEffect(() => {
    fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`
      )
      .then((response) => response.json()).then((data) => {
        setSportsData(data)
       //console.log("data",data)
      })
  },[])


  return (
    <NewsContext.Provider value={{bitcoinData,covidTrackerData, sportsData}}>
      {props.children}
    </NewsContext.Provider>
  );
};