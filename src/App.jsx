import './App.scss'
import { DrumPadProvider } from "./contexts/drumPadContext"
import DrumMachine from "./layouts/DrumMachine/DrumMachine"

function App() {
  return (
    <main id="App">
      <DrumPadProvider>
        <DrumMachine />
      </DrumPadProvider>
    </main>
  )
}

export default App
