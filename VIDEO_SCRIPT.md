# Video Script for Assignment 5 - Milestone #1 Demonstration

**Duration Target: 3.5-5 minutes**

---

## User Story 1

For my user story, **"As a fantasy football manager, I want to enter player names for both teams so that I can analyze a trade"**: 

*[Show the Trade Input screen with Manual Mode selected]*

Given the user is on the Trade Input screen, when they type player names into the input boxes, then the names are displayed and can be used for calculation.

*[Type "Patrick Mahomes" and "Justin Jefferson" in the Your Team Players box, then type "Josh Allen" and "Ja'Marr Chase" in the Trade Partner's Players box]*

As you can see, I've entered player names for both teams, and they're now displayed in the input boxes.

---

## User Story 2

For my user story, **"As a fantasy football manager, I want to see a fairness score so that I can determine if a trade is balanced"**:

*[Click the Calculate Trade button]*

Given the user has entered players for both teams, when they click Calculate Trade, then they see a fairness score showing which team is stronger.

*[Show the Results screen with the fairness score displayed]*

Here you can see the fairness score is displayed, showing "Your Team +3.5" and an explanation that my team is stronger based on the player values.

---

## User Story 3

For my user story, **"As a beginner user, I want to use Assisted Mode so that I can analyze trades without knowing exact player names"**:

*[Navigate back to Trade Input screen, click Assisted Mode button]*

Given the user selects Assisted Mode, when they click position cards, then they can select positions they're offering and seeking to analyze trades.

*[Click on "Quarterback" position card for "What position are you offering?", then click "Wide Receiver" for "What position are you looking for?"]*

As you can see, I've selected position cards instead of typing player names, and I can now calculate a trade using these selections.

*[Click Calculate Trade to show it works]*

---

## Inclusivity Heuristic #1

For **IH#1: Explain Benefits of Using Features**:

*[Point to the input boxes]*

Here, the input boxes include placeholder text that explains what to do: "Enter player names here (e.g., Patrick Mahomes, Justin Jefferson)". 

*[Hover over the Calculate Trade button]*

And when I hover over the Calculate Trade button, a tooltip appears explaining "Analyze player values to determine trade fairness and get recommendations". This helps users understand what each feature does without confusion.

---

## Inclusivity Heuristic #2

For **IH#2: Explain Costs of Using Features**:

*[Hover over the Reset button]*

When I hover over the Reset button, a yellow warning tooltip appears: "⚠️ Warning: This will erase all text boxes and won't save your data". 

*[Click the Reset button]*

When I click the Reset button, a confirmation modal appears that says "You will lose all the time you spent entering player names. Are you sure you want to continue?" This clearly communicates the time cost of losing their work before they click.

---

## Inclusivity Heuristic #3

For **IH#3: Let Users Gather Information They Want**:

*[Navigate to Help screen]*

Here on the Help screen, users see a list of FAQ questions that are all collapsed.

*[Click on "How is the fairness score calculated?"]*

When I click on a question, it expands to show the answer, and the previous question collapses.

*[Click on another question]*

Users can choose which questions to read without being overwhelmed by all the help text at once.

---

## Inclusivity Heuristic #4

For **IH#4: Keep Familiar Features Available**:

*[Show the input screen]*

Here, you can see consistent football helmet icons in the input boxes, which maintains visual consistency throughout the app.

*[Point to buttons]*

The app uses familiar button colors - blue for primary actions like Calculate and Analyze New Trade, and red for the destructive Reset action. These color patterns are familiar from other applications, making the interface immediately understandable.

---

## Inclusivity Heuristic #5

For **IH#5: Make Undo/Redo Available**:

*[Show the Results screen]*

As I'm demonstrating, after viewing results, users can click "Analyze New Trade" to go back to the input screen.

*[Click "Analyze New Trade"]*

Now I'm back on the input screen, and my previous data is still there. I can modify the inputs and recalculate without losing my work, making it easy to try different trade scenarios.

---

## Inclusivity Heuristic #6

For **IH#6: Provide Explicit Path Through Task**:

*[Show the input screen layout]*

The layout guides users through a clear sequence: first, enter your team players, then enter trade partner's players, and finally click Calculate. 

*[Point to each section as you describe]*

This simple flow makes it obvious what to do next - there's no confusion about the order of steps.

---

## Inclusivity Heuristic #7

For **IH#7: Provide Ways to Try Out Different Approaches**:

*[Show Manual Mode]*

Users can choose between Manual Mode, where they type player names directly.

*[Switch to Assisted Mode]*

Or Assisted Mode, where they click position cards to select positions.

*[Press Enter key]*

Additionally, users can press the Enter key to calculate a trade, or they can click the Calculate Trade button. This gives users different ways to accomplish the same task based on their preferences and skill level.

---

## Inclusivity Heuristic #8

For **IH#8: Encourage Mindful Tinkering**:

*[Enter some player names, then click Reset]*

When the user clicks the Reset button, a confirmation modal appears with a warning: "You will lose all the time you spent entering player names. Are you sure you want to continue?"

*[Show the modal]*

This requires users to explicitly click "Yes, Clear All" to confirm, helping users who click quickly to slow down and think about their actions before making a destructive change.

---

## Quality Attribute 1: Usability

For my **"usability" quality attribute**: The non-functional requirement is: "Each Inclusivity Heuristic is reflected." I already demonstrated all 8 heuristics in the previous sections.

---

## Quality Attribute 2: Maintainability

For my **"maintainability" quality attribute**: The non-functional requirement is: "Code is organized with clear separation of concerns." 

*[If showing code, navigate to file structure]*

The code is organized into separate files: HTML for structure, CSS for styling, and JavaScript for functionality. Each function is focused and under 50 lines, making the code easy to maintain and modify.

---

## Quality Attribute 3: Responsiveness

For my **"responsiveness" quality attribute**: The non-functional requirement is: "The interface adapts to different screen sizes and loads quickly."

*[Resize the browser window or show on mobile view]*

As you can see, the interface adapts to different screen sizes. The layout uses flexible grids and responsive design. Since this is a static web application, it loads instantly without any server delays.

---

## GitHub Release

Here is my GitHub release for Milestone #1.

*[Navigate to GitHub and show the release page]*

This release contains version 1.0.0 of the Fantasy Football Trade Analyzer, with all the features we just demonstrated.

---

**End of Script**

---

## Tips for Recording:

1. **Pace yourself**: Speak clearly and demonstrate each feature as you describe it
2. **Stay organized**: Follow the script order to match the rubric
3. **Show, don't just tell**: Actually interact with the UI while explaining
4. **Keep it concise**: Focus on the requirements, add extra info at the end if time allows
5. **Test first**: Make sure all features work before recording
6. **Time check**: Aim for 3.5-5 minutes total
