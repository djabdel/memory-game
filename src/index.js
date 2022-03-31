document.addEventListener('DOMContentLoaded', () => {
    //card option
    const cardsArray = [{
            name: 'fries',
            Img: '/images/fries.png',
        },
        {
            name: 'pizza',
            Img: '/images/pizza.png',
        },

        {
            name: 'milkshake',
            Img: '/images/milkshake.png',
        },
        {
            name: 'ice-cream',
            Img: '/images/ice-cream.png',
        },
        {
            name: 'hotdog',
            Img: '/images/hotdog.png',
        },
        {
            name: 'cheeseburger',
            Img: '/images/cheeseburger.png',
        },
        {
            name: 'fries',
            Img: '/images/fries.png',
        },
        {
            name: 'pizza',
            Img: '/images/pizza.png',
        },

        {
            name: 'milkshake',
            Img: '/images/milkshake.png',
        },
        {
            name: 'ice-cream',
            Img: '/images/ice-cream.png',
        },
        {
            name: 'hotdog',
            Img: '/images/hotdog.png',
        },
        {
            name: 'cheeseburger',
            Img: '/images/cheeseburger.png',
        }

    ]


    cardsArray.sort(() => 0.5 - Math.random())

    console.log(cardsArray)


    const grid = document.querySelector('.grid')

    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon =[]


    function createBoard() {

        for (let i = 0; i < cardsArray.length; i++) { //creating a loop 

            const card = document.createElement('img') //create a element image 
            card.setAttribute('src', '/images/blank.png') //set the attribute to the path of an image
            card.setAttribute('data-id', i) //set a data-id to a random image
            card.addEventListener('click', flipCard)
            grid.appendChild(card) //add the image card to the div
        }


    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')

        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardsArray[cardId].Img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId == optionTwoId) {

            alert('you didit 2 times')
            cards[optionOneId].setAttribute('src', '/images/blank.png')
            cards[optionTwoId].setAttribute('src', '/images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('you did it good match')
            cards[optionOneId].setAttribute('src', '/images/white.png')
            cards[optionTwoId].setAttribute('src', '/images/white.png')

            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)

            


        }else{
            cards[optionOneId].setAttribute('src', '/images/blank.png')
            cards[optionTwoId].setAttribute('src', '/images/blank.png')
            alert ('sorry, try again!')
        }
        cardsChosen=[]
        cardsChosenIds =[]
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = 'congratulations you have won'
        }

        console.log(cardsChosen)
        console.log(cardsWon)
    }

    createBoard()
})