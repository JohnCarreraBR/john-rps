function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    //console.log(choice)

    if (choice == 0) {
        console.log("My choice is Paper!")
    }
    else if (choice == 1) {
        console.log("This time i'll go with Rock!")
    }
    else {
        console.log("Bold move, however, Scissors!")
    }

    return choice
}

function getHumanChoice() {
    while (true) {
        let humanchoice = prompt()
        humanchoice = humanchoice.toLowerCase()
        console.log("You picked... " + humanchoice)

        switch (humanchoice) {
            case "paper":
                return 0
            case "rock":
                return 1
            case "scissors":
                return 2
            default:
                console.log("I'm sorry Dave, I'm afraid that is not how you play RPS")
                break
        }
    }
}

function playRound() {
    let hchoice = getHumanChoice()
    //console.log(hchoice)
    let cchoice = getComputerChoice()
    //console.log(cchoice)

    if (hchoice == cchoice) {
        console.log("That's a tie!")
        return
    }

    switch (hchoice) {
        case 0:
            if (cchoice == 1) {
                console.log("You won this time....")
                humanScore++
            }
            else {
                console.log("You absolute fool. You've lost.")
                computerScore++
            }
            break
        case 1:
            if (cchoice == 2) {
                console.log("You won this time....")
                humanScore++
            }
            else {
                console.log("You absolute fool. You've lost.")
                computerScore++
            }
            break
        case 2:
            if (cchoice == 0) {
                console.log("You won this time....")
                humanScore++
            }
            else {
                console.log("You absolute fool. You've lost.")
                computerScore++
            }
            break
    }
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound()
        console.log("The score is " + humanScore + " to " + computerScore)
    }
}

let humanScore = 0
let computerScore = 0

playGame(5)