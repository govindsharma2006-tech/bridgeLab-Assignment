function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

function getBugs() {
  const shouldFail = Math.random() < 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("API Error: Failed to fetch bugs");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

console.log("=== Q3: Bug Tracker — Callback to Promise ===");

getBugs()
  .then((bugs) => {
    console.log("Bugs fetched successfully:");
    console.table(bugs);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
