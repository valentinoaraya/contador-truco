import React from 'react'
import "./Finish.css"

function Finish({team}) {
  return (
    <div>
        <h1 className='nombreGanador'>Ha ganado el equipo {team}!</h1>
    </div>
  )
}

export default Finish