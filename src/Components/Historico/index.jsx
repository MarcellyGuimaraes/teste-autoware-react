import React, { useEffect, useState } from 'react'

export function Historico() {
  const [first, setFirst] = useState()
  let timer = window.localStorage.getItem('ls_tempo')

  useEffect(() => {
    setFirst(JSON.parse(timer))
  }, [timer])

  console.log('tempo', first)

  const timerNum = timer.replace(/[\([{"})\]]/g, ' ')

  for (const timers of Object.entries(timer)) {
    return (
      <div>
        <h1>Historico</h1>
        <h3>{timerNum}</h3>
      </div>
    )
  }
}
export function SalvarHistorico(time) {
  var ls_tempo = [{ tempo: time }]
  var tempo = localStorage.ls_tempo ? JSON.parse(localStorage.ls_tempo) : []

  Object.entries(tempo).push({ tempo: time.value })
  localStorage.setItem('ls_tempo', JSON.stringify(ls_tempo))
  tempo = JSON.parse(localStorage.getItem(ls_tempo))
}
