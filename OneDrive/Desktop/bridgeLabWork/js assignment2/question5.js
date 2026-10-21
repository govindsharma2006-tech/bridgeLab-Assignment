// Q5: Boolean Logic Access System
// Validates smart home security states using boolean operators (&&, ||, !).

/**
 * Evaluates smart home conditions and grants access if:
 * 1. Alarm is on
 * 2. Door and window are closed
 * 3. Owner is inside
 *
 * @param {boolean} isDoorLocked - Whether front door is locked
 * @param {boolean} isWindowClosed - Whether windows are shut
 * @param {boolean} isAlarmOn - Whether alarm system is active
 * @param {boolean} isOwnerInside - Whether verified owner is inside
 * @param {string} scenarioTitle - Description of the test scenario
 */
function checkSmartHomeSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside, scenarioTitle) {
    // Boolean logic check
    const isPerimeterSecured = isDoorLocked && isWindowClosed;
    const isAccessGranted = isAlarmOn && isPerimeterSecured && isOwnerInside;

    console.log(`[Scenario: ${scenarioTitle}]`);
    console.log(`Door Locked: ${isDoorLocked} | Window Closed: ${isWindowClosed} | Alarm On: ${isAlarmOn} | Owner Inside: ${isOwnerInside}`);

    if (isAccessGranted) {
        console.log("Status: [ Secure ] - Access Granted.\n");
    } else {
        // Collect specific issues using ! and ||
        const alerts = [];
        if (!isAlarmOn) alerts.push("Alarm is OFF");
        if (!isDoorLocked || !isWindowClosed) alerts.push("Perimeter Breach (Door/Window open)");
        if (!isOwnerInside) alerts.push("Owner is NOT inside");

        console.log(`Status: [ Unsafe ] - Access Denied (${alerts.join("; ")})\n`);
    }

    return isAccessGranted;
}

console.log("=== Q5: Boolean Logic Access System ===\n");

// Testing multiple outcomes
checkSmartHomeSecurity(true, true, true, true, "Ideal State: Everything Secure");
checkSmartHomeSecurity(false, true, true, true, "Failure: Door Unlocked");
checkSmartHomeSecurity(true, false, true, true, "Failure: Window Left Open");
checkSmartHomeSecurity(true, true, false, true, "Failure: Alarm Disarmed");
checkSmartHomeSecurity(true, true, true, false, "Failure: Owner Not Inside");
checkSmartHomeSecurity(false, false, false, false, "Critical: All Systems Inactive");
