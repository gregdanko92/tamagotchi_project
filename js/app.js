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
    player.hungerLevel--
    hungerEl.textContent = 'Hunger: ' + player.hungerLevel
    increaseSleepiness()
    
}
function handleSleepClick(){
    let sleepCount = 0
    player.sleepInterval = setInterval(function(){
        sleepCount++
        imageEl.src ="images/4610FD2C-EE4A-425E-9351-E75B848F9C38_1_105_c.jpeg"
        if(sleepCount === 3){
            clearInterval(player.sleepInterval)
            imageEl.src = "images/5A953C37-B39A-43F4-878C-27D6B1091E0D_1_105_c.jpeg"
        }
    },500)
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
    player.interval2 = setInterval(function (){
        count2++;
            if(player.hungerLevel >=10 || player.sleepinessLevel>=10 || player.boredomLevel>=10){
                console.log("dead")
                nameEl.textContent = `${enteredName} has died at ${player.age}`
                imageEl.src = "images/8EF39706-F74C-4D24-BE7D-24DBAA65C255_1_105_c.jpeg"

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


// function sleepAnimation(){
//     player.sleepInterval = setInterval(function(){
//         sleepCount++
//         imageEl.src ="images/4610FD2C-EE4A-425E-9351-E75B848F9C38_1_105_c.jpeg"
//         if(sleepCount === 3){
//             clearInterval(player.sleepInterval)
//             imageEl.src = "images/5A953C37-B39A-43F4-878C-27D6B1091E0D_1_105_c.jpeg"
//         }
//     },500)
// }

//Start the game
setCharacterName()
evaluateCharacter()



