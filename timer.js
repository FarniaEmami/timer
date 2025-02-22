class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks){
        this.durationInput = durationInput
        this.startBtn = startBtn
        this.pauseBtn = pauseBtn
        if(callbacks){
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onPause = callbacks.onPause
        }

        this.startBtn.addEventListener('click', this.start)
        this.pauseBtn.addEventListener('click', this.pause)
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
        // console.log('Timer started!')
        this.tick()
        this.intervalId = setInterval(this.tick, 50)
    }

    pause = () => {
        clearInterval(this.intervalId)
    }

    tick = () => {
        if(this.timeRemaining <= 0 ){
            this.pause()
            if(this.onPause){
                this.onPause()
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }
}