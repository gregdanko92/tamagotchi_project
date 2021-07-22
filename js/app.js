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

//Classes

class Character {
    constructor(name, age, hungerLevel, sleepinessLevel, boredomLevel,isAlive){
        this.name = name
        this.age = age
        this.hungerLevel = hungerLevel
        this.sleepinessLevel = sleepinessLevel
        this.boredomLevel = boredomLevel
        this.isAlive = isAlive
    }
}

//Player object
const player = new Character
player.age = 0
player.hungerLevel = 0;
player.sleepinessLevel = 0;
player.boredomLevel = 0;
player.isAlive = true;
let count = 0
let interval = null
console.log(player)

// E V E N T L I S T E N E R S 

feedEl.addEventListener('click', handleFeedClick)
sleepEl.addEventListener('click', handleSleepClick)
entertainEl.addEventListener('click', handleEntertainClick)

// F U N C T I O N S

function setCharacterName(){
    nameEl.textContent = enteredName
    interval = setInterval(function (){
        count++; 
        if (count % 5 === 0){
            player.age++
            ageEl.textContent = 'Age: ' + player.age
            increaseHunger()
            increaseBoredom()
            increaseSleepiness()
            
            
            
        }
    },1000)
}
function handleFeedClick(){
    player.hungerLevel--
    hungerEl.textContent = 'Hunger: ' + player.hungerLevel
    increaseSleepiness()
    
}
function handleSleepClick(){
    player.sleepinessLevel = player.sleepinessLevel -1
    sleepinessEl.textContent = 'Sleepiness: ' + player.sleepinessLevel
    increaseBoredom()
}
function handleEntertainClick(){
    player.boredomLevel--
    boredomEl.textContent = 'Boredom: ' + player.boredomLevel
    increaseHunger()
}
function increaseHunger(){
    player.hungerLevel++
    hungerEl.textContent = 'Hunger: ' + player.hungerLevel
}
function increaseSleepiness(){
    player.sleepinessLevel++
    sleepinessEl.textContent = 'Sleepiness: ' + player.sleepinessLevel
}
function increaseBoredom(){
    player.boredomLevel++
    boredomEl.textContent = 'Boredom: ' + player.boredomLevel
    

}
function evaluateCharacter(){
    let count2 = 0
    interval2 = setInterval(function (){
        count2++;
            if(player.hungerLevel >=10 || player.sleepinessLevel>=10 || player.boredomLevel>=10){
                console.log("dead")
                nameEl.textContent = `${enteredName} has died at ${player.age}`
                clearInterval(interval2)
                clearInterval(interval)
            // } else if (
            //     player.age > 2 
            // ) {
            //     window.location.href = "/Users/gregdanko/sei/w3/project_0/test.html";
            }
        },100)
    }


//Start the game
setCharacterName()
evaluateCharacter()



