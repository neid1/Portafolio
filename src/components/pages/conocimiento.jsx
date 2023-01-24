import React from 'react'
import logoReact from "../img/react.png"
import logoGH from "../img/GitHub.png"
import logoMongo from "../img/mongo.png"
import logoNode from "../img/node.png"
import logoTRIO from "../img/html css js logo.png"


export const Conocimiento = () => {
  return (
    <div className='content'>
        <h2>Conocimientos</h2>
          <div className='contenido_de_contenido'> 
            <img className='logo_trio' src={logoTRIO} alt="" />
            <img className='logos' src={logoNode} alt="" />
            <img className='logo_react' src={logoReact} alt="" />
            <img className='logos' src={logoGH} alt="" />
            <img className='logos' src={logoMongo} alt="" />
          </div>
    </div>
  )
}
