const userName = "Govind Sharma";
const userAge = 21;
const isEnrolled = true;
const courseSkills = ["HTML", "CSS", "JS"];
const userProfile = { role: "Student" };
const graduationYear = null;
let pendingCertificate;

function detectExactType(val) {
    if (val === null) {
        return "null";
    }
    if (Array.isArray(val)) {
        return "array";
    }
    return typeof val;
}

const dataSummaryReport = [
    {
        Label: "User Name",
        Value: userName,
        Type: detectExactType(userName)
    },
    {
        Label: "User Age",
        Value: userAge,
        Type: detectExactType(userAge)
    },
    {
        Label: "Is Enrolled",
        Value: isEnrolled,
        Type: detectExactType(isEnrolled)
    },
    {
        Label: "Course Skills",
        Value: JSON.stringify(courseSkills),
        Type: detectExactType(courseSkills)
    },
    {
        Label: "User Profile",
        Value: JSON.stringify(userProfile),
        Type: detectExactType(userProfile)
    },
    {
        Label: "Graduation Year",
        Value: String(graduationYear),
        Type: detectExactType(graduationYear)
    },
    {
        Label: "Pending Certificate",
        Value: String(pendingCertificate),
        Type: detectExactType(pendingCertificate)
    }
];

console.log("=== Multi-Type Data Summary Report ===");
console.table(dataSummaryReport);
