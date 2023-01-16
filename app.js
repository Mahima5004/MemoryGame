const cardArray=[
  {
    name:'cheeseburger',
    img:'Img/cheeseburger.png',
  },
  {
    name:'fries',
    img:'Img/fries.png',
  },
  {
    name:'hotdog',
    img:'Img/hotdog.png',
  },
  {
    name:'ice-cream',
    img:'Img/ice-cream.png',
  },
  {
    name:'milkshake',
    img:'Img/milkshake.png',
  },
  {
    name:'pizza',
    img:'Img/pizza.png',
  },
  {
    name:'cheeseburger',
    img:'Img/cheeseburger.png',
  },
  {
    name:'fries',
    img:'Img/fries.png',
  },
  {
    name:'hotdog',
    img:'Img/hotdog.png',
  },
  {
    name:'ice-cream',
    img:'Img/ice-cream.png',
  },
  {
    name:'milkshake',
    img:'Img/milkshake.png',
  },
  {
    name:'pizza',
    img:'Img/pizza.png',
  }
]
cardArray.sort(() => 0.5-Math.random()) //randomly sorting the array
let chosenCard=[]
let chosenCardId=[]
let cardWon=[]
console.log(cardArray)
const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')

function createBoard(){
    for(let i=0 ; i<cardArray.length; i++){
        const card=document.createElement('img')
        card.setAttribute('src','Img/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
        card.addEventListener('click',flipcard)
    }
    
}
createBoard()

function cardMatch(){
    const cards=document.querySelectorAll('img')
    let firstId=chosenCardId[0]
    let seconId=chosenCardId[1]
    if (firstId===seconId){
        alert('You have chosen the same card')
        cards[firstId].setAttribute('src','Img/blank.png')
    }
    else if (chosenCard[0]===chosenCard[1]){
        alert('You found the match!👍')
        cards[firstId].setAttribute('src','Img/white.png')
        cards[seconId].setAttribute('src','Img/white.png')
        cards[firstId].removeEventListener('click',flipcard)
        cards[seconId].removeEventListener('click',flipcard)
        cardWon.push(chosenCard)
        
    }
    else{
        cards[firstId].setAttribute('src','Img/blank.png')
        cards[seconId].setAttribute('src','Img/blank.png')
        alert('Sorry try again😒')
    }
    resultDisplay.textContent=cardWon.length
    chosenCard=[]
    chosenCardId=[]
    if (cardWon.length == cardArray.length/2){
        
        resultDisplay.textContent='Congratulations you got them all!'
    }
    
}
function flipcard(){
    const cardId=this.getAttribute('data-id') 
    chosenCard.push(cardArray[cardId].name)
    chosenCardId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(chosenCard.length===2){
        setTimeout(cardMatch,500)
    }
}