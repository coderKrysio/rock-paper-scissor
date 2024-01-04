const actions = ["rock", "paper", "scissor"];

export const chooseComputerChoice = actions[Math.floor(Math.random() * 3)];

export function gameLogic({
    computerChoice,
    playerChoice,
}: {
    computerChoice: string;
    playerChoice: string;
}) {
    var matchStatus = "";
    if (computerChoice === playerChoice) {
        matchStatus = "!! Draw !!";
    } else if (
        (computerChoice === actions[0] && playerChoice === actions[1]) ||
        (computerChoice === actions[1] && playerChoice === actions[2]) ||
        (playerChoice === actions[0] && computerChoice === actions[2])
    ) {
        matchStatus = "<< Player Wins >>";
    } else if (
        (computerChoice === actions[0] && playerChoice === actions[2]) ||
        (playerChoice === actions[0] && computerChoice === actions[1]) ||
        (computerChoice === actions[2] && playerChoice === actions[1])
    ) {
        matchStatus = ">> Computer Wins <<";
    }
    return matchStatus;
}
