class Corridor {
    constructor() {

    }
    getNewRoom (direction) {
        // direction; 1 - top 2 - bottom 3 - right 4 - left side
        let newRoom;
        $('body').fadeOut(300).fadeIn(200)
        if (mapScene[0].entry !== direction) {

            if (mapScene[0].exit !== direction) {
                return false
            } else {
                return false
            }
        }
        /*console.log(mapScene[0])
        for (let i = mapScene[0].num; i >= mapScene[0].num; i++) {
            console.log(mapScene[0])
            mapScene[0] = mapScene[i++]
        }*/
        fountain.end()
        firstEnemy.end()
        secondEnemy.end()
        thirdEnemy.end()
        //if (mapScene[0].fountain === true) {
            fountain = new Fountain(coin1HTML, coin2HTML, coin3HTML)
            fountain.start()
        //}
        /*if (mapScene[0].enemy === true) {
            firstEnemy = new Enemy(firstEnemyHTML)
            secondEnemy = new Enemy(secondEnemyHTML)
            thirdEnemy = new Enemy(thirdEnemyHTML)
            firstEnemy.go(200, 100)
            secondEnemy.go(200, 300)
            thirdEnemy.go(200, 500)
        }*/
    }
}
