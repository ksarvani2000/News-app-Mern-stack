import React, {useState, useEffect} from 'react'
import CountryNews from './CountryNews'
import "./CountryNews.css"
import data from "../../Data/CountryNews.json"
import CountryArticles from './CountryArticles'

function NewsPage() {
    const wholeData =data
  const [selectCountry, setSelectCountry] = useState('in')
    const [countryData, setCountryData] = useState(data.sources)
    //const apiKey = "c9d9a0ccaaa34bb5a1252e3dc102036d";
    //const apiKey = "72f47afc0004424daecb9ab5728ee666";
    //console.log(countryData)

    const handleChangeOfDropDown = (event) => {
      //console.log(event.target.value)
      setSelectCountry(event.target.value)
      //console.log("in method",selectCountry)
    }

    useEffect(() => {
      //console.log(wholeData,selectCountry)
      
      const changedCountryData = wholeData.sources
      const len = changedCountryData.filter((data)=>data.country === selectCountry)
     
      setCountryData(len)
    }, [selectCountry])

    // useEffect(() => {
    //     fetch(
    //         `https://newsapi.org/v2/sources?language=en&country=${country}&apiKey=${apiKey}`
    //       ,)
    //       .then((response) => response.json()).then((data) => {
    //         setCountryData(data)
    //         //console.log(data)
    //       })
    //   },[country])

    
      
  return (
    <div>
      {/* <h1 className="head__text">Country News</h1> */}
      <div className='dropdown'>
        <div className='dropdown__control'>
        <label className='choose'>Choose a country </label>
        <select className='selectCountry' value={selectCountry}  onChange={handleChangeOfDropDown}>
          
            <option value="in">IN</option>
            <option value="us">US</option>
            <option value="ie">IE</option>
            <option value="gb">GB</option>
            <option value="ca">CA</option>
            <option value="au">AU</option>
            <option value="it">IT</option>
            <option value="za">ZA</option>
            <option value="is">IS</option>
        </select>
        </div>
        </div>
        
        <CountryNews countryData = {countryData}/>
    </div>
  )
}

export default NewsPage