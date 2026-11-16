function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Boiler malfunction!");
      } else {
        console.log("Step 1: Water boiled.");
        resolve();
      }
    }, 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Brewing failed!");
      } else {
        console.log("Step 2: Coffee brewed.");
        resolve();
      }
    }, 1500);
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Pouring failed!");
      } else {
        console.log("Step 3: Poured into cup.");
        resolve();
      }
    }, 1000);
  });
}

console.log("=== Q1: Async Coffee Maker ===");

boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log("Coffee process failed:", error));
