import React, {useState, useEffect} from 'react'
import CountryNews from './CountryNews'
import "./CountryNews.css"

function NewsPage() {
    const [country, setCountry] = useState('')
    const [countryData, setCountryData] = useState('')
    //const apiKey = "c9d9a0ccaaa34bb5a1252e3dc102036d";
    const apiKey = "72f47afc0004424daecb9ab5728ee666";
    const handleDropChange = (event) => {
        //console.log(event.target.value)
        setCountry(event.target.value)
    }
    useEffect(() => {
        fetch(
            `https://newsapi.org/v2/sources?language=en&country=${country}&apiKey=${apiKey}`
          )
          .then((response) => response.json()).then((data) => {
            setCountryData(data)
            //console.log(data)
          })
      },[country])
      
  return (
    <div>
      {/* <h1 className="head__text">Country News</h1> */}
      <div className='dropdown'>
        <div className='dropdown__control'>
        <label className='choose'>Choose a country </label><select className='selectCountry' onChange = {handleDropChange} >
          
            <option>IN</option>
            <option>US</option>
            <option>IE</option>
            <option>GB</option>
            <option>CA</option>
            <option>AU</option>
            <option>IT</option>
            <option>ZA</option>
            <option>IS</option>
        </select>
        </div>
        </div>
        <CountryNews countryData = {countryData}/>
    </div>
  )
}

export default NewsPage