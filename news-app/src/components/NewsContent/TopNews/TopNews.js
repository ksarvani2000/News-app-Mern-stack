import React, { useState,useEffect } from 'react'
import EverydayNews from './EverydayNews';
import "./TopNews.css"

function TopNews() {
    const [everydayData, setEveryDayData] = useState('');
    const [fromdate, setFromDate] = useState("2022-12-13")
    const [todate, setToDate] = useState("2022-12-20")
    //const apiKey = "c9d9a0ccaaa34bb5a1252e3dc102036d"
    const apiKey = "72f47afc0004424daecb9ab5728ee666";
    //console.log("in top news", fromdate, todate)

    useEffect(() => {
        fetch(
            `http://newsapi.org/v2/everything?q=rich&from=${fromdate}&to=${todate}&sortBy=publishedAt&apiKey=${apiKey}`
          )
          .then((response) => response.json()).then((data) => {
            setEveryDayData(data)
           //console.log("data",data)
          })
      },[fromdate,todate])
    const fromDateHandler = (event) => {
        setFromDate(event.target.value)
    }
    const toDateHandler = (event) => {
        setToDate(event.target.value)
    }

  return (
    <div>
        {/* <h1 className="head__text">Today's News</h1> */}
        <div className='date__controls'>
        <div className='date__control'>
        <label>From Date</label>
          <input
            type='date'
            min='2000-01-01'
            max='2022-12-31'
            value={fromdate}
            onChange={fromDateHandler}
          />
        <label>To Date</label>
          <input
            type='date'
            min='2000-01-01'
            max='2022-12-31'
            value={todate}
            onChange={toDateHandler}
          /></div></div>
        <EverydayNews everydayData = {everydayData} />
    </div>
  )
}

export default TopNews