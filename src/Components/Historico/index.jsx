import React, { useEffect, useState } from 'react'

export default function Historico() {
  const [first, setFirst] = useState([])
  let data = window.localStorage.getItem('ls_tempo')

  useEffect(() => {
    setFirst(JSON.parse(data))
  }, [data])

  console.log(typeof first)

  return (
    <div>
      <h1>Historico</h1>
      <div>
        {Object.entries(first).forEach(
          ([key, value]) => (
            <p key={key}>{value}</p>
          ),
          // console.log(key, value)
        )}
      </div>
    </div>
  )
}

export function SalvarHistorico(time) {
  var ls_tempo = [{ tempo: time }]
  var tempo = localStorage[ls_tempo] ? JSON.parse(localStorage[ls_tempo]) : []

  tempo.push({ tempo: time.value })
  localStorage.setItem('ls_tempo', JSON.stringify(ls_tempo))
}
