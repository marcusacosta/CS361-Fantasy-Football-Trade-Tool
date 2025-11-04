// State management
let currentMode = 'manual';
let selectedPositions = {
    offering: null,
    seeking: null
};

// Sample player data for trade calculation
const playerValues = {
    'Patrick Mahomes': 85,
    'Josh Allen': 82,
    'Justin Jefferson': 88,
    'Ja\'Marr Chase': 86,
    'Christian McCaffrey': 90,
    'Derrick Henry': 84,
    'Travis Kelce': 79,
    'Mark Andrews': 75
};

// Screen Navigation
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(screenName + '-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Update navigation
    if (screenName === 'results') {
        const resultsNav = document.getElementById('results-nav');
        if (resultsNav) {
            resultsNav.style.display = 'inline-block';
        }
    }
    
    // When going back to input, preserve the data (IH#5 - backtracking without losing work)
    if (screenName === 'input') {
        // Data is already preserved in the input fields
        // User can modify and recalculate
    }
}

// Mode Switching
function switchMode(mode) {
    currentMode = mode;
    
    // Update buttons
    document.querySelectorAll('.mode-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(mode + '-btn').classList.add('active');
    
    // Update content
    document.querySelectorAll('.mode-content').forEach(content => content.classList.remove('active'));
    document.getElementById(mode + '-mode').classList.add('active');
}

// Position Selection (Assisted Mode)
function selectPosition(type, position) {
    selectedPositions[type] = position;
    
    // Remove selection from all cards in the same section
    const section = event.target.closest('.assisted-section');
    if (section) {
        section.querySelectorAll('.position-card').forEach(card => {
            card.classList.remove('selected');
        });
    }
    
    // Select the clicked card
    const clickedCard = event.target.closest('.position-card');
    if (clickedCard) {
        clickedCard.classList.add('selected');
    }
    
    // Update selected display
    const display = document.getElementById(type + '-selected');
    if (display) {
        display.textContent = `Selected: ${position}`;
    }
}

// Trade Calculation
function calculateTrade() {
    let teamA = [];
    let teamB = [];
    
    if (currentMode === 'manual') {
        // Get players from input boxes
        const teamAInput = document.getElementById('team-a-input');
        const teamBInput = document.getElementById('team-b-input');
        
        teamA = teamAInput.textContent.trim().split('\n').filter(p => p.trim());
        teamB = teamBInput.textContent.trim().split('\n').filter(p => p.trim());
    } else {
        // Assisted mode - use position-based calculation
        if (selectedPositions.offering && selectedPositions.seeking) {
            // For demo, assign default players based on positions
            const positionPlayers = {
                'QB': ['Patrick Mahomes', 'Josh Allen'],
                'RB': ['Christian McCaffrey', 'Derrick Henry'],
                'WR': ['Justin Jefferson', 'Ja\'Marr Chase'],
                'TE': ['Travis Kelce', 'Mark Andrews']
            };
            
            teamA = positionPlayers[selectedPositions.offering] || [];
            teamB = positionPlayers[selectedPositions.seeking] || [];
        } else {
            alert('Please select both positions in Assisted Mode');
            return;
        }
    }
    
    // Validate inputs
    if (teamA.length === 0 || teamB.length === 0) {
        alert('Please enter players for both teams');
        return;
    }
    
    // Calculate trade fairness
    const score = calculateFairnessScore(teamA, teamB);
    
    // Display results
    displayResults(score, teamA, teamB);
    
    // Navigate to results screen
    showScreen('results');
}

// Calculate Fairness Score
function calculateFairnessScore(teamA, teamB) {
    let teamAScore = 0;
    let teamBScore = 0;
    
    // Calculate scores for each team
    teamA.forEach(player => {
        const playerName = player.trim();
        // Try to find player value (case-insensitive)
        const value = findPlayerValue(playerName);
        teamAScore += value;
    });
    
    teamB.forEach(player => {
        const playerName = player.trim();
        const value = findPlayerValue(playerName);
        teamBScore += value;
    });
    
    // Calculate difference
    const difference = teamAScore - teamBScore;
    return difference;
}

// Find player value (with fallback for unknown players)
function findPlayerValue(playerName) {
    // Try exact match first
    if (playerValues[playerName]) {
        return playerValues[playerName];
    }
    
    // Try case-insensitive match
    for (const [key, value] of Object.entries(playerValues)) {
        if (key.toLowerCase() === playerName.toLowerCase()) {
            return value;
        }
    }
    
    // Default value for unknown players (based on position if available)
    const position = extractPosition(playerName);
    const positionDefaults = {
        'QB': 70,
        'RB': 75,
        'WR': 72,
        'TE': 68
    };
    
    return positionDefaults[position] || 70;
}

// Extract position from player name
function extractPosition(playerName) {
    const upperName = playerName.toUpperCase();
    if (upperName.includes('QB') || upperName.includes('QUARTERBACK')) return 'QB';
    if (upperName.includes('RB') || upperName.includes('RUNNING')) return 'RB';
    if (upperName.includes('WR') || upperName.includes('WIDE')) return 'WR';
    if (upperName.includes('TE') || upperName.includes('TIGHT')) return 'TE';
    return null;
}

// Display Results
function displayResults(score, teamA, teamB) {
    const scoreElement = document.getElementById('fairness-score');
    const favoredElement = document.getElementById('favored-team');
    const analysisElement = document.getElementById('analysis-text');
    
    // Format score
    if (score > 0) {
        scoreElement.textContent = `Your Team +${score.toFixed(1)}`;
        scoreElement.style.color = '#27ae60';
        favoredElement.textContent = 'Your team is stronger';
        analysisElement.textContent = `Your team has ${score.toFixed(1)} points more value based on current season performance and positional rankings.`;
    } else if (score < 0) {
        scoreElement.textContent = `Trade Partner ${score.toFixed(1)}`;
        scoreElement.style.color = '#e74c3c';
        favoredElement.textContent = 'Trade partner is stronger';
        analysisElement.textContent = `Trade partner has ${Math.abs(score).toFixed(1)} points more value based on current season performance and positional rankings.`;
    } else {
        scoreElement.textContent = 'Even Trade (0.0)';
        scoreElement.style.color = '#3498db';
        favoredElement.textContent = 'Trade is balanced';
        analysisElement.textContent = 'Both teams have similar total value, making this a fair trade.';
    }
}

// Reset Trade
function resetTrade() {
    // Show confirmation modal
    document.getElementById('reset-modal').classList.add('active');
}

function confirmReset() {
    // Clear manual mode inputs
    document.getElementById('team-a-input').textContent = '';
    document.getElementById('team-b-input').textContent = '';
    
    // Clear assisted mode selections
    selectedPositions = { offering: null, seeking: null };
    document.querySelectorAll('.position-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelectorAll('.selected-display').forEach(display => {
        display.textContent = '';
    });
    
    // Reset mode to manual
    switchMode('manual');
    
    // Close modal
    closeModal();
    
    // Navigate to input screen
    showScreen('input');
}

function closeModal() {
    document.getElementById('reset-modal').classList.remove('active');
}

// FAQ Toggle
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('show');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        element.classList.add('active');
        answer.classList.add('show');
    }
}

// Keyboard shortcuts (IH#7 - multiple approaches)
document.addEventListener('keydown', function(event) {
    // Enter key to calculate (when not in input fields)
    if (event.key === 'Enter' && event.target.tagName !== 'DIV' && !event.target.isContentEditable) {
        event.preventDefault();
        calculateTrade();
    }
    
    // Escape key to reset
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showScreen('input');
    
    // Add placeholder functionality for contenteditable divs
    const inputBoxes = document.querySelectorAll('[contenteditable="true"]');
    inputBoxes.forEach(box => {
        // Handle placeholder on focus
        box.addEventListener('focus', function() {
            // Remove placeholder text if it's just the placeholder
            const placeholder = this.getAttribute('placeholder');
            if (this.textContent.trim() === placeholder || this.textContent.trim() === '') {
                this.textContent = '';
            }
        });
        
        // Handle placeholder on blur
        box.addEventListener('blur', function() {
            // Placeholder is handled by CSS
        });
        
        // Prevent placeholder from being editable
        box.addEventListener('paste', function(e) {
            e.preventDefault();
            const text = (e.clipboardData || window.clipboardData).getData('text');
            this.textContent = text;
        });
    });
    
    // Close modal when clicking outside
    const modal = document.getElementById('reset-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
