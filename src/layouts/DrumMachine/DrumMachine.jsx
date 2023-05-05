import './DrumMachine.scss'
import Display from "../../components/Display/Display"
import DrumPad from "../../components/DrumPad/DrumPad"
import { drumPads } from "../../components/DrumPad/drumPads.js"

function DrumMachine() {
  return (
    <section id="drum-machine">
        <Display />

        <div id="drum-pads">
          {drumPads.map(
            pad => {
              const { name, keyboard, audio, audioImport } = pad
              return <DrumPad
                key={keyboard}
                name={name}
                keyboard={keyboard}
                audio={audio}
                audioImport={audioImport}
              />
            }
          )}
        </div>
    </section>
  )
}
export default DrumMachine