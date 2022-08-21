alert('Стрелочки или WASD для перемещения и enter для атаки')
window.addEventListener('click', function () {

})
let weapon = swordHTML
let scene = new Scene()
const hero = new Hero()
let toolTip = new ToolTip()
if (mapScene[0].fountain === true) {
    var fountain = new Fountain(coin1HTML, coin2HTML, coin3HTML)
    fountain.start()
}
let corridor = new Corridor()
if (mapScene[0].enemy === true) {
    var firstEnemy = new Enemy(firstEnemyHTML)
    var secondEnemy = new Enemy(secondEnemyHTML)
    var thirdEnemy = new Enemy(thirdEnemyHTML)
    firstEnemy.go(200, 100)
    secondEnemy.go(200, 300)
    thirdEnemy.go(200, 500)
}
