import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  forestSound,
  rainSound,  
  coffeeSound,
  fireplaceSound
} from "./elements.js"

export default function({controls,timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    controls.play()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
  })

  buttonPlus.addEventListener('click', function() {
    let newMinutes = timer.plus()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonMinus.addEventListener('click', function() {
    let newMinutes = timer.minus()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  forestSound.addEventListener('click', function() {
    sound.pressForest()
  })

  rainSound.addEventListener('click', function() {
    sound.pressRain()
  })

  coffeeSound.addEventListener('click', function() {
    sound.pressCoffee()
  })

  fireplaceSound.addEventListener('click', function() {
    sound.pressFirePlace()
  })
}
