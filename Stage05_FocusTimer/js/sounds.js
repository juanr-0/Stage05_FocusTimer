import {
  forestSound,
  rainSound,  
  coffeeSound,
  fireplaceSound
} from "./elements.js"

export default function() {
  
  const bgForest = new Audio('./sounds/Floresta.wav')
  const bgRain = new Audio('./sounds/Chuva.wav')
  const bgFirePlace = new Audio('./sounds/Lareira.wav')
  const bgCoffee = new Audio('./sounds/Cafeteria.wav')

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  
  bgForest.loop = true
  bgCoffee.loop = true
  bgFirePlace.loop = true
  bgRain.loop = true

  function pressForest() {
    bgForest.play()
    forestSound.classList.add('sound-on')
    rainSound.classList.remove('sound-on')
    coffeeSound.classList.remove('sound-on')
    fireplaceSound.classList.remove('sound-on')
    bgRain.pause()
    bgFirePlace.pause()
    bgCoffee.pause()
  }

  function pressRain() {
    bgRain.play()
    bgForest.pause()
    bgFirePlace.pause()
    bgCoffee.pause()
    forestSound.classList.remove('sound-on')
    rainSound.classList.add('sound-on')
    coffeeSound.classList.remove('sound-on')
    fireplaceSound.classList.remove('sound-on')
  }

  function pressCoffee() {
    bgRain.pause()
    bgForest.pause()
    bgFirePlace.pause()
    bgCoffee.play()
    forestSound.classList.remove('sound-on')
    rainSound.classList.remove('sound-on')
    coffeeSound.classList.add('sound-on')
    fireplaceSound.classList.remove('sound-on')
  }

  function pressFirePlace() {
    bgRain.pause()
    bgForest.pause()
    bgFirePlace.play()
    bgCoffee.pause()
    forestSound.classList.remove('sound-on')
    rainSound.classList.remove('sound-on')
    coffeeSound.classList.remove('sound-on')
    fireplaceSound.classList.add('sound-on')
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressForest,
    timeEnd,
    bgForest,
    pressRain,
    bgRain,
    pressCoffee,
    bgCoffee,
    pressFirePlace,
    bgFirePlace
  }

}