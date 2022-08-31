import './App.css'
import Historico from './Components/Historico'
import Timer from './Components/Timer'
import logo from './img/logo.png'

function App() {
  return (
    <div className="App">
      <div className="img">
        <img src={logo} alt="Autoware" />
      </div>
      <h1 className="h1">TimerWare</h1>
      <Timer />
      <Historico />
    </div>
  )
}

export default App
