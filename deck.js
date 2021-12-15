var Suits=["♠","♣","♥","♦"];
var Cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var deckofCards;
export default class Deck{
    constructor(cards = freshDeck()){
        this.cards = cards;
    }

get numberOfCards(){
    return this.cards.length;
}
suffle(){
    for( let i = this.numberOfCards-1;i>0;i--){
        const newIndex = Math.floor(Math.random()*(1+i))
        const oldValue = this.cards[newIndex];
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldValue;
    }
}
}

class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }

        
    function () {
       return console.log(this.suit);
    }
}

function freshDeck(){
    return Suits.flatMap(suit=>{
        return Cards.map(value=>{
            return new Card(suit,value)
        })
    })
}


