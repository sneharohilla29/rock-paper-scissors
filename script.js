const r = document.querySelector(".R");
const p = document.querySelector(".P");
const s = document.querySelector(".S");
const rslt2 = document.querySelector(".result2");
const rslt = document.querySelector(".result");
const player = document.querySelector(".player");
const mycomp = document.querySelector(".mycomp");
let myChoice;
let compChoice;
let result;
let myScore = 0;
let comScore = 0;

r.addEventListener("click", () => {
    myChoice = "ROCK";
    let randomNo = Math.random();
    getComputerChoice(randomNo);
    result = getResult(myChoice, compChoice);

    rslt2.innerHTML = result;
    player.innerHTML = plyer();
    mycomp.innerHTML = comp();


});
p.addEventListener("click", () => {
    myChoice = "PAPER";
    let randomNo = Math.random();
    getComputerChoice(randomNo);
    result = getResult(myChoice, compChoice);

    rslt2.innerHTML = result;
    player.innerHTML = plyer();
    mycomp.innerHTML = comp();
});
s.addEventListener("click", () => {
    myChoice = "SCISSORS";
    let randomNo = Math.random();
    getComputerChoice(randomNo);
    result = getResult(myChoice, compChoice);

    rslt2.innerHTML = result;
    player.innerHTML = plyer();
    mycomp.innerHTML = comp();

});

function getComputerChoice(x) {
    if (x <= 0.33) {
        compChoice = "ROCK";
    } else if (x > 0.33 && x <= 0.66) {
        compChoice = "PAPER";
    } else {
        compChoice = "SCISSORS";
    }
}

function getResult(my, com) {
    if (my == com) {
        return `<span>IT'S  A  TIE</span> <br> <span> TRY &nbsp; AGAIN! </span>`;
    } else if (
        (my == "ROCK" && com == "SCISSOR") ||
        (my == "PAPER" && com == "ROCK") ||
        (my == "SCISSOR" && com == "PAPER")
    ) {
        myScore++;
        return `<span> YOU  WON! </span><br><span>${my}&nbsp;  BEATS &nbsp; ${com}</span>`;
    } else {
        comScore++;
        return `<span> YOU  LOST! </span> <br> <span>${com}&nbsp;  BEATS &nbsp; ${my}</span>`;
    }
}

function plyer() {
    return `<h2>MY SCORE:</h2><p>${myScore}</p>`;

}
function comp() {
    return `<h2>COMPUTER SCORE:</h2><p>${comScore}</p>`;

}
