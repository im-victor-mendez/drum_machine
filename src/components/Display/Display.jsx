import './Display.scss'
import { useDrumPad } from "../../contexts/drumPadContext"

function Display() {
  const { drumPad } = useDrumPad()
  
  return (
    <div id="display">{drumPad && drumPad}</div>
  )
}
export default Display