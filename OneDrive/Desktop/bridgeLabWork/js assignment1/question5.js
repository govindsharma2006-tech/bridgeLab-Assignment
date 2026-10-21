function planWeatherActivity(temperature, isRaining, windSpeed) {
    console.log(`Weather Report: Temp = ${temperature}°C, Raining = ${isRaining}, Wind = ${windSpeed} km/h`);
    
    if (isRaining) {
        console.log("Activity: Stay indoors with hot coffee.");
    } else if (temperature > 35) {
        console.log("Activity: Go swimming.");
    } else if (temperature < 15 && windSpeed > 20) {
        console.log("Activity: Too cold and windy - stay home.");
    } else {
        console.log("Activity: Perfect day for a walk.");
    }
    console.log("--------------------------------------------------");
}

console.log("Scenario 1:");
planWeatherActivity(22, true, 10);

console.log("Scenario 2:");
planWeatherActivity(38, false, 8);

console.log("Scenario 3:");
planWeatherActivity(10, false, 25);

console.log("Scenario 4:");
planWeatherActivity(24, false, 12);
