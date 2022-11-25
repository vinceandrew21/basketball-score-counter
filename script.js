// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }

let countScore = document.getElementById("score-id-home")
let countScore2 = document.getElementById("score-id-guest")
let gameQ = document.getElementById("quarter-id")
// let countdowntimer = document.getElementById("ten-countdown")
let scoreHome = 0
let scoreGuest = 0
let GameQuarter = 0
// let timer = "10:00"

function add1scoreHome() {
    scoreHome += 1
    countScore.textContent = scoreHome
}

function add2scoreHome() {
    scoreHome += 2
    countScore.textContent = scoreHome
}

function add3scoreHome() {
    scoreHome += 3
    countScore.textContent = scoreHome
}

function add1scoreGuest() {
    scoreGuest += 1
    countScore2.textContent = scoreGuest
}

function add2scoreGuest() {
    scoreGuest += 2
    countScore2.textContent = scoreGuest
}

function add3scoreGuest() {
    scoreGuest += 3
    countScore2.textContent = scoreGuest
}

function clearscores() {
    scoreGuest = 0  
    scoreHome = 0
    // timer = "10:00"

    countScore2.textContent = scoreGuest
    countScore.textContent = scoreHome
    // countdowntimer.innerHTML = timer
}

// function addQuarter() {

// }

// function countdown( elementName, minutes, seconds )
// {
//     var element, endTime, hours, mins, msLeft, time;

//     function twoDigits( n )
//     {
//         return (n <= 9 ? "0" + n : n);
//     }

//     function updateTimer()
//     {
//         msLeft = endTime - (+new Date);
//         if ( msLeft < 1000 ) {
//             element.innerHTML = "Time is up!";
//         } else {
//             time = new Date( msLeft );
//             hours = time.getUTCHours();
//             mins = time.getUTCMinutes();
//             element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
//             setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
//         }
//     }

//     element = document.getElementById( elementName );
//     endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
//     updateTimer();
// }

// countdown( "ten-countdown", 10, 0 );