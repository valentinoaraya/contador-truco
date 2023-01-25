import React, {useState} from 'react'
import Button from '../Button/Button'
import ElementCount from '../ElementCount/ElementCount'
import Finish from '../Finish/Finish'
import Fosforos from '../Fosforos/Fosforos'
import "./Contador.css"

function Contador() {
    
    const [countNosotros, setCountNosotros] = useState(0)
    const [countEllos, setCountEllos] = useState(0)
    const [sonBuenasEllos, setSonBuenasEllos] = useState(false)
    const [sonBuenasNosotros, setSonbuenasNosotros] = useState(false)

    const handleNosotros = (op)=> {
        if (op === "+"){
            if (countNosotros < 15){ 
                setCountNosotros(countNosotros+1)
            } else{ 
                setCountNosotros(1)
                setSonbuenasNosotros(true)
            }
        } else if (op === "-"){
            countNosotros > 0 ? setCountNosotros(countNosotros-1) : setCountNosotros(countNosotros)
        }
    }

    const handleEllos = (op)=> {
        if (op === "+"){
            if (countEllos < 15){
                setCountEllos(countEllos+1)  
            } else {
                setCountEllos(1)
                setSonBuenasEllos(true)
            } 
        } else if (op === "-"){
            countEllos > 0 ? setCountEllos(countEllos-1) : setCountEllos(countEllos)
        }
    }

    const handleReiniciar = (team)=> {
        if (team === "all"){
            setCountEllos(0)
            setCountNosotros(0)
            setSonBuenasEllos(false)
            setSonbuenasNosotros(false)
        } else if (team === "ellos"){
            setCountEllos(0)
            setSonBuenasEllos(false)
        } else if (team === "nosotros") {
            setCountNosotros(0)
            setSonbuenasNosotros(false)
        }
    }

    const finalizar = ()=> {
        if (sonBuenasEllos === true && countEllos === 15){
            return "Ellos"
        } else if (sonBuenasNosotros === true && countNosotros === 15){
            return "Nosotros"
        } else {
            return null
        }
    }

    const ganador = finalizar()

  return (
    <div>
        {
            ganador === null ?

            <div> 
                <div className='contador'>
                    <div className='nosotros'>
                        <Button nameButton={"Reiniciar"} onFinish={()=> handleReiniciar("nosotros")}/>
                        <ElementCount 
                            fnButtonAdd={()=> handleNosotros("+")} 
                            fnButtonSubstract={()=> handleNosotros("-")}
                            count={countNosotros}
                            title={"Nosotros"}
                        />
                        {
                            sonBuenasNosotros && <p className='buenas'>Buenas!</p>
                        }
                        {
                            countNosotros > 0 && <Fosforos count={countNosotros}/>
                        }
                    </div>
                    <div className='divisor'/>
                    <div className='ellos'>
                        <Button nameButton={"Reiniciar"} onFinish={()=> handleReiniciar("ellos")}/>
                        <ElementCount 
                            fnButtonAdd={()=> handleEllos("+")} 
                            fnButtonSubstract={()=> handleEllos("-")}
                            count={countEllos}
                            title={"Ellos"}
                        />
                        {
                            sonBuenasEllos && <p className='buenas'>Buenas!</p>
                        }
                        {
                            countEllos > 0 && <Fosforos count={countEllos}/>
                        }
                    </div>
                </div>
            </div>

            :

            <div className='ganador'>
                <Finish team={ganador}/>
                <Button nameButton={"Reiniciar partida"} onFinish={()=> handleReiniciar("all")}/>
            </div>
        }
    </div>
  )
}

export default Contador