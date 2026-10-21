// Q7: Customer Feedback Processor
// Evaluates customer comments for word count and sentiment detection using includes() and split().

/**
 * Analyzes customer review text and prints positivity rating and word count.
 * @param {string} feedbackText - The feedback string to analyze
 */
function processFeedback(feedbackText) {
    // Normalizing text for case-insensitive search
    const lowerFeedback = feedbackText.toLowerCase();

    // Word count calculation using split
    const words = feedbackText.trim().split(/\s+/);
    const wordCount = words.length;

    // Check if feedback includes "bad" or "poor"
    const containsBad = lowerFeedback.includes("bad");
    const containsPoor = lowerFeedback.includes("poor");
    const hasNegativeWords = containsBad || containsPoor;

    console.log(`Feedback Text : "${feedbackText}"`);
    console.log(`Word Count    : ${wordCount}`);

    // Conditional evaluation
    if (!hasNegativeWords) {
        console.log("Verdict       : Positive Feedback");
    } else {
        console.log("Verdict       : Needs Improvement");
    }
    console.log("------------------------------------------------------------------");
}

console.log("=== Q7: Customer Feedback Processor ===\n");

// Test Case 1: Positive feedback from requirements
const feedback1 = "Great product! Fast delivery and amazing sound quality!";
processFeedback(feedback1);

// Test Case 2: Feedback containing "poor"
const feedback2 = "The packaging was poor but the product arrived safely.";
processFeedback(feedback2);

// Test Case 3: Feedback containing "bad"
const feedback3 = "Very bad experience with customer care response time.";
processFeedback(feedback3);
