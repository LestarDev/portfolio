import { useState } from 'react'
import './App.css'
import MainPage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import AboutPage from './pages/AboutPage/AboutPage'

function App() {
  const [page, setPage] = useState(0)

  return (
    <>
      {
        page==0 ? <MainPage setPage={setPage} currentPage={page} /> :
        page==1 ? <LoginPage setPage={setPage} currentPage={page} /> :
        page==2 ? <AboutPage /> :
        ''
      }
    </>
  )
}

export default App
