import { useCallback, useEffect } from "react"
import { useDrumPad } from "../../contexts/drumPadContext"

function DrumPad({ name, keyboard, audioImport }) {
    const handleKeyPress = useCallback(keyPress, [])
    const { setDrumPad } = useDrumPad()

    useEffect(() => {
      document.addEventListener('keypress', handleKeyPress)
    
      return () => {
        document.removeEventListener('keypress', handleKeyPress)
      }
    }, [handleKeyPress])

    function keyPress(event) {
        const { key } = event
        if (key.toUpperCase() !== keyboard) return
        
        const drumPad = document.getElementById(name)

        setDrumPad(name)
        drumPad.click()
    }

    function playAudio() {
        const audio = document.getElementById(keyboard)
        
        setDrumPad(name)
        audio.play()
    }

    return (
        <button id={name} className="drum-pad" onClick={playAudio}>
            <audio id={keyboard} className="clip" src={audioImport}></audio>
            {keyboard}
        </button>
    )
}
export default DrumPad