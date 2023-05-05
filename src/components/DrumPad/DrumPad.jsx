import { useCallback, useEffect } from "react"

function DrumPad({ name, keyboard, audioImport }) {
    const handleKeyPress = useCallback(keyPress, [keyboard, name])

    function keyPress(event) {
        const { key } = event
        const drumPad = document.getElementById(name)
        
        if (key.toUpperCase() === keyboard) drumPad.click()
    }

    useEffect(() => {
      document.addEventListener('keypress', handleKeyPress)
    
      return () => {
        document.removeEventListener('keypress', handleKeyPress)
      }
    }, [handleKeyPress])

    function playAudio() {
        const audio = document.getElementById(keyboard)
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