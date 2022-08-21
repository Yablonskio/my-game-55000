class Scene {
    constructor() {


    }
    sceneWall (e, side) {
        // e - element
        // 1 - top 2 - bottom 3 - right 4 - left side
        sceneBorders = {
            width: document.documentElement.clientWidth - 100,
            height: document.documentElement.clientHeight - 100
        }
        // coordinates corridor
        let CC1 = {
            x: Math.floor(parseInt($(firstCorridorHTML).offset().left,10) / 10 ) * 10,
            y: Math.floor(parseInt($(firstCorridorHTML).offset().top, 10) / 10) * 10,
            width: parseInt($(firstCorridorHTML).css('width'), 10),
            height: parseInt($(firstCorridorHTML).css('height'), 10)
        }
        let CC2 = {
            x: Math.floor(parseInt($(secondCorridorHTML).offset().left,10) / 10 ) * 10,
            y: Math.floor(parseInt($(secondCorridorHTML).offset().top, 10) / 10) * 10,
            width: parseInt($(secondCorridorHTML).css('width'), 10),
            height: parseInt($(secondCorridorHTML).css('height'), 10)
        }
        let CC3 = {
            x: Math.floor(parseInt($(thirdCorridorHTML).offset().left,10) / 10 ) * 10,
            y: Math.floor(parseInt($(thirdCorridorHTML).offset().top, 10) / 10) * 10,
            width: parseInt($(thirdCorridorHTML).css('width'), 10),
            height: parseInt($(thirdCorridorHTML).css('height'), 10)
        }
        let CC4 = {
            x: Math.floor(parseInt($(fourthCorridorHTML).offset().left,10) / 10 ) * 10,
            y: Math.floor(parseInt($(fourthCorridorHTML).offset().top, 10) / 10) * 10,
            width: parseInt($(fourthCorridorHTML).css('width'), 10),
            height: parseInt($(fourthCorridorHTML).css('height'), 10)
        }



        // coordinates fountain
        let CF = {
            x: Math.floor(parseInt($(fountainHTML).offset().left,10) / 10 ) * 10 - 50,
            y: Math.floor(parseInt($(fountainHTML).offset().top, 10) / 10) * 10 - 50,
            width: parseInt($(fountainHTML).css('width'), 10),
            height: parseInt($(fountainHTML).css('height'), 10)
        }
        //LOGIC CORRIDOR !!!
        // LOGIC FOUNTAIN !!!
        function checkX() {
            return e.x + 10 + e.width >= CF.x + 20 && e.x - 10 <= CF.x + CF.width - 10;

        }
        function checkY() {
            return e.y + e.height - 10 >= CF.y + 50 && e.y <= CF.y + CF.height - 20;

        }
        switch (side) {
            case 1:
                if (e.y <= 0) {
                    if (corridorWorker[1] === true) {
                        if (e.x + e.width >= CC1.x && e.x + e.width * 2 <= CC1.x + CC1.width) {
                            corridor.getNewRoom(1)
                        } else {return false}
                    } else {return false}
                }
                if (e.y === CF.y + CF.height - 10 && checkX() === true &&
                    $(fountainHTML).css('display') !== 'none') {
                    return false}
                break
            case 2:
                if (e.y + e.height >= sceneBorders.height) {
                    if (corridorWorker[2] === true) {
                        if (e.x + e.width >= CC2.x && e.x + e.width * 2 <= CC2.x + CC2.width) {
                            console.log('EEEE')
                        } else {return false}
                    } else {return false}
                }
                if (e.y + e.height === CF.y + 50 && checkX() === true &&
                    $(fountainHTML).css('display') !== 'none') {
                    return false}
                break
            case 3:
                if (e.x + e.width >= sceneBorders.width) {
                    if (corridorWorker[3] === true) {
                        if (e.y + e.height - 50 >= CC3.y && e.y + e.height + 50 <= CC3.y + CC3.height) {
                            console.log('EEEE')
                        } else {return false}
                    } else {return false}
                }
                if (e.x + e.width + 10 === CF.x + 10 && checkY() === true &&
                    $(fountainHTML).css('display') !== 'none') {return false}
                break
            case 4:
                if (e.x <= 0) {
                    if (corridorWorker[4] === true) {
                        console.log(e.y + e.height, CC4.y)
                        if (e.y + e.height - 50 >= CC4.y && e.y + e.height + 50 <= CC4.y + CC4.height) {
                            console.log('EEEE')
                        } else {return false}
                    } else {return false}
                }
                if (e.x - 10 === CF.x + CF.width && checkY() === true &&
                    $(fountainHTML).css('display') !== 'none') {return false}
                break
        }
        if (e.y + e.height === CF.y + 50) {
            $(fountainHTML).css('z-index', 21)
        } else {
            $(fountainHTML).css('z-index', 1)
        }
        return true
    }

    changeScene (scene) {

    }

    spawnEnemy () {

    }
}
