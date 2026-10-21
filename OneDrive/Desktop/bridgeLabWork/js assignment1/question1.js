const userName = "Govind";
const currentHour = new Date().getHours();

let greetingMessage = "";

if (currentHour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    greetingMessage = `Good Evening ${userName}!`;
}

console.log(`Current Hour: ${currentHour}`);
console.log(greetingMessage);
