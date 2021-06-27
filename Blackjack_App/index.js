let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ''

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
    name: 'Per',
    chips: 145
}


let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    num = Math.floor(Math.random() * 13) + 1
    if (num === 1) {
        return 11
    } else if (num > 10) {
        return 10
    } else {
        return num            
    }
}
function renderGame() {
    cardsEl.textContent = 'Cards: '
    for (let i=0; i<cards.length; i++) {
        if (i>0) {
            cardsEl.textContent += ', ' + cards[i] 
        }
        else {
            cardsEl.textContent += cards[i]
        }
        
    }
    
    sumEl.textContent = 'Sum: ' + sum

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        hasBlackJack = true
        message = "You've got blackjack!"
    } else {
        isAlive = false
        message = 'You lost the game!'
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        // cardsEl.textContent = 'Cards: ' + firstCard + ", " + secondCard + " and " + card
        // sumEl.textContent = 'Sum: ' + sum
        renderGame()  
    }
    
    
}


