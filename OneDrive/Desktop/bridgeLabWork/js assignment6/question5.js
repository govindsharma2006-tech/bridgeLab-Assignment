console.log("=== Q5: Frontend Rush — Callback Hell vs Async/Await ===\n");

console.log("--- Callback Hell Version ---");

function design(callback) {
  setTimeout(() => { console.log("Stage 1: Design"); callback(); }, 1000);
}
function build(callback) {
  setTimeout(() => { console.log("Stage 2: Build"); callback(); }, 1000);
}
function test(callback) {
  setTimeout(() => { console.log("Stage 3: Test"); callback(); }, 1000);
}
function deploy(callback) {
  setTimeout(() => { console.log("Stage 4: Deploy"); callback(); }, 1000);
}
function celebrate(callback) {
  setTimeout(() => { console.log("Stage 5: Celebrate"); callback(); }, 1000);
}

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Pipeline complete (callback version)!");
          runAsyncVersion();
        });
      });
    });
  });
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAsyncVersion() {
  console.log("\n--- Async/Await Version ---");
  await delay(1000); console.log("Stage 1: Design");
  await delay(1000); console.log("Stage 2: Build");
  await delay(1000); console.log("Stage 3: Test");
  await delay(1000); console.log("Stage 4: Deploy");
  await delay(1000); console.log("Stage 5: Celebrate");
  console.log("Pipeline complete (async/await version)!");
  console.log("\nasync/await reads like synchronous code top-to-bottom,");
  console.log("eliminating deep nesting and making the flow easy to follow.");
}
