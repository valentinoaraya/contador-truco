import React from 'react'
import Button from '../Button/Button'
import "./ElementCount.css"

function ElementCount({fnButtonAdd, fnButtonSubstract, count, title}) {
  return (
    <div>
        <h1>{title}</h1>
        <div  className='count'>
            <Button nameButton={"-"} onFinish={fnButtonSubstract}/>
            <h2>{ count }</h2>
            <Button nameButton={"+"} onFinish={fnButtonAdd}/>
        </div>
    </div>
  )
}

export default ElementCount