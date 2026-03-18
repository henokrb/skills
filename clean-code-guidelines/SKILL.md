---
name: clean-code-guidelines
description: A comprehensive guide and set of instructions for writing clean, maintainable, and scalable code, based on the Clean Code Handbook principles.
license: MIT
metadata:
  author: Henok R. Bedassa (heny.dev)
  version: 1..0  
  tags: clean-code
  platforms: Claude, ChatGPT, Gemini
---

---

# Clean Code Guidelines

This skill provides a comprehensive set of principles and practices to ensure codebase health, readability, and long-term maintainability. It integrates foundational concepts from Robert C. Martin's "Clean Code" with modern AI-assisted coding standards. Follow these guidelines whenever you are writing or refactoring code.

## 🧠 Core Philosophy
"Code is clean if it can be read, and enhanced by a developer other than its original author." — Grady Booch
"Clean code always looks like it was written by someone who cares." — Michael Feathers


## ⚖️ 12 Clean Code Design Patterns

### 1. 🌿 Meaningful Names

- **Rule**: Use intention-revealing, searchable, and pronounceable names.
- **Good**: `elapsedTimeInDays`, `userCount`, `isActive`.
- **Bad**: `d`, `list`, `var1`.
- **Class Names**: Use nouns or noun phrases (e.g., `Customer`, `Account`). Avoid `Manager`, `Processor`, `Data`.
- **Method Names**: Use verbs or verb phrases (e.g., `postPayment`, `isEligible`).
- **Avoid Disinformation**: Don't name something `accountList` if it's actually a `Map`.
- **No Mental Mapping**: Don't force the reader to translate names (e.g., `i`, `j`, `k` are only for small loops).


### 2. 🔨 Single Responsibility Principle (SRP)

- **Rule**: A function or class should do **one thing** and do it perfectly.
- **Tip**: If a function name contains "And" (e.g., `calculateAndLog`), it's doing too much. Break it up.
- **One Level of Abstraction**: Don't mix high-level business logic with low-level details (like regex or DOM manipulation) in the same function.
- **Arguments**: 0 is ideal, 1-2 is okay, 3+ requires a very strong justification.
- **No Side Effects**: A function shouldn't secretly change global state or hidden variables.


### 3. 🚪 Thoughtful Commenting

- **Rule**: Explain the **"Why"** (intent), not the "What" (the code should say "What").
- **Tip**: "Don't comment bad code—rewrite it." Most comments are a sign of failure to express ourselves in code.
- **Legal/Informative**: Use comments for legal requirements or to explain non-obvious business logic.


### 4. 🧩 Readability First

- **Rule**: Code should read like a story.
- **Tip**: Use consistent indentation and meaningful whitespace to give logic "room to breathe".

### 5. 🏌️ Test Everything

- **Rule**: Clean tests are as important as clean production code.
- **Three Laws of TDD**:
  1. Don't write production code until you have a failing unit test.
  2. Don't write more of a unit test than is sufficient to fail.
  3. Don't write more production code than is sufficient to pass the failing test.
- **F.I.R.S.T. Principles**: Fast, Independent, Repeatable, Self-Validating, Timely.


### 6. 💉 Dependency Injection

- **Rule**: Pass dependencies as arguments rather than hardcoding them inside functions/classes.
- **Benefit**: Makes code flexible, adaptable, and significantly easier to test.

### 7. 📂 Clean Project Structure

Maintain a clear separation between production and test code.

- `src/components`: UI components.
- `src/services`: Business logic and external integrations.
- `src/utils`: Handy, reusable tools.
- `tests/`: Mirror the `src` structure for test files.

### 8. 🤹‍♂️ Consistent Formatting

- **Rule**: Pick a style and stick to it across the entire project.
- **The Newspaper Metaphor**: High-level concepts at the top, details at the bottom.
- **Vertical Density**: Related lines should be close to each other; unrelated lines should be separated by whitespace.
- **Tools**: Use Prettier and ESLint (or equivalent) to automate this.


### 9. ✋ Stop Hardcoding

- **Rule**: Store fixed values in constants or configuration files.
- **Good**: `const MAX_LOGIN_ATTEMPTS = 5;`

### 10. 🤏 Keep Functions Short

- **Rule**: Aim for functions shorter than 20 lines.
- **Action**: If it's longer, refactor helper functions out of the main logic.

### 11. ⛺ The Boy Scout Rule

- **Rule**: Always leave the code better than you found it.
- **Action**: If you see a messy variable name or a bloated function while working on a feature, fix it.

### 12. 🏟️ Open/Closed Principle

- **Rule**: Code should be open for extension but closed for modification.
- **Tip**: Use polymorphism (classes/interfaces) to add new features without ripping apart existing foundations.

---

## 🏛️ Advanced Architectures & Flow

- **Guard Clauses / Early Returns**: Use them to avoid deep nesting (the "Arrow Anti-pattern"). Validate inputs early and `return` or `throw` immediately.
- **Objects vs. Data Structures**: 
  - **Objects**: Hide data behind abstractions and expose functions that operate on that data.
  - **Data Structures**: Expose data and have no meaningful functions.
- **Law of Demeter**: A module should not know about the innards of the objects it manipulates. Avoid long chains like `user.getAccount().getDetails().getBalance()`.
- **Avoid If/Else Hell**: Use polymorphism or the Strategy pattern to handle complex conditional logic.

---

## 🔴 Pragmatic AI Coding Standards

Before completing a task, ensure you have followed these "Thinking Steps":

1.  **Look Before You Leap**: Before editing a file, identify who imports it and if their signatures need updating.
2.  **Edit in Bundles**: Never leave broken imports. Update the main file and all dependent files in the same task.
3.  **Self-Check Checklist**:
    - Is the function smaller than 20 lines?
    - Is there any code duplication (DRY)?
    - Are there any magic numbers that should be constants?
    - Is there a failing test for this change?
4.  **Verification Scripts**: Always run available linting or test scripts and **summarize** the output (Errors, Warnings, Passes) for the user before declaring victory.

---

## 🔎 Common Code Smells & Fixes

| Smell                      | Fix                                                         |
| :------------------------- | :---------------------------------------------------------- |
| **Duplication (DRY)**      | Extract repeated logic into a shared function or component. |
| **Long Methods**           | Use "Extract Method" to break it into smaller pieces.       |
| **King Objects**           | Split massive classes into smaller, specialized ones.       |
| **Algebraic Conditionals** | Simplify: `if (isValid === true)` becomes `if (isValid)`.   |
| **Magic Numbers**          | Replace literal values with named constants.                |
| **Deep Nesting**           | Use Guard Clauses and Early Returns.                        |

---

## 🧪 Testing & Error Handling

- **Fail Fast**: Validate inputs early and throw exceptions immediately.
- **Prefer Exceptions**: Use exceptions instead of returning error codes (`-1`, `null`, `false`).
- **Don't Return Null**: Return empty collections or specific "Missing" objects instead.
- **Log Precisely**: Log enough to reconstruct a "crime scene," but avoid cluttering.

---

## 🚀 How to Apply This Skill

1.  **Refactoring**: Use the "Extract Method" and "Rename Variable" patterns frequently.
2.  **Code Reviews**: Use this guide as a checklist when reviewing your own or others' PRs.
3.  **Project Setup**: Always start with a clean folder structure and automated linting.
4.  **The Stepdown Rule**: Organize code so it reads like a top-down narrative.

