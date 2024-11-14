import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import { assests } from './assets/assests'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <> <div >
      <Routes >
        <Route path={'/'} element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>

     

    </>


  )
}

export default App