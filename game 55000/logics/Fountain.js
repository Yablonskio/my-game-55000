class Fountain {
    constructor() {
        this.arrayCoin = [
            this.coin1 = {x: 0, y: 0, width: 50, height: 50},
            this.coin2 = {x: 0, y: 0, width: 50, height: 50},
            this.coin3 = {x: 0, y: 0, width: 50, height: 50},
        ]
        this.intervalFountain = 0
    }

    updateRundom(coin, coinHTML, index) {
        // coordinates fountain
        let CF = {
            x: parseInt($(fountainHTML).offset().left, 10) - 50,
            y: parseInt($(fountainHTML).offset().top, 10) - 50,
            width: parseInt($(fountainHTML).css('width'), 10),
            height: parseInt($(fountainHTML).css('height'), 10)
        }
        coin = {
            x: Math.floor(
                    Math.random() *
                    (document.documentElement.clientWidth - 150) / 10)
                * 10,
            y: Math.floor(
                    Math.random() *
                    (document.documentElement.clientHeight - 150) / 10)
                * 10,
            width: 50,
            height: 50
        }
        if (coin.x <= CF.x + CF.width &&
            coin.x + coin.width >= CF.x &&
            coin.y <= CF.y + CF.height &&
            coin.y + coin.height >= CF.y) {
            this.updateRundom(coin, coinHTML, index)
        } else {
            this.arrayCoin[index] = coin
            $(coinHTML).css('left', coin.x).css('top', coin.y)
        }
    }
    giveACoin (coin, coinHTML, index) {
        this.updateRundom(coin, coinHTML, index)
    }
    takeACoin() {
        let CH = {
            x: parseInt(heroHTML.style.left, 10),
            y: parseInt(heroHTML.style.top, 10),
            width: parseInt(heroHTML.style.width, 10),
            height: parseInt(heroHTML.style.height, 10)
        }
        let arrayCoin = this.arrayCoin
        for (let i = 0; i < coinsHTML.length; i++) {
            if (CH.x + CH.width >= arrayCoin[i].x &&
                CH.x <= arrayCoin[i].x + arrayCoin[i].width &&
                CH.y + CH.height >= arrayCoin[i].y &&
                CH.y <= arrayCoin[i].y + arrayCoin[i].height &&
                $(coinsHTML[i]).css('display') !== 'none') {
                $(coinsHTML[i]).css('display', 'none')
                money++
                $(moneyHTML).text(money)
            }
        }
    }

    start () {
        $(fountainHTML).css('display', 'flex')
        $(coinHoleHTML).css('display', 'flex')
        $('#coins').css('display', 'inline')
        $('.coin').css('display', 'inline')
        let CF = {
            x: parseInt($(fountainHTML).offset().left, 10) - 50,
            y: parseInt($(fountainHTML).offset().top, 10) - 50
        }
        window.onresize = () => {
            CF = {
                x: parseInt($(fountainHTML).offset().left, 10) - 50,
                y: parseInt($(fountainHTML).offset().top, 10) - 50
            }
        }
        for (let i = 0; i < coinsHTML.length; i++) {
            let timer = 1
            let a = setInterval(() => {
                if (this.intervalFountain === 1) {
                    clearInterval(a)
                }
                if (timer === 0) {
                    coinsHTML[i].x = -100
                    coinsHTML[i].y = -100
                    timer = 2
                    $(coinsHTML[i]).fadeOut(300)
                } else {
                    $(coinsHTML[i]).css('left', 175 + CF.x).css('top', 15 + CF.y)
                    console.log($(coinsHTML[i]).css('left'))
                    $(coinsHTML[i]).fadeIn(0)

                    this.giveACoin(this.arrayCoin[i], coinsHTML[i], i)
                }
                timer--
            }, Math.floor(Math.random() * 1000) + 3500)
        }
    }
    end () {
        $(fountainHTML).css('display', 'none')
        $(coinHoleHTML).css('display', 'none')
        $('#coins').css('display', 'none')
        this.intervalFountain = 1

    }
}


