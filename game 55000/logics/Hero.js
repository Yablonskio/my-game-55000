class Hero {
    constructor() {
        this.weaponTrackerChanger = false
        this.quickUpdate = 0
        // true – left, false – right
        this.stepNum = true
        // coordinates weapon
        this.CW = {x: 0, y: 0}
        this.weaponChild =
            document.querySelector('#weapon>div')
        // weapon trecker
        let WT = setInterval(() => {
            if (this.weaponTrackerChanger === true) {
                let quickUpdate = setInterval(() => {
                    // coordinates weapon
                    this.CW = {
                        x: parseInt($(this.weaponChild).offset().left, 10),
                        y: parseInt($(this.weaponChild).offset().top, 10),
                        width: parseInt($(this.weaponChild).css('width'), 10),
                        height: parseInt($(this.weaponChild).css('height'), 10)
                    }
                    //coordinates comparison
                    for (let i = 0; i < enemy.length; i++) {
                        let elementComparison = enemy[i]
                        let CC = {
                            x: parseInt(elementComparison.style.left, 10),
                            y: parseInt(elementComparison.style.top, 10),
                            width: parseInt(elementComparison.style.width, 10),
                            height: parseInt(elementComparison.style.height, 10)
                        }

                        function checkY(CW) {
                            if (CW.y + CW.height >= CC.y &&
                                CW.y <= CC.y + CC.height) {
                                return true
                            }
                            return false
                        }
                        function checkX(CW) {
                            if (CW.x + CW.height >= CC.x &&
                                CW.x <= CC.x + CC.width) {
                                return true
                            }
                            return false
                        }
                        function killEnemy() {
                            switch (i) {
                                case 0:
                                    firstEnemy.killStatus = true
                                    firstEnemy.kill()
                                    break
                                case 1:
                                    secondEnemy.killStatus = true
                                    secondEnemy.kill()
                                    break
                                case 2:
                                    thirdEnemy.killStatus = true
                                    thirdEnemy.kill()
                                    break
                            }
                        }

                        if (this.CW.x - 50 + this.CW.height >= CC.x &&
                            this.CW.x - 50 <= CC.x + CC.width &&
                            this.CW.y - 50 + this.CW.height >= CC.y &&
                            this.CW.y - 50 <= CC.y + CC.height) {
                            killEnemy()
                        }
                    }
                    if (this.weaponTrackerChanger === false) {
                        clearInterval(quickUpdate)
                    }
                }, 20)
            } else {

            }
        }, 100)
    }
// ANIMATE
    animateAttack(weapon) {
        if ($(weapon).css('right') === '-10px') {
            $(weapon).css('transform', 'rotate(130deg)')
                .css('right', '-35px').css('bottom', '0px');
            setTimeout(() => {
                $(weapon).css('transform', 'rotate(10deg)')
                    .css('right', '-10px').css('bottom', '50px');
            }, 300)
        }
    }
    animateMovement() {
        // true – left, false – right
        let url
        let oldUrl
        !this.stepNum ? this.stepNum = true : this.stepNum = false
        if (!behindMusketeerWorker) {
            url = '/img/musketeer'
        } else {
            url = '/img/behindMusketeer'
        }
        oldUrl = url
        $(heroHTML).css('left', coordinatesHero.x)
        $(heroHTML).css('top', coordinatesHero.y)
        if (url === undefined) {
            console.log('CATCH A ERROR, IN HERO.JS 100')
        }
        if (this.stepNum) {
            url = url + 'Left.png'
        } else {
            url = url + 'Right.png'
        }

        $(heroHTMLImage).css('background-image', 'url(' + url + ')')
        setTimeout(() => {
            oldUrl = oldUrl + '.png'
            $(heroHTMLImage).css('background-image', 'url(' + oldUrl + ')')
        }, 100)

    }
// ANIMATE
// LOGIC
    HP() {

    }

// LOGIC
// FUNKTION
    set changeAttackSide(getChangeAttackSide) {
        _attackSide.past = _attackSide.present
        _attackSide.present = getChangeAttackSide
    }
    attackSide(pastAttackSide, presentAttackSide) {
        let attackSide = presentAttackSide + pastAttackSide
        switch (attackSide) {
            // 1 - вверх
            case 2:
                if (weaponHTML.style.transform !== 'rotate(-60)' ||
                    weaponHTML.style.transform !== 'rotate(300)') {
                    if (weaponHTML.style.transform === 'rotate(0deg)' ||
                        weaponHTML.style.transform === 'rotateY(0deg)') {
                        $(weaponHTML).css('transform', 'rotate(-60deg)')
                    } else {/*тут был ротейт на 300дег*/}
                    $(heroHTMLImage).css('background-image', 'url(/img/behindMusketeer.png)')
                    behindMusketeerWorker = true
                    $(weaponHTML).css('z-index', '-1')
                }
                break
            // 4 - низ
            case 8:
                $(weaponHTML).css('transform', 'rotate(110deg)')
                $(heroHTMLImage).css('background-image', 'url(/img/Musketeer.png)')
                behindMusketeerWorker = false
                $(weaponHTML).css('z-index', '1')
                break
            // 8 - лево
            case 16:
                $(weaponHTML).css('transform', 'rotate(0deg)')
                $(weaponHTML).css('transform', 'rotateY(180deg)')
                break
            // 16 - право
            case 32:
                $(weaponHTML).css('transform', 'rotate(0deg)')
                $(weaponHTML).css('transform', 'rotateY(0deg)')
                break
            //  - вверх лево
            case 9:
                if (pastAttackSide === 16) {
                    if (presentAttackSide === 4) {
                        $(weaponHTML).css('transform', 'rotateY(180deg)')
                        $(weaponHTML).css('z-index', '-1')
                        $(heroHTMLImage).css('background-image', 'url(/img/behindMusketeer.png)')
                        behindMusketeerWorker = true
                    }
                }
                break
            //  - вверх право
            case 17:
                if (weaponHTML.style.transform === 'rotate(300deg)') {
                    $(weaponHTML).css('transform', 'rotate(360deg)')
                        .css('transition', '0s').css('transform', 'rotate(0deg)')
                        .css('transition', '200ms')
                }
                if (pastAttackSide === 32) {
                    if (presentAttackSide === 4) {
                        $(weaponHTML).css('transform', 'rotate(0deg)')
                        $(weaponHTML).css('z-index', '-1')
                        $(heroHTMLImage).css('background-image', 'url(/img/behindMusketeer.png)')
                        behindMusketeerWorker = true
                    }
                }
                break
            //  - низ лево
            case 12:
                if ($(weaponHTML).css('z-index') !== '-1') {
                    if (pastAttackSide === 8) {
                        if (presentAttackSide === 4) {
                            $(weaponHTML).css('transform', 'rotate(160deg)')
                            $(heroHTMLImage).css('background-image', 'url(/img/musketeer.png)')
                            behindMusketeerWorker = false
                            $(weaponHTML).css('z-index', '1')
                        }
                    } else {
                        $(weaponHTML).css('transform', 'rotateY(180deg)')
                    }
                }
                break

            //  - низ право
            case 20:
                if ($(weaponHTML).css('z-index') !== '-1') {
                    if (pastAttackSide === 16) {
                        if (presentAttackSide === 4) {
                            $(weaponHTML).css('transform', 'rotate(200deg)')
                                .css('transform', 'rotateX(200deg)')
                            $(heroHTMLImage).css('background-image', 'url(/img/musketeer.png)')
                            behindMusketeerWorker = false
                            $(weaponHTML).css('z-index', '1')
                        }
                    } else {
                        $(weaponHTML).css('transform', 'rotateY(0deg)')
                    }
                }
                break
            // 24 - право лево
            case 24:
                if (pastAttackSide === 8) {
                    $(weaponHTML).css('transform', 'rotateY(110deg)')
                } else {
                    $(weaponHTML).css('transform', 'rotateY(70deg)')
                }
                pastAttackSide = 0
                break
            // 5 - вверх низ
            case 5:
                if (presentAttackSide === 1) {
                    // верх
                    if (weaponHTML.style.transform !== 'rotate(-60)' ||
                        weaponHTML.style.transform !== 'rotate(300)') {
                        if (weaponHTML.style.transform === 'rotate(0deg)' ||
                            weaponHTML.style.transform === 'rotateY(0deg)') {

                            $(weaponHTML).css('transform', 'rotate(-60deg)')
                            $(heroHTMLImage).css('background-image', 'url(/img/musketeer.png)')
                            behindMusketeerWorker = false
                        } else {
                            $(weaponHTML).css('transform', 'rotate(300deg)')
                            $(heroHTMLImage).css('background-image', 'url(/img/behindMusketeer.png)')
                            behindMusketeerWorker = true
                        }
                        $(weaponHTML).css('z-index', '-1')
                    }
                } else {
                    // низ
                    $(heroHTMLImage).css('background-image', 'url(/img/musketeer.png)')
                    behindMusketeerWorker = false
                    $(weaponHTML).css('transform', 'rotate(110deg)')
                        .css('z-index', '1')

                }
                break
            default:
                console.log('Error in Hero.js, attackSide metod, switch')
        }
    }
    attack() {
        this.weaponTrackerChanger = true
        setTimeout(() => {
            this.weaponTrackerChanger = false
        }, 350)

        this.animateAttack(weapon)
    }
// FUNKTION

// MOVEMENT
    movementRight() {
        coordinatesHero.x += 10
        this.changeAttackSide = 16
        this.attackSide(_attackSide.past, _attackSide.present)
        this.animateMovement()
    }
    movementLeft() {
        coordinatesHero.x -= 10
        this.changeAttackSide = 8
        this.attackSide(_attackSide.past, _attackSide.present)
        this.animateMovement()
    }
    movementTop() {
        coordinatesHero.y -= 10
        this.changeAttackSide = 1
        this.attackSide(_attackSide.past, _attackSide.present)
        this.animateMovement()
    }
    movementBottom() {
        coordinatesHero.y += 10
        this.changeAttackSide = 4
        this.attackSide(_attackSide.past, _attackSide.present)
        this.animateMovement()
    }

// MOVEMENT


}
