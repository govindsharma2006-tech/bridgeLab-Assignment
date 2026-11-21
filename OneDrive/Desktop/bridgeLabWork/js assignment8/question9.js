// Q9: Fitness App Analytics (Classes + Array Methods + Error Handling)

class FitnessAnalytics {
  constructor(dataset) {
    if (!dataset || dataset.length === 0) {
      throw new Error("Dataset is empty. Cannot perform analytics.");
    }
    this.dataset = dataset;
  }

  // filter() — users with steps > 7000
  getActiveUsers() {
    return this.dataset.filter(entry => entry.steps > 7000);
  }

  // reduce() — average calories across all users
  getAverageCalories() {
    const totalCalories = this.dataset.reduce((sum, entry) => sum + entry.calories, 0);
    return (totalCalories / this.dataset.length).toFixed(2);
  }

  // map() — format each entry as a readable summary string
  getUserSummary() {
    return this.dataset.map(entry => {
      const status = entry.steps > 7000 ? "🏃 Active" : "🛑 Inactive";
      return `User ${entry.user}: ${entry.steps} steps, ${entry.calories} kcal [${status}]`;
    });
  }
}

console.log("=== Q9: Fitness App Analytics ===\n");

const workoutData = [
  { user: "A", steps: 8000,  calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000,  calories: 200 },
];

try {
  const analytics = new FitnessAnalytics(workoutData);

  console.log("--- Active Users (steps > 7000) ---");
  analytics.getActiveUsers().forEach(u => console.log(`  User ${u.user}: ${u.steps} steps`));

  console.log("\n--- Average Calories ---");
  console.log(`  ${analytics.getAverageCalories()} kcal`);

  console.log("\n--- User Summaries ---");
  analytics.getUserSummary().forEach(msg => console.log(" ", msg));
} catch (err) {
  console.log("Error:", err.message);
}

console.log("\n--- Empty Dataset Error Handling ---");
try {
  const emptyAnalytics = new FitnessAnalytics([]);
} catch (err) {
  console.log("Caught:", err.message);
}
