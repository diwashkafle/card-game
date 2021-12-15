import Deck from "./deck.js";
const startButton = document.getElementById("start-btn");
const splitedCard = document.querySelectorAll(".splitted-card");
const showCard = document.querySelectorAll(".card");
const cardSuit = document.querySelectorAll(".inside-card-suit")
const cardValue1 = document.querySelectorAll(".inside-card-value1")
const cardValue2 = document.querySelectorAll(".inside-card-value")
const showButton = document.getElementById("show-btn");
const resuffleButton = document.getElementById("img-btn");

const deck = new Deck();
// const newDeck = deck.suffle();
console.log(deck)
deck.suffle();
window.addEventListener("load",()=>{
    startButton.addEventListener("click", ()=>{
    console.log("clicked")
    if(splitedCard[0].style.display==="none"){
        deck.suffle()
    }
    for(let i=0;i<splitedCard.length;i++){
        splitedCard[i].style.display="flex";
    }
    
    
    for (let i=0;i<cardSuit.length;i++){
        cardSuit[i].innerHTML=deck.cards[i].suit;
        cardValue1[i].innerHTML=deck.cards[i].value;
        cardValue2[i].innerHTML=deck.cards[i].value;

        if(cardSuit[i].innerHTML==="♥" || cardSuit[i].innerHTML==="♦"){
            cardSuit[i].style.color="red"
            cardValue1[i].style.color="red"
            cardValue2[i].style.color="red"

        }else{
            cardSuit[i].style.color="black"
            cardValue1[i].style.color="black"
            cardValue2[i].innerHTML=deck.cards[i].value;

        }
    }

    showButton.addEventListener("click",()=>{
        if(splitedCard[0].style.display==="flex"){
        document.getElementsByClassName("covered-card")[0].style.display="none";
        document.getElementsByClassName("covered-card")[1].style.display="none";
        document.getElementsByClassName("show-card")[0].style.display="flex";
        document.getElementsByClassName("show-card")[1].style.display="flex";
        }
        else{
           null; 
        }
        resuffleButton.addEventListener("click",()=>{
        deck.suffle();
        document.getElementsByClassName("show-card")[0].style.display="none";
        document.getElementsByClassName("show-card")[1].style.display="none";
        document.getElementsByClassName("covered-card")[0].style.display="flex";
        document.getElementsByClassName("covered-card")[1].style.display="flex";
        })
    })
 });
});
