import { useState } from 'react'
import './App.css'
import CustomNavbar from './navbar/CustomNavbar'
import ToDoApp from './todo/ToDoApp'


function App() {


  return (
    <>
      <div className='CustomNavbar'>
        <CustomNavbar></CustomNavbar>
      </div>
      <div className='mt-5'>
        <ToDoApp></ToDoApp>
      </div>
    </>
  )
}

export default App
