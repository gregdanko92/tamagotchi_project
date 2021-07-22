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
const imageEl = document.querySelector('img')

//Classes

class Character {
    constructor(name, age, hungerLevel, sleepinessLevel, boredomLevel,isAlive){
        this.name = name
        this.age = age
        this.hungerLevel = hungerLevel
        this.sleepinessLevel = sleepinessLevel
        this.boredomLevel = boredomLevel
        this.isAlive = isAlive
        this.interval = null
        this.interval2 = null
        this.sleepInterval = null
        this.eatInterval = null
        
    }
}

//Player object
const player = new Character(enteredName, 0,0,0,0,true,null)

let count = 0
// E V E N T L I S T E N E R S 

feedEl.addEventListener('click', handleFeedClick)
sleepEl.addEventListener('click', handleSleepClick)
entertainEl.addEventListener('click', handleEntertainClick)

// F U N C T I O N S

function setCharacterName(){
    nameEl.textContent = enteredName
    player.interval = setInterval(function (){
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
    eatAnimation()
    player.hungerLevel--
    hungerEl.textContent = 'Hunger: ' + player.hungerLevel
    increaseSleepiness()
    
}
function handleSleepClick(){
    sleepAnimation()
    player.sleepinessLevel = player.sleepinessLevel -1
    sleepinessEl.textContent = 'Sleepiness: ' + player.sleepinessLevel
    increaseBoredom()

}
function handleEntertainClick(){
    funAnimation()
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
    player.interval2 = setInterval(function (){
        count2++;
            if(player.hungerLevel >=10 || player.sleepinessLevel>=10 || player.boredomLevel>=10){
                console.log("dead")
                nameEl.textContent = `${enteredName} has died at ${player.age}`
                imageEl.src = "images/dead.jpeg"

                clearInterval(player.interval2)
                clearInterval(player.interval)
            } 
        
    },100)
}
function advanceLevel(){
    //document.create element
    //dom ref new element.append element
    //player = new Character, will delete old player and add new one, inherit old stuff, player.name = var 



}


function sleepAnimation(){
    let sleepCount = 0
    player.sleepInterval = setInterval(function(){
        sleepCount++
        imageEl.src ="images/sleep.jpeg"
        if(sleepCount === 3){
            clearInterval(player.sleepInterval)
            imageEl.src = "images/resting.jpeg"
        }
    },500)
}


function eatAnimation(){
    let eatCount = 0
    player.eatInterval = setInterval(function(){
        eatCount++
        if(eatCount === 1){
            imageEl.src = "images/eat1.jpeg"
        }
        else if (eatCount ===2){
            imageEl.src = "images/eat2.jpeg"
        }
        else if (eatCount ===3){
            imageEl.src = "images/eat3.jpeg"
        }else if (eatCount ===4){
            imageEl.src = "images/eat4.jpeg"
        }else if (eatCount ===5){
            imageEl.src = "images/eat5.jpeg"
        }else if (eatCount ===6){
            imageEl.src = "images/resting.jpeg"
            clearInterval(player.eatInterval)
        }
    },500)
}


function funAnimation(){
    let funCount = 0
    player.funInterval = setInterval(function(){
        funCount++
        imageEl.src ="images/jamming.jpeg"
        if(funCount === 3){
            clearInterval(player.funInterval)
            imageEl.src = "images/resting.jpeg"
        }
    },500)
}

//Start the game
setCharacterName()
evaluateCharacter()



