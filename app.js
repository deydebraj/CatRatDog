let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const choices_div = document.querySelector(".choices");

const cat_div = document.getElementById("c");
const rat_div = document.getElementById("r");
const dog_div = document.getElementById("d");



function getComputerChoice(){
    const choices=['c','r','d'];
    const RandomNumber = Math.floor(Math.random()*3);
    return choices[RandomNumber];
}

function convert(letter){
    if(letter === "c") return "CAT";
    if(letter === "r") return "RAT";
    return "DOG";
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;             /* To display score on the index.html page */
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(userChoice) + " beats " + convert(computerChoice) + ". You Win! ";
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;             /* To display score on the index.html page */
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(userChoice) + " looses to " + convert(computerChoice) + ". You Lost! ";}

function draw(userChoice, computerChoice){
    
    result_p.innerHTML = convert(userChoice) + " draws " + convert(computerChoice) + ". Match Draw! ";
}



function game(userChoice){
    const computerChoice= getComputerChoice();
    
    switch(userChoice + computerChoice){
        case "cr":
        case "rd":
        case "dc":
            win(userChoice, computerChoice);
        break;
        
        case "rc":
        case "dr":
        case "cd":
            lose(userChoice, computerChoice);
            break;
        case "cc":
        case "rr":
        case "dd":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
        cat_div.addEventListener('click', function(){
            game("c");
        })


        rat_div.addEventListener('click', function(){
            game("r");
        })

        dog_div.addEventListener('click', function(){
            game("d");
        })
}
main();