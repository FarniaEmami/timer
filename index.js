const durationInput = document.querySelector('#duration')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let duration
const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration){
        console.log('OnStart event is triggered!')
        duration = totalDuration
    }, 
    onTick(timeRemaining){
        console.log('onTick event is triggered!')
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter)

    }, 
    onPause(){
        console.log('onPause event is triggered!')
    }
})