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
    //QUESTION FROM NICOLE TO AN INSTRUCTOR
    //I have tried to make a copy of the cardDeck array. However, when I add the "ranNum" key-value pair to the "copy" array, it also adds "ranNum" to cardDeck
    //When I googled this, it mentioned that this had to do with pass-by and reference variables
    //How would I make a pass-by copy of the cardDeck array?
    
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

    //I would hope that because I did not mess with "cardDeck" in this function, this would only give me a cardValue and a suit
    //However, this gives me a "ranNum" as well
    for (var y=0; y<newArray.length; y++){
            ranArray[copy[y].ranNum] = cardDeck[y];
        
    }
    return ranArray;
}

function dealCards(num, cardDeck){
    var total = "";
    var dealed = cardDeck.slice(0,num);
    console.log(dealed);
    
    for (var i = 0; i<dealed.length; i++) {
        var strCall = "<div class=\"card " + dealed[i].suit + " " + dealed[i].cardValue + "\"></div>";
        $(".card-container").append(strCall);
    }
    
}
