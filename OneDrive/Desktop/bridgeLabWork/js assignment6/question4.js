function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Server A deployment failed");
      } else {
        resolve("Server A: Deployment done");
      }
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Server B deployment failed");
      } else {
        resolve("Server B: Deployment done");
      }
    }, 3000);
  });
}

console.log("=== Q4: DevOps Delay — Async Timeout Race ===");

Promise.race([serverA(), serverB()])
  .then((result) => console.log("Fastest response:", result))
  .catch((error) => console.log("Race failed:", error));

Promise.all([serverA(), serverB()])
  .then(([resultA, resultB]) => {
    console.log(resultA);
    console.log(resultB);
    console.log("Deployment completed for all servers");
  })
  .catch((error) => console.log("Deployment failed:", error));
