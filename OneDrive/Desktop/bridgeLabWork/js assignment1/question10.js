function validateEligibility(age, isCitizen) {
    console.log(`Checking Profile: Age = ${age}, Citizen = ${isCitizen}`);

    if (isCitizen) {
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else if (age >= 18 && age <= 20) {
            console.log("Eligible to vote only.");
        } else {
            console.log("Not eligible yet.");
        }
    } else {
        if (age >= 18) {
            console.log("Only age criteria met.");
        } else {
            console.log("Not eligible yet.");
        }
    }
    console.log("--------------------------------------------------");
}

console.log("Test Case 1 (Citizen, Age 24):");
validateEligibility(24, true);

console.log("Test Case 2 (Citizen, Age 19):");
validateEligibility(19, true);

console.log("Test Case 3 (Non-Citizen, Age 25):");
validateEligibility(25, false);

console.log("Test Case 4 (Citizen, Age 16):");
validateEligibility(16, true);

console.log("Test Case 5 (Non-Citizen, Age 15):");
validateEligibility(15, false);
