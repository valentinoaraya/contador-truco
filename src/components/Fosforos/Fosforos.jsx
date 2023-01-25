import React from 'react'
import "./Fosforos.css"

const fosforosImages = require.context('../img', true)

function Fosforos({count}) {
    
    let countImg 
    let countImg2
    let countImg3

    if (count <= 5){
        countImg = count
    } else if (count >= 6 && count <= 10){
        countImg = 5
        countImg2 = count
    } else if (count >= 11){
        countImg = 5
        countImg2 = 10
        countImg3 = count
    }

  return (
    <div className='divImg'>
        <img className='img' src={ fosforosImages(`./fosforo-${countImg}.png`) } alt="fosforo" />
        {
            countImg2 >= 6 && <img className='img' src={ fosforosImages(`./fosforo-${countImg2}.png`) } alt="fosforo" />
        }
        {
            countImg3 >= 11 && <img className='img' src={ fosforosImages(`./fosforo-${countImg3}.png`) } alt="fosforo" />
        }
    </div>
  )
}

export default Fosforos