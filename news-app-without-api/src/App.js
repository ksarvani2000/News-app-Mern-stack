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
import Register from './components/NewsContent/Register/Register';
import Profile from './components/NewsContent/Profile/Profile';
import Subscribe from './components/NewsContent/Subscribe/Subscribe';
import ProfileByAuthorName from './components/NewsContent/Profile/ProfileByAuthorName';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedData, setLoggedData] = useState('')
  //localStorage.setItem("login-data",isLoggedIn)

  useEffect(() => {
    const storeLoginInfo = sessionStorage.getItem("login-data")
    if(storeLoginInfo) {
      setIsLoggedIn(true)
      setLoggedData(storeLoginInfo)
    }
  }, [])

  const handleRegister = (loggedData) => {
    setIsLoggedIn(true)
    //console.log(loggedData)
    setLoggedData(loggedData)
  }

  const handleLogin = (loggedData) => {
    setIsLoggedIn(true)
    setLoggedData(loggedData)
  }

  return (
    <NewsContextProvider>
      <Header />
        <Routes>
          {!isLoggedIn && <Route path="/*" element={<Register isLoggedIn = {isLoggedIn}  setIsLoggedIn = {setIsLoggedIn} handleRegistration = {handleRegister} />} />}
          {!isLoggedIn && <Route path="/login" element={<Login isLoggedIn = {isLoggedIn}  setIsLoggedIn = {setIsLoggedIn} handleLogin = {handleLogin} />} />}
          {isLoggedIn && <Route path="/topNews" element={<TopNews />} />}
          {isLoggedIn && <Route path="/newsPage" element={<NewsPage />} />}
          {isLoggedIn && <Route path="/covid19News" element={<Covid19News />} />}
          {isLoggedIn && <Route path="/sportsNews" element={<SportsNews />} />}
          {isLoggedIn && <Route path='/bitcoinNews' element={<BitcoinNews />} />}
          {isLoggedIn && <Route path='/about' element={<About />} />}
          {isLoggedIn && <Route path='/subscribe' element={<Subscribe />} />}
          {isLoggedIn && <Route path='/profileByAuthorName' element={<ProfileByAuthorName />} />}
          {isLoggedIn && <Route path='/profile' element={<Profile loggedData = {loggedData} />} />}
          {isLoggedIn && <Route path='/logOut' element={<LogOut setIsLoggedIn={setIsLoggedIn}  />}/>}
        </Routes>
    </NewsContextProvider>
  );
}

export default App;
