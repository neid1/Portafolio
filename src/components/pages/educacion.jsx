import React from 'react'

export const Educacion = () => {
  return (
    <div className='content'>
        <h2>Educacion</h2>
        
        <p>Son los centros de estudio donde e aprendido y sigo aprendiendo</p>
        
          <div className='educacion_content'>
            <div className='educacion'>

              <h3>Estudios</h3>
                <ul>
                  <li>Udemy</li>
                  <li>3wschool</li>
                  <li>AutoFormacion</li>
                </ul>   
            </div>

            <div className='educacion'>
              <h3>Idiomas</h3>
                <ul>
                  <li>Ingles intermedio</li>
                  <li>Español idioma nativo</li>
                </ul>
            </div>
          </div>
    </div>
  )
}
