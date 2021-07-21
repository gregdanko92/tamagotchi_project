//G L O B A L S
const feedEl = document.getElementById('feed')
const hungerEl = document.getElementById('hunger')
const sleepEl = document.getElementById('sleep')
const sleepinessEl = document.getElementById('sleepiness')
const entertainEl = document.getElementById('entertain')
const boredomEl = document.getElementById('boredom')
const nameEl = document.getElementById('name')
const ageEl = document.getElementById('age')
const enteredName = prompt("enter name")

let age = 0
let hungerLevel = 0;
let sleepinessLevel = 0;
let boredomLevel = 0;
let count = 0
let interval = null

// E V E N T L I S T E N E R S 

feedEl.addEventListener('click', handleFeedClick)
sleepEl.addEventListener('click', handleSleepClick)
entertainEl.addEventListener('click', handleEntertainClick)

// F U N C T I O N S

function setCharacterName(){
    nameEl.textContent = enteredName
    interval = setInterval(function (){
        count++; 
        if (count % 15 === 0){
            age++
            ageEl.textContent = 'Age: ' + age
            increaseHunger()
            increaseBoredom()
            increaseSleepiness()
            evaluateCharacter()
            
            
        }
    },1000)


}


function handleFeedClick(){
    hungerLevel--
    hungerEl.textContent = 'Hunger: ' + hungerLevel
    increaseSleepiness()
    
}
function handleSleepClick(){
    sleepinessLevel = sleepinessLevel -1
    sleepinessEl.textContent = 'Sleepiness: ' + sleepinessLevel
    increaseBoredom()
}
function handleEntertainClick(){
    boredomLevel--
    boredomEl.textContent = 'Boredom: ' + boredomLevel
    increaseHunger()
}
function increaseHunger(){
    hungerLevel++
    hungerEl.textContent = 'Hunger: ' + hungerLevel
}
function increaseSleepiness(){
    sleepinessLevel++
    sleepinessEl.textContent = 'Sleepiness: ' + sleepinessLevel
}
function increaseBoredom(){
    boredomLevel++
    boredomEl.textContent = 'Boredom: ' + boredomLevel

}

function evaluateCharacter(){
    if(hungerLevel >10 || sleepinessLevel>10 || boredomLevel>10){
        console.log("dead")
}}


// class Character {
//     constructor(name, age, hungerLevel, sleepinessLevel, boredomLevel)
//     this.name = name
//     this.age = age
//     this.hungerLevel = hungerLevel
//     this.sleepinessLevel = sleepinessLevel
//     this.boredomLevel = boredomLevel
// }

















//Start the game
setCharacterName()
