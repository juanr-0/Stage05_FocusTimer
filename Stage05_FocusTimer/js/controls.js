export default function Controls({
  buttonPlay,
  buttonStop
}) {

  function play() {
    buttonPlay.disabled = true
    buttonStop.disabled = false
  }
  
  function reset() {
    buttonStop.disabled = true
    buttonPlay.disabled = false
  }

  return {
    reset,
    play
  }
}