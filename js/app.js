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
const gumEl = document.getElementById('gum')
const actionsEl =document.getElementById('actions')
const statsEl = document.getElementById('stats')

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
        this.lev2Interval = null
        this.gumInterval = null
        
    }
}

//Player object
const player = new Character(enteredName, 0,0,0,0,true,null)

let count = 0
defaultImage = "images/resting.jpeg"
// E V E N T L I S T E N E R S 

feedEl.addEventListener('click', handleFeedClick)
sleepEl.addEventListener('click', handleSleepClick)
entertainEl.addEventListener('click', handleEntertainClick)
gumEl.addEventListener('click',handleChewGumClick)

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
    if (player.age === 1){
        var workButton = document.createElement('button')
    //create text node for the text
    var workText = document.createTextNode('Work')
    //arrach new trest to new element
    workButton.appendChild(workText)
    //set the position on the page by creating a new var for the positon
    actionsEl.appendChild(workButton)

    var moneyMetric = document.createElement('div')
    var moneyText = document.createTextNode('Money: ')
    moneyMetric.appendChild(moneyText)
    moneyMetric.setAttribute('class', 'substat')
    statsEl.appendChild(moneyMetric)
}
    player.interval2 = setInterval(function (){
        let count2 = 0
        count2++;
            if(player.hungerLevel >=5 || player.sleepinessLevel>=5 || player.boredomLevel>=5){
                console.log("dead ")
                nameEl.textContent = `${enteredName} has died at ${player.age}`
                defaultImage="images/dead.jpeg"
                imageEl.src = defaultImage

                clearInterval(player.interval2)
                clearInterval(player.interval)
            } 
            
    },500)
}
    
function handleChewGumClick(){
    gumAnimation()
}

function sleepAnimation(){
    let sleepCount = 0
    player.sleepInterval = setInterval(function(){
        sleepCount++
        imageEl.src ="images/sleep.jpeg"
        if(sleepCount === 3){
            clearInterval(player.sleepInterval)
            imageEl.src = defaultImage
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
            imageEl.src = defaultImage
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
            imageEl.src = defaultImage
        }
    },500)
}

function lev2Animation(){
    let lev2Count = 0
    player.lev2Interval = setInterval(function(){
        lev2Count++
        imageEl.src ="images/Level2.jpeg"
        if(lev2Count === 1){
            imageEl.src = defaultImage
            clearInterval(player.lev2Interval)
        }
    },500)
}
function gumAnimation(){
    let gumCount = 0
    player.gumInterval = setInterval(function(){
        gumCount++
        if(gumCount === 1){
            imageEl.src = "images/gum1.jpeg"
        }
        else if (gumCount ===2){
            imageEl.src = "images/gum2.jpeg"
        }
        else if (gumCount ===3){
            imageEl.src = "images/gum3.jpeg"
        }else if (gumCount ===4){
            imageEl.src = "images/gum4.jpeg"
        }else if (gumCount ===5){
            imageEl.src = "images/gum5.jpeg"
        }else if (gumCount ===6){
            imageEl.src = defaultImage
            clearInterval(player.gumInterval)
        }
    },500)

}

// function levelUp(){
// if (player.age === 3){
//         //store new button in variable
//     var workButton = document.createElement('button')
//     //create text node for the text
//     var workText = document.createTextNode('Work')
//     //arrach new trest to new element
//     workButton.appendChild(workText)
//     //set the position on the page by creating a new var for the positon
//     actionsEl.appendChild(workButton)

//     var moneyMetric = document.createElement('div')
//     var moneyText = document.createTextNode('Money: ')
//     moneyMetric.appendChild(moneyText)
//     moneyMetric.setAttribute('class', 'substat')
//     statsEl.appendChild(moneyMetric)
//     }   
// }


//Start the game
setCharacterName()
evaluateCharacter()






