# CS361 Fantasy Football Trade Tool

A comprehensive tool for analyzing fantasy football trades and providing data-driven insights to help you make better trading decisions.

## Features

- **Manual Mode**: Direct text input for entering player names
- **Assisted Mode**: Guided position-based selection for beginners
- **Trade Analysis**: Calculate fairness scores comparing team values
- **Interactive Results**: Clear visualization of which team is stronger
- **FAQ Help System**: Expandable questions and answers
- **Accessibility Features**: Keyboard navigation, screen reader support, and clear warnings

## Getting Started

1. Open `index.html` in a web browser
2. Choose between Manual Mode or Assisted Mode
3. Enter player information for both teams
4. Click "Calculate Trade" to see the analysis
5. View results and use FAQ for help

## User Stories

1. **As a fantasy football manager, I want to enter player names for both teams so that I can analyze a trade.**
   - Given the user is on the Trade Input screen, when they type player names into the input boxes, then the names are displayed and can be used for calculation.

2. **As a fantasy football manager, I want to see a fairness score so that I can determine if a trade is balanced.**
   - Given the user has entered players for both teams, when they click Calculate Trade, then they see a fairness score showing which team is stronger.

3. **As a beginner user, I want to use Assisted Mode so that I can analyze trades without knowing exact player names.**
   - Given the user selects Assisted Mode, when they click position cards, then they can select positions they're offering and seeking to analyze trades.

## Inclusivity Heuristics

All 8 Inclusivity Heuristics are implemented:
- **IH#1**: Tooltips and placeholder text explain feature benefits
- **IH#2**: Hover warning on Reset button explains costs
- **IH#3**: FAQ system allows users to see only information they want
- **IH#4**: Consistent icons and familiar button styles
- **IH#5**: Back buttons and "Analyze New Trade" allow backtracking
- **IH#6**: Clear step-by-step flow: Input → Calculate → Results
- **IH#7**: Multiple approaches (Manual/Assisted modes, keyboard shortcuts)
- **IH#8**: Confirmation modal for destructive actions

## Quality Attributes

1. **Usability**: All Inclusivity Heuristics are reflected
2. **Maintainability**: Code is organized with clear separation of concerns
3. **Responsiveness**: Interface adapts to different screen sizes

## Files

- `index.html` - Main application file
- `styles.css` - Styling and layout
- `app.js` - JavaScript functionality
- `paper_prototype.html` - Design prototype
- `wireframes.html` - Wireframe designs
- `inclusivity_heuristics.html` - Heuristic documentation

## Contributing

This is a CS361 class project. Please follow the project guidelines for contributions.

