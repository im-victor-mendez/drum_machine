function DrumPad({ name, keyboard, audioImport }) {
    return (
        <button id={name} className="drum-pad">
            <audio id={keyboard} className="clip" src={audioImport}></audio>
            {keyboard}
        </button>
    )
}
export default DrumPad