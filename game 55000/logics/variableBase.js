let heroHTML = document.getElementById('hero')
let heroHTMLImage = document.querySelector('#hero>div:first-child')
let coordinatesHero = {x: 100, y: 100, width: 50, height: 100}
let _attackSide = {past: 1, present: 1};
let _HP = 10;
// 0 - вверх
// 1 - низ
// 2 - лево
// 3 - право
// 4 - вверх лево
// 5 - вверх право
// 6 - низ лево
// 7 - низ право
// СКОРО В РАЗРАБОТКЕ
// 8 - центр лево
// 9 - центр право

let swordHTML = document.getElementById('sword')
let weaponHTML = document.getElementById('weapon')
let firstEnemyHTML = document.getElementById('firstEnemy')
let secondEnemyHTML = document.getElementById('secondEnemy')
let thirdEnemyHTML = document.getElementById('thirdEnemy')
let enemy = document.getElementsByClassName('enemy')
let money = 0
let moneyHTML = document.getElementById('money')
// если сзади то – true
let behindMusketeerWorker = false
// SCENE VARIABLE
// 0 - active
let mapScene = [
    {entry: 1, exit: 0, enemy: true, fountain: true, num: 0},// THIS IS ACTIVE ROOM
    // first room default active
    {entry: 1, exit: 0, enemy: true, fountain: true, num: 1},
    // ^
    {entry: 4, exit: 2, enemy: true, fountain: false, num: 2},
    {entry: 0, exit: 3, enemy: false, fountain: true , num: 3}
]


let sceneBorders = {
    width: document.documentElement.clientWidth - 100,
    height: document.documentElement.clientHeight - 100
}
let fountainHTML = document.getElementsByClassName('fountain')[0]
let coinsHTML = document.getElementsByClassName('coin')
let coin1HTML = document.getElementById('coin1')
let coin2HTML = document.getElementById('coin2')
let coin3HTML = document.getElementById('coin3')
let coinHoleHTML = document.getElementsByClassName('coinHole')

// ^ SCENE VARIABLE

// CORRIDOR VARIABLE
// 0 - global, 1 - top, 2 - bottom, 3 - left, 4 - right
let corridorWorker = [true, true, true, true, true]



// top
let firstCorridorHTML = document.getElementById('firstCorridorEntrails')
// bottom
let secondCorridorHTML = document.getElementById('secondCorridorEntrails')
//left
let thirdCorridorHTML = document.getElementById('thirdCorridorEntrails')
// right
let fourthCorridorHTML = document.getElementById('fourthCorridorEntrails')
// ^ CORRIDOR VARIABLE









