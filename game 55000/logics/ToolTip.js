class ToolTip {
    constructor() {
        this.firstHeart = document.querySelector('.heartLeft:nth-child(1)')
        this.secondHeart = document.querySelector('.heartLeft:nth-child(1)').children[0]
        this.thirdHeart = document.querySelector('.heartLeft:nth-child(2)')
        this.fourthHeart = document.querySelector('.heartLeft:nth-child(2)').children[0]
        this.fifthHeart = document.querySelector('.heartLeft:nth-child(3)')
        this.sixthHeart = document.querySelector('.heartLeft:nth-child(3)').children[0]
        this.seventhHeart = document.querySelector('.heartLeft:nth-child(4)')
        this.eighthHeart = document.querySelector('.heartLeft:nth-child(4)').children[0]
        this.ninthHeart = document.querySelector('.heartLeft:nth-child(5)')
        this.tenthHeart = document.querySelector('.heartLeft:nth-child(5)').children[0]
    }
    changeHP(amount, plus) {
        if (plus === true && amount !== 10) {
            _HP = _HP + amount
        } else if (plus === false && amount !== 0) {
            _HP = _HP - amount
            if (_HP === 0) {
                alert('GAME OVER!')
                setTimeout(() => {
                    location.reload()
                }, 200)
            }
        } else {
            console.log('Catch a error! Wrong change plus')
        }
        $(this.firstHeart).css('display', 'none')
        $(this.secondHeart).css('display', 'none')
        $(this.thirdHeart).css('display', 'none')
        $(this.fourthHeart).css('display', 'none')
        $(this.fifthHeart).css('display', 'none')
        $(this.sixthHeart).css('display', 'none')
        $(this.seventhHeart).css('display', 'none')
        $(this.eighthHeart).css('display', 'none')
        $(this.ninthHeart).css('display', 'none')
        $(this.tenthHeart).css('display', 'none')

        switch (_HP) {
            case 1:
                $(this.firstHeart).css('display', 'inline')
                break;
            case 2:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                break;
            case 3:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                break;
            case 4:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                $(this.fourthHeart).css('display', 'inline')
                break;
            case 5:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                $(this.fourthHeart).css('display', 'inline')
                $(this.fifthHeart).css('display', 'inline')
                break;
            case 6:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                $(this.fourthHeart).css('display', 'inline')
                $(this.fifthHeart).css('display', 'inline')
                $(this.sixthHeart).css('display', 'inline')

                break;
            case 7:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                $(this.fourthHeart).css('display', 'inline')
                $(this.fifthHeart).css('display', 'inline')
                $(this.sixthHeart).css('display', 'inline')
                $(this.seventhHeart).css('display', 'inline')
                break;
            case 8:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                $(this.fourthHeart).css('display', 'inline')
                $(this.fifthHeart).css('display', 'inline')
                $(this.sixthHeart).css('display', 'inline')
                $(this.seventhHeart).css('display', 'inline')
                $(this.eighthHeart).css('display', 'inline')
                break;
            case 9:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                $(this.fourthHeart).css('display', 'inline')
                $(this.fifthHeart).css('display', 'inline')
                $(this.sixthHeart).css('display', 'inline')
                $(this.seventhHeart).css('display', 'inline')
                $(this.eighthHeart).css('display', 'inline')
                $(this.ninthHeart).css('display', 'inline')
                break;
            case 10:
                $(this.firstHeart).css('display', 'inline')
                $(this.secondHeart).css('display', 'inline')
                $(this.thirdHeart).css('display', 'inline')
                $(this.fourthHeart).css('display', 'inline')
                $(this.fifthHeart).css('display', 'inline')
                $(this.sixthHeart).css('display', 'inline')
                $(this.seventhHeart).css('display', 'inline')
                $(this.eighthHeart).css('display', 'inline')
                $(this.ninthHeart).css('display', 'inline')
                $(this.tenthHeart).css('display', 'inline')
                break;
            default:
                console.log('Catch a error! Wrong change')
        }
    }
}
