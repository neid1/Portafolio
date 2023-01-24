import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import barra from "../img/barra.png"

export const Nav = () => {
  const [show,setShow]=useState(false);

  const mostrarBarra=()=>{
    setShow(!show);
  }

  return (
 
   
   
      <div className="nav">
        <ul>
                <li className='navee'><NavLink to="/trabajos">Trabajos</NavLink></li>
                <li className='navee'><NavLink to="/conocimiento">Conocimientos</NavLink></li>
                <li className='navee'><NavLink to="/educacion">Educacion</NavLink></li>
      
        </ul>
      {show ? (
        <div className="navMob">
                <li onClick={mostrarBarra}><img className='bar' src={barra} alt="" /></li>
            <ul>
                <li className='naveMob' onClick={mostrarBarra}><NavLink to="/trabajos">Trabajos</NavLink></li>
                <li className='naveMob' onClick={mostrarBarra}><NavLink to="/conocimiento">Conocimientos</NavLink></li>
                <li className='naveMob' onClick={mostrarBarra}><NavLink to="/educacion">Educacion</NavLink></li>
            </ul>
        </div>):(<div  onClick={mostrarBarra}><li><img className='bar' src={barra} alt="" /></li></div>)}
      </div>
     

  )
}
