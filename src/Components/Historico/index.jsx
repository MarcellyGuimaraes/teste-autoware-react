import React from 'react'
import useLocalStorage from '../Historico/hooks'

export function Historico() {
  const [timer, setTimer] = useLocalStorage('ls_tempo', 0)

  for (const timers of Object.entries(timer)) {
    console.log(timer)
    return (
      <div>
        <h1>Historico</h1>

        <ol>
          <li>
            <h3>{timer}</h3>
          </li>
        </ol>
      </div>
    )
  }
}
