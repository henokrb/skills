/**
 * A simple script to check for common naming "smells" in a file.
 * Usage: node validate_naming.js <filepath>
 */
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path.");
  process.exit(1);
}

try {
  const content = fs.readFileSync(path.resolve(filePath), 'utf8');
  const singleLetterVars = content.match(/\b(let|const|var)\s+([a-zA-Z])\s*=/g);

  if (singleLetterVars) {
    console.warn("⚠️ Found single-letter variable declarations:");
    singleLetterVars.forEach(v => console.log(`  - ${v}`));
    console.log("\nSuggestion: Use more descriptive names (e.g., 'count' instead of 'c').");
  } else {
    console.log("✅ No obvious single-letter variables found.");
  }
} catch (err) {
  console.error("Error reading file:", err.message);
}
