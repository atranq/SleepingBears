const fs = require("fs");

const staticData = {
    message: "Bears are sleeping peacefully in the forest!"
};

// Write to a JSON file
fs.writeFileSync("generatedContent.json", JSON.stringify(staticData, null, 2));

console.log("Static content generated: generatedContent.json");