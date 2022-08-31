/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import useLocalStorage from '../Historico/hooks'
import './styles.css'

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
  const [timer, setTimer] = useLocalStorage('ls_tempo', 0)

  function handleResetar() {
    setTimer(time)
    setAtivar(false)
    setTempo(0)
  }

  return (
    <div className="container">
      <h1>{time}</h1>

      {ativar ? (
        <div>
          {pausar ? (
            <button
              type="button"
              className="botao btn-start"
              onClick={handleComecar}
            >
              Começar
            </button>
          ) : (
            <button type="button" className="botao" onClick={handlePausar}>
              Pausar
            </button>
          )}

          <button
            type="button"
            className="botao btn-stop"
            onClick={handleResetar}
          >
            Parar
          </button>
        </div>
      ) : (
        <div className="">
          <button
            type="button"
            className="botao btn-start"
            onClick={handleComecar}
          >
            Iniciar
          </button>
        </div>
      )}
    </div>
  )
}

export default Timer
