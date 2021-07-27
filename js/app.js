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
const bodyEl = document.querySelector('body')

//Classes

class Character {
    constructor(name, age, hungerLevel, sleepinessLevel, boredomLevel,moneyLevel){
        this.name = name
        this.age = age
        this.hungerLevel = hungerLevel
        this.sleepinessLevel = sleepinessLevel
        this.boredomLevel = boredomLevel
        this.moneyLevel = moneyLevel
        this.interval = null
        this.interval2 = null
        this.sleepInterval = null
        this.eatInterval = null
        this.lev2Interval = null
        this.gumInterval = null
        this.interval3 = null
        this.workInterval = null
    }
}
//Player object
const player = new Character(enteredName,0,0,0,0,0)

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
function decreaseMoney(){
    player.moneyLevel--
    moneyEl.textContent = 'Money: ' + player.moneyLevel
}
function evaluateCharacter(){
    player.interval2 = setInterval(function (){
        let count2 = 0
        count2++;
            if(player.hungerLevel >=10 || player.sleepinessLevel>=10 || player.boredomLevel>=10|| player.moneyLevel < 0){
                console.log("dead ")
                nameEl.textContent = `${enteredName} has died at ${player.age}`
                defaultImage="images/dead.jpeg"
                imageEl.src = defaultImage
                player.isAlive = false

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
        bodyEl.style.backgroundColor = 'black'
        if(sleepCount === 3){
            clearInterval(player.sleepInterval)
            imageEl.src = defaultImage
            bodyEl.style.backgroundColor = 'lightgray'
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
    bodyEl.style.backgroundColor = 'pink'
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
            bodyEl.style.backgroundColor = 'lightgray'
        }
    },500)

}
function workAnimation(){
    let workCount = 0
    player.workInterval = setInterval(function(){
        workCount ++
        if (workCount === 1){
            imageEl.src = "images/work1.jpeg"
        }
        else if (workCount === 2){
            imageEl.src = "images/work2.jpeg"
        }
        else if (workCount === 3){
            imageEl.src = "images/work3.jpeg"
        }else if (workCount ===4){
            imageEl.src = defaultImage
            clearInterval(player.workInterval)
        }

    },500)
}
function spendAnimation(){
    let spendCount = 0
    player.spendInterval = setInterval(function(){
        spendCount ++
        if (spendCount === 1){
            imageEl.src = "images/spend1.jpeg"
        }
        else if (spendCount === 2){
            imageEl.src = "images/spend2.jpeg"
        }
        else if (spendCount === 3){
            imageEl.src = "images/spend3.jpeg"
        }
        else if (spendCount === 4){
            imageEl.src = "images/spend4.jpeg"
        }
        else if (spendCount === 5){
            imageEl.src = "images/spend5.jpeg"
        }
        else if (spendCount === 6){
            imageEl.src = "images/spend6.jpeg"
        }
        else if (spendCount === 7){
            imageEl.src = "images/spend7.jpeg"
        }
        else if (spendCount ===8){
            imageEl.src = defaultImage
            clearInterval(player.spendInterval)
        }

    },450)
}
function levelUp(){
    player.interval3 = setInterval(function (){
        let count2 = 0
        count2++;
            if(player.age === 3){
                lev2Animation()
                //the work buton
                var workEl = document.createElement('button')
                var workText = document.createTextNode('Work')
                workEl.appendChild(workText)
                actionsEl.appendChild(workEl)
                clearInterval(player.interval3)


                //the metric
                var moneyEl = document.createElement('div')
                var moneyText = document.createTextNode('Money: ')
                moneyEl.appendChild(moneyText)
                moneyEl.setAttribute('class', 'substat')
                statsEl.appendChild(moneyEl)
                
                workEl.addEventListener('click', handleWorkClick)

                //the spend button

                var spendEl = document.createElement('button')
                var spendText = document.createTextNode('Spend')
                spendEl.appendChild(spendText)
                actionsEl.appendChild(spendEl)
                clearInterval(player.interval3)

                //spend event listener

                spendEl.addEventListener('click', handleSpendClick)

                function handleSpendClick(){
                    spendAnimation()
                    decreaseMoney()
                    player.sleepinessLevel = player.sleepinessLevel -1
                    sleepinessEl.textContent = 'Sleepiness: ' + player.sleepinessLevel
                    player.boredomLevel--
                    boredomEl.textContent = 'Boredom: ' + player.boredomLevel
                }
                function decreaseMoney(){
                    player.moneyLevel--
                    moneyEl.textContent = 'Money: ' + player.moneyLevel
                }
                function handleWorkClick(){
                    workAnimation()
                    increaseBoredom()
                    increaseSleepiness()
                    player.moneyLevel = player.moneyLevel + 2
                    moneyEl.textContent = 'Money: ' + player.moneyLevel
                }



                
                    
                



            } 


            
    },500)
}

//Start the game
setCharacterName()
evaluateCharacter()
levelUp()






