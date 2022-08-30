import React, { useEffect, useState } from 'react'
import Historico, { SalvarHistorico } from '../Historico'

const Timer = () => {
  const [ativar, setAtivar] = useState(false)
  const [pausar, setPausar] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let intervalo = null

    if (ativar && pausar === false) {
      intervalo = setInterval(() => {
        setTempo((tempo) => tempo + 10)
      }, 10)
    }
    return () => {
      clearInterval(intervalo)
    }
  }, [ativar, pausar])

  function handleComecar() {
    setAtivar(true)
    setPausar(false)
  }

  function handlePausar() {
    setPausar(true)
  }

  const minuto = ('0' + (Math.floor(tempo / 60000) % 60)).slice(-2)
  const segundo = ('0' + (Math.floor(tempo / 1000) % 60)).slice(-2)
  const milissegundo = ('0' + (Math.floor(tempo / 10) % 100)).slice(-2)

  const time = `${minuto}:${segundo}:${milissegundo}`

  function handleResetar() {
    SalvarHistorico(time)
    setAtivar(false)
    setTempo(0)
  }

  return (
    <div>
      <h1>{time}</h1>

      {ativar ? (
        <div>
          {pausar ? (
            <button onClick={handleComecar}>Começar</button>
          ) : (
            <button onClick={handlePausar}>Pausar</button>
          )}

          <button onClick={handleResetar}>Parar</button>
        </div>
      ) : (
        <button onClick={handleComecar}>Iniciar</button>
      )}

      <button onClick={Historico}>Historico</button>
    </div>
  )
}

export default Timer
