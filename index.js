// Code your solutions in this file


function writeCards(myOnlyFriends, eventsMyMomIgnoresMeFor) {
    const bigUps = [];
    for (let i = 0; i < myOnlyFriends.length; i++) {
        bigUps.push(`Thank you, ${myOnlyFriends[i]}, for the wonderful ${eventsMyMomIgnoresMeFor} gift!`)
    }

    return bigUps;    
}


// console.log(writeCards(["Joey","Adam", "Simon"], "Christmas"));



function countDown(number) {
    while (number > -1) {
        console.log(number);
        number--;
        }
}











































// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }





// const gifts = ["teddy bear",'drone','doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

// // return(gifts);  -- why do we return gifts here?
// }

// wrapGifts(gifts);