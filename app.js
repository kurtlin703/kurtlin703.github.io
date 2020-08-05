function realTimeClock() {
    let rtClock = new Date
    let hours = rtClock.getHours
    let minutes = rtClock.getMinutes
    let seconds = rtClock.getSeconds

    let amPm = (hours < 12) ? "AM" : "PM"

    hours = (hour > 12) ? hours - 12 : hours

    hours = ("0" + hours).slice(-2)
    minutes = ("0" + minutes).slice(-2)
    seconds = ("0" + seconds).slice(-2)

    document.getElementById("clock").innerHTML
    hours + "  :  " + minutes + "  :  " + seconds + "  :  " + amPm
    let t  = setTimeout(realtimeClock, 500)

}