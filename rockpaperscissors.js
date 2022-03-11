var pics = document.getElementsByClassName("pics");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var computersChoice = document.getElementsByClassName("random");
var randoms = Array.from(computersChoice);
var picsContainer = document.getElementById("computersPics");
var youWin = document.getElementById("youWin");
var computerWins = document.getElementById("computerWins");
var tie = document.getElementById("tie");
var playerScore = document.getElementById("playerScore");
var computerScore = document.getElementById("computerScore");
var computerScoreCount = 0;
var playerScoreCount = 0;

playerScore.innerHTML = +sessionStorage.getItem("playerCounter");
computerScore.innerHTML = +sessionStorage.getItem("computerCounter");

for (i = 0; i < pics.length; i++){
    pics[i].addEventListener("click", startGame);
}; 

function startGame(){
    picChosen = this;
    if (picChosen == rock){
        paper.style.display = "none";
        scissors.style.display = "none";
    } else if (picChosen == paper) {
        rock.style.display = "none";
        scissors.style.display = "none";
    } else {
        rock.style.display = "none";
        paper.style.display = "none";
    };
    var counter = 0;
    var interval = setInterval(function(){
    picsContainer.innerHTML = "";
    picsContainer.appendChild(randoms[Math.floor(Math.random() * randoms.length)]); 
    if (++counter === 10) {
       clearInterval(interval);
       setTimeout(checkWinner, 1100);
   };
}, 100);
};

function checkWinner(){
    if (picChosen.src.includes("rock.jpg") && 
    picsContainer.children[0].src.includes("scissors.jpg")){
        youWin.classList.add("winner");
        playerScoreCount = +sessionStorage.getItem("playerCounter") + 1;
        playerScore.innerHTML = playerScoreCount;
        computerScoreCount = +sessionStorage.getItem("computerCounter");
        computerScore.innerHTML = computerScoreCount;
    } else if (picChosen.src.includes("paper.jpg") && 
    picsContainer.children[0].src.includes("rock.jpg")){
        youWin.classList.add("winner");
        playerScoreCount = +sessionStorage.getItem("playerCounter") + 1;
        playerScore.innerHTML = playerScoreCount;
        computerScoreCount = +sessionStorage.getItem("computerCounter");
        computerScore.innerHTML = computerScoreCount;
    } else if (picChosen.src.includes("scissors.jpg") && 
    picsContainer.children[0].src.includes("paper.jpg")){
        youWin.classList.add("winner");
        playerScoreCount = +sessionStorage.getItem("playerCounter") + 1;
        playerScore.innerHTML = playerScoreCount;
        computerScoreCount = +sessionStorage.getItem("computerCounter");
        computerScore.innerHTML = computerScoreCount;
    } else if (picChosen.src.includes("scissors.jpg") && 
    picsContainer.children[0].src.includes("rock.jpg")){
        computerWins.classList.add("winner");
        computerScoreCount = +sessionStorage.getItem("computerCounter") + 1;
        computerScore.innerHTML = computerScoreCount;
        playerScoreCount = +sessionStorage.getItem("playerCounter");
        playerScore.innerHTML = playerScoreCount;
    } else if (picChosen.src.includes("rock.jpg") && 
    picsContainer.children[0].src.includes("paper.jpg")){
        computerWins.classList.add("winner");
        computerScoreCount = +sessionStorage.getItem("computerCounter") + 1;
        computerScore.innerHTML = computerScoreCount;
        playerScoreCount = +sessionStorage.getItem("playerCounter");
        playerScore.innerHTML = playerScoreCount;
    } else if (picChosen.src.includes("paper.jpg") && 
    picsContainer.children[0].src.includes("scissors.jpg")){
        computerWins.classList.add("winner");
        computerScoreCount = +sessionStorage.getItem("computerCounter") + 1;
        computerScore.innerHTML = computerScoreCount;
        playerScoreCount = +sessionStorage.getItem("playerCounter");
        playerScore.innerHTML = playerScoreCount;
    } else if (picChosen.src == picsContainer.children[0].src){
        tie.classList.add("winner");
        computerScoreCount = +sessionStorage.getItem("computerCounter");
        playerScoreCount = +sessionStorage.getItem("playerCounter");
    }; 
    sessionStorage.setItem("playerCounter", JSON.stringify(playerScoreCount));
    sessionStorage.setItem("computerCounter", JSON.stringify(computerScoreCount)); 
};

