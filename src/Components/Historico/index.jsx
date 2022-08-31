import React, { useEffect, useState } from 'react'

export function Historico() {
  const [first, setFirst] = useState()
  let data = window.localStorage.getItem('ls_tempo')

  useEffect(() => {
    setFirst(JSON.parse(data))
  }, [data])

  console.log('tempo', first)

  for (const datas of Object.entries(data)) {
    return <p>{data}</p>
  }
  return (
    <div>
      <h1>Historico</h1>
    </div>
  )
}

export function SalvarHistorico(time) {
  var ls_tempo = { tempo: time }
  var tempo = localStorage.ls_tempo ? JSON.parse(localStorage.ls_tempo) : []

  tempo.push({ tempo: time.value })
  localStorage.setItem('ls_tempo', JSON.stringify(ls_tempo))
}
