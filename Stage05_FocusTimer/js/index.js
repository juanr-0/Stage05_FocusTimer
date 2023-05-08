import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonStop, 
  buttonPlay,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay 
})

const sound = Sound()

Events({controls,timer,sound})