const cards = [
    ['Spade', 'A'],
    ['Diamond', 'J'],
    ['Club', '3'],
    ['Heart', '6'],
    ['Spade', 'K'],
    ['Club', '2'],
    ['Heart', 'Q'],
    ['Spade', '6'],
    ['Heart', 'J'],
    ['Spade', '10'],
    ['Club', '4'],
    ['Diamond', 'Q'],
    ['Diamond', '3'],
    ['Heart', '4'],
    ['Club', '7']
];
function compareCard(cardA, cardB) {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = ["Diamond", "Club", "Heart", "Spade"];
    const [suitA, rankA] = cardA;
    const [suitB, rankB] = cardB;
    const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);
    if (ranksDiff !== 0) {
        return ranksDiff;
    } else {
        return suits.indexOf(suitA) - suits.indexOf(suitB);
    }
}
function countSpade(input){
    let spade = cards.reduce((acc,cur)=>{
        if(cur[0] == "Spade"){
            acc+=1;
        }
        return acc
    },0)
    return spade
}
    
function rmUnderC3(input){
    let ans =input.filter(element=>compareCard(["Club","3"],element)<=0);
    return ans;
}

function clubToDiamond(input){
    input.map(element=>{
        if(element[0] == "Club"){
            element[0] = "Diamond"
        }
    })
    return input
}

function aTo2(input){
    input.map(element=>{
        if(element[1] == "A"){
            element[1] = "2";
        }
    })
    return input
}

function DHHigherJ(input){
    let counter =0;
    input.map(element=>{
        if(compareCard(element,["Diamond","J"])>=0 && element[0]== "Diamond"){
            counter++
        }else if(compareCard(element,["Diamond","J"])>=0 && element[0]== "Heart"){
            counter++
        }
    })
    return counter
}
console.log(countSpade(cards))
console.log(rmUnderC3(cards))
console.log(DHHigherJ(cards))
console.log(clubToDiamond(cards))
console.log(aTo2(cards))

