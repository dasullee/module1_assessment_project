/** once the document has loaded, call the intitializeApp function */
$(document).ready(initializeApp);

/**
 * A global variable called "deck" that will hold your deck of cards.
 * Its initial value should be an empty array.
 * @var {array} deck
 */
var deck = [];


function initializeApp(){
    createDeck(deck);
    deck = shuffleCards(deck);
    dealCards(7,deck);
}


function createDeck(cardDeck){
    var values = ["two","three","four","five","six","seven","eight","nine","ten","jack","queen","king","ace"]
    var suits = ["heart", "spade", "club", "diamond"];
    for (var i=0; i<suits.length; i++) {
        var suitDeck = buildSuit(suits[i],values);
        cardDeck = cardDeck.concat(suitDeck);        
    }
    deck = cardDeck;    
}

function buildSuit(suit, cardValues){
    var set = [];
    for (var i=0; i<cardValues.length; i++) {
        var card = buildCard(suit,cardValues[i]);
        set[i] = card;
    }
    return set;
}

function buildCard(suit, cardValue){
    var card = {
        "suit": suit,
        "cardValue": cardValue
    }
    return card;
}

function shuffleCards( cardDeck ){
    var copy = cardDeck.slice(0,cardDeck.length);
    var bucket = [];
    var newArray = [];
    var ranArray = [];
    for (var i=0; i<copy.length; i++){
        bucket.push(i);
    }

    while (bucket.length){       
        var ranNum = Math.floor(Math.random() * bucket.length);
        newArray.push(...bucket.splice(ranNum,1));
    }
    
    for (var x =0; x<copy.length; x++) {
        copy[x].ranNum = newArray[x];
    }

    for (var y=0; y<newArray.length; y++){
            ranArray[copy[y].ranNum] = cardDeck[y];
        
    }
    return ranArray;
}

function dealCards(num, cardDeck){
    var dealed = cardDeck.slice(0,num);
    console.log(dealed);
    
    for (var i = 0; i<dealed.length; i++) {
        $("<div>").addClass("card " + dealed[i].suit + " " + dealed[i].cardValue ).appendTo(".card-container");
    }
    
}
