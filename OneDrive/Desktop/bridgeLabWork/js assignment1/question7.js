function evaluateGuess(userGuess, secret) {
    console.log(`Secret Number: ${secret} | User Guess: ${userGuess}`);

    if (userGuess === secret) {
        console.log("Outcome: Correct guess!");
    } else {
        const difference = userGuess - secret;

        if (difference >= -3 && difference <= 3) {
            console.log("Outcome: Very close!");
        } else {
            if (userGuess > secret) {
                console.log("Outcome: Too high");
            } else {
                console.log("Outcome: Too low");
            }
        }
    }
    console.log("--------------------------------------------------");
}

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;
console.log("=== Random Game Run ===");
evaluateGuess(userGuess, secretNumber);

console.log("=== Demonstration of All Possible Scenarios ===");
console.log("Scenario A (Equal):");
evaluateGuess(30, 30);

console.log("Scenario B (Close +2):");
evaluateGuess(32, 30);

console.log("Scenario C (Close -2):");
evaluateGuess(28, 30);

console.log("Scenario D (Too High):");
evaluateGuess(45, 30);

console.log("Scenario E (Too Low):");
evaluateGuess(10, 30);
