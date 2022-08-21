class Enemy {
    constructor(idHTML) {
        this.stepNum = false
        this.idHTML = idHTML
        this._coordinatesIdHTML = {x: 0, y: 0}
        this.killStatus = false
        $(this.idHTML).css('display', 'flex')
        let rundomNumber = Math.floor(Math.random() * 200 + 300)
        this.interval = setInterval(() => {
            this.massHero()
            this.approximation()
        },rundomNumber)
    }
    kill() {
        if (this.killStatus === true) {
            clearInterval(this.interval)
            $(this.idHTML).css('transform', 'rotate(90deg)')
                .css('background-image', 'url(/img/zoombieDied.png)')
        }
    }
    // ANIMATE
    animateMovement() {
        // true – left, false – right
        let url
        !this.stepNum ? this.stepNum = true : this.stepNum = false
        url = '/img/zoombie'
        console.log(this.stepNum)
        if (this.stepNum) {
            url = url + 'Left.png'
        } else {
            url = url + 'Right.png'
        }
        $(this.idHTML).css('background-image', 'url(' + url + ')')
        setTimeout(() => {
            if (this.killStatus === false) {
                $(this.idHTML).css('background-image', 'url(/img/zoombie.png)')
            }
        }, 200)

    }

    // ANIMATE
    // FUNKTION
    approximation() {
        if (coordinatesHero.x > this._coordinatesIdHTML.x) {
            this.go(this._coordinatesIdHTML.x += 10,
                this._coordinatesIdHTML.y)
        } else if (coordinatesHero.x < this._coordinatesIdHTML.x) {
            this.go(this._coordinatesIdHTML.x -= 10,
                this._coordinatesIdHTML.y)
        }
        if (coordinatesHero.y > this._coordinatesIdHTML.y) {
            this.go(this._coordinatesIdHTML.x,
                this._coordinatesIdHTML.y += 10)
        } else if (coordinatesHero.y < this._coordinatesIdHTML.y) {
            this.go(this._coordinatesIdHTML.x,
                this._coordinatesIdHTML.y -= 10)
        }
        this.animateMovement()
    }
    go (x, y) {
        this._coordinatesIdHTML = {x: x, y: y}
        $(this.idHTML).css('left', x).css('top', y)
    }
    goAnother(x,y, id) {
        $(id).css('left', x).css('top', y)
    }
    attact () {

    }
    // Разработка
    mass () {
        let elementSelected = this.idHTML
        // CoordinatesSelected
        let CS = {
            x: parseInt(elementSelected.style.left, 10),
            y: parseInt(elementSelected.style.top, 10),
            width: parseInt(elementSelected.style.width, 10),
            height: parseInt(elementSelected.style.height, 10)
        }
        for (let i = 0; i < enemy.length; i++) {
            let elementComparison = enemy[i]
            // coordinatesComparison
            let CC = {
                x: parseInt(elementComparison.style.left, 10),
                y: parseInt(elementComparison.style.top, 10),
                width: parseInt(elementComparison.style.width, 10),
                height: parseInt(elementComparison.style.height, 10)
            }

            function checkX() {
                if (CS.x + CS.width >= CC.x && CS.x <= CC.x + CC.width) {
                    console.log('a')
                    return true
                }
                return false
            }

            function checkY() {
                if (CS.y + CS.height >= CC.y && CS.y <= CC.y + CC.height) {
                    return true
                }
                return false
            }

            if (CS.x + CS.width >= CC.x && CS.x <= CC.x + CC.width &&
                checkY() === true) {
                CS.x -= 10
                CC.x += 10
            }
            if (CS.y + CS.height >= CC.y && CS.y <= CC.y + CC.height &&
                checkX() === true) {
                CS.y += 10
                CC.y -= 10
            }



            this.go(CS.x, CS.y)
            this.goAnother(CC.x, CC.y, elementComparison)
        }
    }
    massHero () {
        let elementSelected = this.idHTML
        // CoordinatesSelected
        let CS = {
            x: parseInt(elementSelected.style.left, 10),
            y: parseInt(elementSelected.style.top, 10),
            width: parseInt(elementSelected.style.width, 10),
            height: parseInt(elementSelected.style.height, 10)
        }
        // CoordinatesHero
        let CH = {
            x: parseInt(heroHTML.style.left, 10),
            y: parseInt(heroHTML.style.top, 10),
            width: parseInt(heroHTML.style.width, 10),
            height: parseInt(heroHTML.style.height, 10)
        }

        function checkY() {

            if (CH.y + CH.height >= CS.y && CH.y <= CS.y + CS.height) {
                return true
            }
            return false
        }

        if (CH.x + CH.width >= CS.x && CH.x <= CS.x + CS.width &&
            checkY() === true) {
            toolTip.changeHP(1, false)
            if (coordinatesHero.x >= this._coordinatesIdHTML.x) {
                this.go(this._coordinatesIdHTML.x -= 10,
                    this._coordinatesIdHTML.y)
            } else if (coordinatesHero.x <= this._coordinatesIdHTML.x) {
                this.go(this._coordinatesIdHTML.x += 10,
                    this._coordinatesIdHTML.y)
            }
            if (coordinatesHero.y >= this._coordinatesIdHTML.y) {
                this.go(this._coordinatesIdHTML.x,
                    this._coordinatesIdHTML.y -= 10)
            } else if (coordinatesHero.y <= this._coordinatesIdHTML.y) {
                this.go(this._coordinatesIdHTML.x,
                    this._coordinatesIdHTML.y += 10)
            }

        }




    }
    end () {
        $(this.idHTML).css('display', 'none')
        clearInterval(this.interval)


    }
}
