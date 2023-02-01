import React from 'react'
import reactLogo from './assets/avatar.jpg'
import './App.css'
import Nav from './component/Nav'
import Movies from './component/Movies'
import Tvshow from './component/Tvshow'
import Footer from './component/Footer'


function App() {
  

  return (
    <>
    <Nav></Nav>
    <div className='title'>
    <h1>Movie</h1>
    <Movies/>
    <h1>TvShow:</h1>
    <Tvshow></Tvshow>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
