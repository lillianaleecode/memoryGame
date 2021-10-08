
document.addEventListener('DOMContentLoaded', () => {
    
//PART 1: CREATE CARD OPTIONS

const cardArray = [ //const variable cant be reassigned while let yes.
    {
        name: 'bone',
        img: 'imagesHalloween/bone.png'
    },
    {
        name: 'bone',
        img: 'imagesHalloween/bone.png'
    },
    {
        name: 'broom',
        img: 'imagesHalloween/broom.png'
    },
    {
        name: 'broom',
        img: 'imagesHalloween/broom.png'
    }, 
    {
        name: 'candle',
        img: 'imagesHalloween/candle.png'
    },
    {
        name: 'candle',
        img: 'imagesHalloween/candle.png'
    },
    {
        name: 'candy',
        img: 'imagesHalloween/candy.png'
    },
    {
        name: 'candy',
        img: 'imagesHalloween/candy.png'
    },
    {
        name: 'cauldron',
        img: 'imagesHalloween/cauldron.png'
    },
    {
        name: 'cauldron',
        img: 'imagesHalloween/cauldron.png'
    },
    {
        name: 'eye',
        img: 'imagesHalloween/eye.png'
    },
    {
        name: 'eye',
        img: 'imagesHalloween/eye.png'
    },
    {
        name: 'ghost',
        img: 'imagesHalloween/ghost.png'
    },
    {
        name: 'ghost',
        img: 'imagesHalloween/ghost.png'
    },
    {
        name: 'gummi',
        img: 'imagesHalloween/gummi.png'
    },
    {
        name: 'gummi',
        img: 'imagesHalloween/gummi.png'
    },
    {
        name: 'hand',
        img: 'imagesHalloween/hand.png'
    },
    {
        name: 'hand',
        img: 'imagesHalloween/hand.png'
    },  
    {
        name: 'hat',
        img: 'imagesHalloween/hat.png'
    },
    {
        name: 'hat',
        img: 'imagesHalloween/hat.png'
    },
    {
        name: 'pumpkin',
        img: 'imagesHalloween/pumpkin.png'
    },
    {
        name: 'pumpkin',
        img: 'imagesHalloween/pumpkin.png'
    },
    {
        name: 'rip',
        img: 'imagesHalloween/rip.png'
    },
    {
        name: 'rip',
        img: 'imagesHalloween/rip.png'
    },
    {
        name: 'skull',
        img: 'imagesHalloween/skull.png'
    },
    {
        name: 'skull',
        img: 'imagesHalloween/skull.png'
    }
    
]

//PART 5 Make the Cards Sort Random: 
cardArray.sort(() => 0.5 - Math.random())

//PART 2: CREATE GAME BOARD:

const grid = document.querySelector('.grid') //aka: get the first element in the document with class '.grid'
const resultDisplay = document.querySelector('#result')  //Part 4.a take id from html
var cardsChosen = [] //Part 3
var cardsChosenId = [] //Part 3
var cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img') //create var called card, that when each time it looops, will create an image element.
        card.setAttribute('src', 'imagesHalloween/bricks.png')
        card.setAttribute('data-id', i) //this will give an id that goes from 0 to 24 (as we have 24 cards in total)
        card.addEventListener('click', flipCard)//Part 3. addEventListener Checks clicks and if so, will flipcard. flipcard function will be written later in part 3
        grid.appendChild(card) //this will append(add) what we have created in the html div class .grid
     
    }

}

//PART 4 Create Check for Matches Function (recalled in Part 3)
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0] //"I want the first value in my array and assigned to optionOneId"
    const optionTwoId = cardsChosenId[1]
    console.log(optionOneId, optionTwoId)
    console.log("checking")
    if (cardsChosen[0] === cardsChosen[1]){
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'imagesHalloween/black.png')
        cards[optionTwoId].setAttribute('src', 'imagesHalloween/black.png')
        cardsWon.push(cardsChosen) //created this variable
    } else{
        cards[optionOneId].setAttribute('src', 'imagesHalloween/bricks.png')
        cards[optionTwoId].setAttribute('src', 'imagesHalloween/bricks.png')
        //alert('sorry, try again')
    }
    cardsChosen = [] //to clear them and ready to start flipping again
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length //Part 4.a
    if (cardsWon.length === cardArray.length/2) { //here we know that the user collected all the cards
        resultDisplay.textContent = 'Congratulations, you found them all!'
    }
}

//PART 3 Create flipCard Function..it is called in Part 2 createBoard()
function flipCard(){
    var cardId = this.getAttribute('data-id') //will get this att we set it above
    cardsChosen.push(cardArray[cardId].name) //new created. this will match card ex. 4 with the 5th card array. once we locate this card, we will find its name
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img) //this set AtTr will let us add image based on the cardId it holds
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 200) //function created in Part 4
    }
}





//PART 2.A. LETS INVOKE THE FUNCTION

createBoard()


}) //ending of the arrow function

