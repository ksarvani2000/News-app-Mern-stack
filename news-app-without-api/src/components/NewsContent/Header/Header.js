import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header >
        <nav>
            <span style={{"color" : "midnightblue", "margin-right": "10px"}}><b><h3>Daily News</h3></b></span>
            <Link to="/topNews" ><span >Headlines</span></Link>
            <Link to="/newsPage" ><span>National</span></Link>
            <Link to="/covid19News" ><span>Covid 19 </span></Link>
            <Link to="/bitcoinNews" ><span >Bitcoin</span></Link>
            <Link to="/sportsNews" ><span >Sports</span></Link>
            <Link to="/about" ><span >About</span></Link>
            <Link to="/profile"><span>Profile</span></Link>
            <Link to="/logOut"><span>Log out</span></Link>
        </nav>
    </header>
  )
}

export default Header