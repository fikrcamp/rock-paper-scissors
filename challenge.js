function game(player1,player2){
    if(player1=="rock" && player2=="paper"){
        return`in this round player2 wins`
    }else if(player1=="scissors" && player2 =="scissors"){
        return`tie`
    }else{
        return`you should follow the rules`
    }
}
round_one = game("rock","paper")
console.log(round_one)
round_two = game("scissors","scissors")
console.log(round_two)
round_three = game("rock","scissor")
console.log(round_three)

















//playGame("rock", "paper"); // should return "player2 wins"
//playGame("scissors", "scissors"); // should return "tie"