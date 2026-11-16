function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Profile failed to load") : resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Posts failed to load") : resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Messages failed to load") : resolve("Messages Loaded");
    }, 1000);
  });
}

console.log("=== Q7: Lazy Loader — Promise.allSettled ===");

const startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]).then((results) => {
  const totalTime = Date.now() - startTime;

  results.forEach((result, index) => {
    const module = ["Profile", "Posts", "Messages"][index];
    if (result.status === "fulfilled") {
      console.log(`✓ ${module}: ${result.value}`);
    } else {
      console.log(`✗ ${module}: ${result.reason}`);
    }
  });

  console.log(`Total time taken: ${totalTime}ms`);
});
