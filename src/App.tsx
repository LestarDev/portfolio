import { useState } from 'react'
import './App.css'
import MainPage from './pages/HomePage/HomePage'

function App() {
  const [page, setPage] = useState(0)

  return (
    <>
      {
        page==0 ? <MainPage setPage={setPage} /> :
        ''
      }
    </>
  )
}

export default App
