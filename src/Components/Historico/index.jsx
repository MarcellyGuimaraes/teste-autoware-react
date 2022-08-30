import React from 'react'

export function SalvarHistorico(time) {
  var ls_tempo = [{ tempo: time }]
  var tempo = localStorage[ls_tempo] ? JSON.parse(localStorage[ls_tempo]) : []

  tempo.push({ tempo: time.value })
  localStorage.setItem('ls_tempo', JSON.stringify(ls_tempo))
}

export function VerHistorico() {
  const local = localStorage.getItem('ls_tempo').toString()
  console.log(local)
}

const Historico = () => {
  return (
    <div>
      <h1>Historico</h1>
    </div>
  )
}

export default Historico
