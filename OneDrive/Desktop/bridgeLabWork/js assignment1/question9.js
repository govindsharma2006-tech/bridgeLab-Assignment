function generateMathQuiz(simulatedUserAnswer) {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;

    const operators = ['+', '-', '*', '/'];
    const randomOperatorIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[randomOperatorIndex];

    let calculatedAnswer;
    switch (operator) {
        case '+':
            calculatedAnswer = num1 + num2;
            break;
        case '-':
            calculatedAnswer = num1 - num2;
            break;
        case '*':
            calculatedAnswer = num1 * num2;
            break;
        case '/':
            calculatedAnswer = parseFloat((num1 / num2).toFixed(2));
            break;
        default:
            console.error("Invalid operator generated!");
            return;
    }

    console.log(`Quiz Question  : What is ${num1} ${operator} ${num2}?`);
    console.log(`Correct Answer : ${calculatedAnswer}`);

    if (simulatedUserAnswer !== undefined) {
        console.log(`User Answer    : ${simulatedUserAnswer}`);
        if (Number(simulatedUserAnswer) === calculatedAnswer) {
            console.log("Evaluation     : Correct! Excellent work.");
        } else {
            console.log("Evaluation     : Incorrect. Keep practicing!");
        }
    }
    console.log("--------------------------------------------------");
}

console.log("=== Random Arithmetic Quiz Generator ===");
for (let i = 1; i <= 4; i++) {
    console.log(`Question #${i}:`);
    generateMathQuiz();
}

console.log("=== Demonstration with User Evaluation ====");
generateMathQuiz(15);
