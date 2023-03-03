import React from 'react'
import Create from './Create'
import './Home.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Read from './Read'

const Home = () => {
  return (
    <Router>
         <Route path='/' element={<Read />} />
    </Router>
  )
}

export default Home
