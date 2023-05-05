import header1 from "../../assets/sounds/Heater-1.mp3";
import header2 from "../../assets/sounds/Heater-2.mp3";
import header3 from "../../assets/sounds/Heater-3.mp3";
import header4 from "../../assets/sounds/Heater-4_1.mp3";
import header6 from "../../assets/sounds/Heater-6.mp3";
import openHH from "../../assets/sounds/Dsc_Oh.mp3";
import kickAndHat from "../../assets/sounds/Kick_n_Hat.mp3";
import kick from "../../assets/sounds/RP4_KICK_1.mp3";
import closedHH from "../../assets/sounds/Heater-3.mp3";

export const drumPads = [
    {
        name: "Heater 1",
        keyboard: "Q",
        audio: "../../assets/sounds/Heater-1.mp3",
        audioImport: header1
    },
    {
        name: "Heater 2",
        keyboard: "W",
        audio: "../../assets/sounds/Heater-2.mp3",
        audioImport: header2
    },
    {
        name: "Heater 3",
        keyboard: "E",
        audio: "../../assets/sounds/Heater-3.mp3",
        audioImport: header3
    },
    {
        name: "Heater 4",
        keyboard: "A",
        audio: "../../assets/sounds/Heater-4_1.mp3",
        audioImport: header4
    },
    {
        name: "Clap",
        keyboard: "S",
        audio: "../../assets/sounds/Heater-6.mp3",
        audioImport: header6
    },
    {
        name: "Open-HH",
        keyboard: "D",
        audio: "../../assets/sounds/Dsc_Oh.mp3",
        audioImport: openHH
    },
    {
        name: "Kick-n'-Hat",
        keyboard: "Z",
        audio: "../../assets/sounds/Kick_n_Hat.mp3",
        audioImport: kickAndHat
    },
    {
        name: "Kick",
        keyboard: "X",
        audio: "../../assets/sounds/RP4_KICK_1.mp3",
        audioImport: kick
    },
    {
        name: "Closed-HH",
        keyboard: "C",
        audio: "../../assets/sounds/Cev_H2.mp3",
        audioImport: closedHH
    }
]