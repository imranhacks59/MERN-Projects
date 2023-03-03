import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './components/Home/Create';
import Read from './components/Home/Read';
import Update from './components/Home/Updat';
import './App.css'

function App() {
 
    return (
      <Router> 
     <div className='main'>
        <Routes>
        <Route path='/' element={<Read />} />

        <Route path='/create' element={<Create />} />

        <Route path='/update' element={<Update />} />

        </Routes>
        </div>  
      </Router> 
    );
  }

export default App;