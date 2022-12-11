
import React, { useState } from 'react'
import './App.css';
import Add from './Add';
import Retrieve from './Retrieve';
function App() {
  const [firstPage, setFirstPage] = useState(true)
  return (
    <div className='main-body'>
        <h4>Zimik's Directory App</h4>

        <button className='add-new-btn' onClick={() => {
          setFirstPage(true)
        }}>Add new person</button>

        <button className='retrieve-btn' onClick={() => {
          setFirstPage(false)
        }}>Retreive information</button>

        <div className='body'>
        {
          firstPage ? <Add/> : <Retrieve/>
        }
        </div>
    </div>

 )
}

export default App;