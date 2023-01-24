import React from 'react'
import prueba from "../img/trabajo.jpg"

export const Trabajo = () => {
  return (
    <div className='content'>
        <h2>Proyectos realizados</h2>
        <div className='trabajo'>
          <div className='proyecto'>
            <img src={prueba} alt="" />
            <p>Este proyecto se realizo con:</p>
            <ul>
              <li>React</li>
              <li>NodeJS</li>
            </ul>
          </div>

          <div className='proyecto'>
            <img src={prueba} alt="" />
            <p>Este proyecto se realizo con:</p>
            <ul>
              <li>React</li>
              <li>NodeJS</li>
            </ul>
          </div>

          <div className='proyecto'>
            <img src={prueba} alt="" />
            <p>Este proyecto se realizo con:</p>
            <ul>
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
            </ul>
          </div>
          
          
         
        </div>

    </div>
  )
}
