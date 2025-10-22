import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function informacion({titulo, descripcion}){

  return(
    <>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
    </>
  )
}

function App() {

  return (
    <>
      
      <h1>ta01</h1>
      <div className="card">
        <Informacion
        titulo="proyectoo"
        descripcion="crear una app"
       />
      </div>
    </>
  )
}

export default App
