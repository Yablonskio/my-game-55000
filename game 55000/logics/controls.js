document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        // лево
        case 37:
        case 65:
            if (scene.sceneWall(coordinatesHero, 4)) {

                hero.movementLeft()
            }
            if (coinHoleHTML[0].style.display === 'flex' &&
                $(fountainHTML).css('display') !== 'none') {
                fountain.takeACoin()
            }

            break
        // право
        case 39:
        case 68:
            if (scene.sceneWall(coordinatesHero, 3)) {

                hero.movementRight()
            }
            if (coinHoleHTML[0].style.display === 'flex' &&
                $(fountainHTML).css('display') !== 'none') {
                fountain.takeACoin()
            }

            break
        // верх
        case 38:
        case 87:
            if (scene.sceneWall(coordinatesHero, 1)) {

                hero.movementTop()
            }
            if (coinHoleHTML[0].style.display === 'flex' &&
                $(fountainHTML).css('display') !== 'none') {
                fountain.takeACoin()
            }

            break
        // низ
        case 40:
        case 83:
            if (scene.sceneWall(coordinatesHero, 2)) {

                hero.movementBottom()
            }
            if (coinHoleHTML[0].style.display === 'flex' &&
                $(fountainHTML).css('display') !== 'none') {
                fountain.takeACoin()
            }

            break
        // enter
        case 13:
            hero.attack()
            break
    }
});
