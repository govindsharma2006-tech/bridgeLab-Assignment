function randomDelay() {
  return Math.floor(Math.random() * 1000) + 1000;
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.15 ? reject("takeOrder failed") : resolve("Order taken");
    }, randomDelay());
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.15 ? reject("prepare failed") : resolve("Food prepared");
    }, randomDelay());
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.15 ? reject("pack failed") : resolve("Package ready");
    }, randomDelay());
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.15 ? reject("dispatch failed") : resolve("Out for delivery");
    }, randomDelay());
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.15 ? reject("deliver failed") : resolve("Delivered");
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log("=== Q10: Async Delivery Pipeline ===");
  console.log("Start Pipeline");

  try {
    const step1 = await takeOrder();
    console.log("Step 1:", step1);

    const step2 = await prepare();
    console.log("Step 2:", step2);

    const step3 = await pack();
    console.log("Step 3:", step3);

    const step4 = await dispatch();
    console.log("Step 4:", step4);

    const step5 = await deliver();
    console.log("Step 5:", step5);

    console.log("Delivery completed!");
  } catch (error) {
    console.log("Pipeline failed!", error);
  }
}

runPipeline();
