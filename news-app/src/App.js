import './App.css';
import { NewsContextProvider } from './components/AppContext/NewsContext';
import BitcoinNews from './components/NewsContent/BitcoinNews/BitcoinNews';
import Covid19News from './components/NewsContent/Covid19News/Covid19News';
import Header from './components/NewsContent/Header/Header';
import { Route, Routes } from 'react-router-dom'
import SportsNews from './components/NewsContent/SportsNews/SportsNews';
import NewsPage from './components/NewsContent/CountryNews/NewsPage';
import TopNews from './components/NewsContent/TopNews/TopNews';
import Login from './components/NewsContent/Login Page/Login';
import { useEffect, useState } from 'react';
import LogOut from './components/NewsContent/Login Page/LogOut';
import About from './components/NewsContent/About/About';
import Subscribe from './components/NewsContent/Subscribe/Subscribe';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => console.log(data))
  })

  return (
    <NewsContextProvider>
      <Header />
        <Routes>
          {!isLoggedIn && <Route path="/*" element={<Login isLoggedIn = {isLoggedIn}  setIsLoggedIn = {setIsLoggedIn} />} />}
          {isLoggedIn && <Route path="/topNews" element={<TopNews />} />}
          {isLoggedIn && <Route path="/newsPage" element={<NewsPage />} />}
          {isLoggedIn && <Route path="/covid19News" element={<Covid19News />} />}
          {isLoggedIn && <Route path="/sportsNews" element={<SportsNews />} />}
          {isLoggedIn && <Route path='/bitcoinNews' element={<BitcoinNews />} />}
          {isLoggedIn && <Route path='/about' element={<About />} />}
          {isLoggedIn && <Route path='/subscribe' element={<Subscribe />} />}
          {isLoggedIn && <Route path='/logOut' element={<LogOut setIsLoggedIn={setIsLoggedIn}  />}/>}
        </Routes>
    </NewsContextProvider>
  );
}

export default App;
