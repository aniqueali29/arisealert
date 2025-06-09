/*!
 * AriseAlert v1.0.0
 * (c) 2025 Anique Ali
 * MIT License
 */

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('pre code') || codeBlock.querySelector('pre');

    if (code) {
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        }).catch(() => {
            button.textContent = '❌ Failed';
            setTimeout(() => {
                button.textContent = '📋 Copy';
            }, 2000);
        });
    }
}

// Run code functionality
function runCode(code) {
    try {
        eval(code);
    } catch (error) {
        console.error('Error running code:', error);
        AriseAlert.error('Code Error', 'Failed to execute the example code');
    }
}

// Tab functionality
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            const targetTab = document.getElementById(button.dataset.tab);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
});


// ================================
// UPDATED ALERT FUNCTIONS WITH PREMIUM ICONS
// ================================

// Basic Notification
function showNotification() {
    AriseAlert.fire({
        title: 'NOTIFICATION',
        message: 'You have acquired the qualifications<br>to be a Player. Will you accept?',
        icon: 'info-premium',
        showCancelButton: true,
        confirmButtonText: 'Accept',
        cancelButtonText: 'Decline'
    });
}

// Job Change Alert
function showJobChange() {
    AriseAlert.jobChange({
        title: 'NOTIFICATION',
        message: 'Your job has changed<br><br>[necromancer]<br><br>⚡<br><br>[shadow monarch]',
        icon: 'crown'
    });
}

// Success Alert
function showSuccess() {
    AriseAlert.success('QUEST COMPLETE!', 'Dragon successfully defeated!<br>You gained 5000 XP and rare loot!');
}

// Error Alert
function showError() {
    AriseAlert.error('CRITICAL SYSTEM ERROR', 'FATAL ERROR DETECTED!<br>System integrity compromised.<br>Immediate action required!');
}

// Warning Alert
function showWarning() {
    AriseAlert.warning('EXTREME DANGER', 'S-RANK MONSTER DETECTED!<br>Threat level: CATASTROPHIC<br>Evacuate immediately!');
}

// Info Alert
function showInfo() {
    AriseAlert.info('SYSTEM INFO', 'Hunter registration system is online<br>All systems operational');
}

// Confirm Alert
function showConfirm() {
    AriseAlert.fire({
        title: 'ENTER DUNGEON?',
        message: 'This is a high-risk S-Rank dungeon<br>Danger Level: EXTREME',
        icon: 'shield',
        showCancelButton: true,
        confirmButtonText: 'Enter',
        cancelButtonText: 'Retreat'
    }).then((result) => {
        if (result.confirmed) {
            AriseAlert.success('DUNGEON ENTERED!', 'Welcome to the Shadow Realm<br>Prepare for battle!');
        } else {
            AriseAlert.info('WISE CHOICE', 'Sometimes retreat is the best strategy<br>Live to fight another day');
        }
    });
}

// Input Alert
function showInput() {
    AriseAlert.fire({
        title: 'ENTER YOUR NAME',
        message: 'Please enter your Hunter name:',
        icon: 'magic',
        input: 'text',
        placeholder: 'Hunter Name...',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        validator: (value) => {
            if (!value) return 'You need to enter something!';
            if (value.length < 3) return 'Name must be at least 3 characters!';
        }
    }).then(result => {
        if (result.confirmed) {
            AriseAlert.success('WELCOME!', `Hello, ${result.value}!<br>Your Hunter profile has been created.`);
        }
    });
}

// Email Input Alert
function showEmail() {
    AriseAlert.fire({
        title: 'ENTER EMAIL',
        message: 'Please enter your email address:',
        icon: 'magic',
        input: 'email',
        placeholder: 'your@email.com',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        validator: (value) => {
            if (!value) return 'Email is required!';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email address!';
        }
    }).then(result => {
        if (result.confirmed) {
            AriseAlert.success('EMAIL SAVED!', `Email ${result.value} has been registered.`);
        }
    });
}

// Password Input Alert
function showPassword() {
    AriseAlert.fire({
        title: 'SECURE ACCESS',
        message: 'Enter your Hunter ID password:',
        icon: 'lock',
        input: 'password',
        placeholder: 'Enter password...',
        showCancelButton: true,
        confirmButtonText: 'Authenticate',
        validator: (value) => {
            if (!value) return 'Password required!';
            if (value.length < 6) return 'Password must be at least 6 characters!';
        }
    }).then(result => {
        if (result.confirmed) {
            AriseAlert.success('ACCESS GRANTED!', 'Welcome to the Hunter System<br>Authentication successful.');
        }
    });
}

// Number Input Alert
function showNumber() {
    AriseAlert.fire({
        title: 'SET POWER LEVEL',
        message: 'Enter your desired power level (1-100):',
        icon: 'diamond',
        input: 'number',
        placeholder: '50',
        showCancelButton: true,
        confirmButtonText: 'Set Level',
        validator: (value) => {
            if (!value) return 'Power level is required!';
            if (value < 1 || value > 100) return 'Power level must be between 1 and 100!';
        }
    }).then(result => {
        if (result.confirmed) {
            AriseAlert.success('POWER LEVEL SET!', `Your power level is now ${result.value}!`);
        }
    });
}

// Range Input Alert
function showRange() {
    AriseAlert.fire({
        title: 'ADJUST SETTINGS',
        message: 'Set your preferred difficulty level:',
        icon: 'lightning',
        input: 'range',
        showCancelButton: true,
        confirmButtonText: 'Apply Settings'
    }).then(result => {
        if (result.confirmed) {
            AriseAlert.success('SETTINGS SAVED!', `Difficulty set to ${result.value}%`);
        }
    });
}

// Select Alert
function showSelect() {
    AriseAlert.fire({
        title: 'CHOOSE YOUR CLASS',
        message: 'Select your Hunter class:',
        icon: 'crown',
        input: 'select',
        options: {
            'assassin': 'Assassin - Speed & Stealth',
            'mage': 'Mage - Magic & Intelligence',
            'fighter': 'Fighter - Strength & Endurance',
            'healer': 'Healer - Support & Recovery'
        },
        showCancelButton: true,
        confirmButtonText: 'Select Class'
    }).then(result => {
        if (result.confirmed) {
            AriseAlert.success('CLASS SELECTED!', `You are now a ${result.value.toUpperCase()}!`);
        }
    });
}

// Textarea Alert
function showTextarea() {
    AriseAlert.fire({
        title: 'MISSION REPORT',
        message: 'Please provide a detailed mission report:',
        icon: 'magic',
        input: 'textarea',
        placeholder: 'Enter your detailed report here...',
        showCancelButton: true,
        confirmButtonText: 'Submit Report',
        validator: (value) => {
            if (!value) return 'Report cannot be empty!';
            if (value.length < 10) return 'Report must be at least 10 characters!';
        }
    }).then(result => {
        if (result.confirmed) {
            AriseAlert.success('REPORT SUBMITTED!', 'Your mission report has been recorded.');
        }
    });
}

// Loading Alert
function showLoading() {
    AriseAlert.fire({
        title: 'LOADING...',
        message: 'Connecting to Shadow Realm...',
        icon: 'loading-premium',
        showButtons: false,
        timer: 3000
    });
}

// Progress Alert
function showProgress() {
    AriseAlert.fire({
        title: 'LEVELING UP...',
        message: 'Experience Points Loading...',
        icon: 'diamond',
        showButtons: false,
        progress: true,
        timer: 3000
    });
}

// Timer Alert
function showTimer() {
    AriseAlert.fire({
        title: 'DUNGEON CLOSING',
        message: 'Time remaining...',
        icon: 'hourglass',
        showButtons: false,
        showTimer: true,
        timerDuration: 10
    });
}

// Toast Alert
function showToast() {
    AriseAlert.toast({
        title: 'NEW ACHIEVEMENT!',
        message: 'First Kill Bonus +500 XP',
        icon: 'star',
        position: 'top-right',
        timer: 3000
    });
}

// Image Alert
function showImage() {
    AriseAlert.fire({
        title: 'RARE ITEM ACQUIRED!',
        message: 'You found a legendary weapon!',
        icon: 'star',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwZDRmZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0MHB4Ij7wn5GBPC90ZXh0Pjwvc3ZnPg==',
        showCancelButton: true,
        confirmButtonText: 'Equip',
        cancelButtonText: 'Store'
    });
}

// Multi-Step Alert
function showSteps() {
    // Step 1
    AriseAlert.fire({
        title: 'STEP 1 OF 3',
        message: 'Choose your weapon type:',
        icon: 'sword',
        input: 'select',
        options: {
            'sword': 'Sword - Balanced Attack',
            'dagger': 'Dagger - Fast & Deadly',
            'staff': 'Staff - Magic Power'
        },
        confirmButtonText: 'Next Step'
    }).then(result => {
        if (result.confirmed) {
            // Step 2
            AriseAlert.fire({
                title: 'STEP 2 OF 3',
                message: 'Set your power level (1-100):',
                icon: 'lightning',
                input: 'number',
                placeholder: '50',
                confirmButtonText: 'Next Step'
            }).then(result2 => {
                if (result2.confirmed) {
                    // Step 3
                    AriseAlert.fire({
                        title: 'STEP 3 OF 3',
                        message: 'Enter your Hunter motto:',
                        icon: 'magic',
                        input: 'text',
                        placeholder: 'I arise...',
                        confirmButtonText: 'Complete Setup'
                    }).then(result3 => {
                        if (result3.confirmed) {
                            AriseAlert.success('SETUP COMPLETE!',
                                `Weapon: ${result.value}<br>` +
                                `Power Level: ${result2.value}<br>` +
                                `Motto: "${result3.value}"`
                            );
                        }
                    });
                }
            });
        }
    });
}

// Custom Icon Alert
function showCustomIcon() {
    AriseAlert.fire({
        title: 'SHADOW MONARCH',
        message: 'The power of shadows flows through you<br>Your army awaits your command',
        icon: 'crown',
        customBg: '#1a0033',
        confirmButtonText: 'Rise',
        timer: 5000
    });
}

// HTML Alert
function showHTML() {
    AriseAlert.fire({
        title: 'RICH CONTENT',
        message: `
            <div style="text-align: center;">
                <h3 style="color: #00ff88; margin: 10px 0;">⚔️ BATTLE STATS ⚔️</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0;">
                    <div style="background: rgba(0,255,136,0.1); padding: 10px; border-radius: 5px;">
                        <strong>ATK:</strong> 9,999
                    </div>
                    <div style="background: rgba(0,212,255,0.1); padding: 10px; border-radius: 5px;">
                        <strong>DEF:</strong> 8,888
                    </div>
                    <div style="background: rgba(255,152,0,0.1); padding: 10px; border-radius: 5px;">
                        <strong>SPD:</strong> 7,777
                    </div>
                    <div style="background: rgba(231,76,60,0.1); padding: 10px; border-radius: 5px;">
                        <strong>HP:</strong> 50,000
                    </div>
                </div>
                <p style="color: #00d4ff;">⭐ Status: <strong>SHADOW MONARCH</strong> ⭐</p>
            </div>
        `,
        icon: 'gear',
        confirmButtonText: 'Awesome!'
    });
}

// ================================
// SPECIAL PREMIUM ICON ALERTS
// ================================

// Fire Alert
function showFire() {
    AriseAlert.fire({
        title: 'BURNING POWER!',
        message: 'Your fire magic has reached maximum level!<br>Enemies will tremble before your flames!',
        icon: 'fire',
        type: 'error',
        confirmButtonText: 'Embrace the Fire'
    });
}

// Heart Alert
function showHeart() {
    AriseAlert.fire({
        title: 'ALLY BOND FORMED',
        message: 'Your friendship level has increased!<br>Trust is the greatest weapon.',
        icon: 'heart',
        type: 'success',
        confirmButtonText: 'Cherish Bond'
    });
}

// Skull Alert
function showSkull() {
    AriseAlert.fire({
        title: 'DEATH MAGIC UNLOCKED',
        message: 'You have learned forbidden necromancy!<br>Use this power wisely...',
        icon: 'skull',
        type: 'error',
        confirmButtonText: 'Accept Power'
    });
}

// Gear Alert
function showGear() {
    AriseAlert.fire({
        title: 'SYSTEM MAINTENANCE',
        message: 'Hunter System is being updated...<br>New features incoming!',
        icon: 'gear',
        showButtons: false,
        timer: 3000
    });
}

// Shield Alert
function showShield() {
    AriseAlert.fire({
        title: 'DEFENSE BOOST!',
        message: 'Your shield mastery has improved!<br>Physical damage reduced by 50%',
        icon: 'shield',
        type: 'success',
        confirmButtonText: 'Fortify Defense'
    });
}

// Diamond Alert
function showDiamond() {
    AriseAlert.fire({
        title: 'RARE GEM FOUND!',
        message: 'You discovered an ancient diamond!<br>This could enhance your equipment significantly.',
        icon: 'diamond',
        showCancelButton: true,
        confirmButtonText: 'Use Gem',
        cancelButtonText: 'Save for Later'
    });
}

// ================================
// COMBINATION ALERTS
// ================================

// Battle Result Alert
function showBattleResult() {
    AriseAlert.fire({
        title: 'BATTLE COMPLETE!',
        message: 'Victory achieved against the Shadow Beast!<br>Calculating rewards...',
        icon: 'sword',
        showButtons: false,
        timer: 2000
    }).then(() => {
        AriseAlert.fire({
            title: 'REWARDS EARNED!',
            message: 'EXP: +2,500<br>Gold: +1,000<br>Item: Shadow Essence',
            icon: 'star',
            confirmButtonText: 'Collect All'
        });
    });
}

// Magic Spell Alert
function showMagicSpell() {
    AriseAlert.fire({
        title: 'CAST SPELL',
        message: 'Choose your magic spell:',
        icon: 'magic',
        input: 'select',
        options: {
            'fireball': '🔥 Fireball - High Damage',
            'heal': '💚 Heal - Restore HP',
            'lightning': '⚡ Lightning - Chain Attack',
            'shield': '🛡️ Shield - Defense Boost'
        },
        confirmButtonText: 'Cast Spell'
    }).then(result => {
        if (result.confirmed) {
            const spellEffects = {
                'fireball': { icon: 'fire', message: 'Enemies burned for 500 damage!' },
                'heal': { icon: 'heart', message: 'HP restored to maximum!' },
                'lightning': { icon: 'lightning', message: 'Lightning struck 3 enemies!' },
                'shield': { icon: 'shield', message: 'Defense increased by 200!' }
            };

            const effect = spellEffects[result.value];
            AriseAlert.fire({
                title: 'SPELL CAST!',
                message: effect.message,
                icon: effect.icon,
                confirmButtonText: 'Continue'
            });
        }
    });
}

// Dungeon Explorer Alert
function showDungeonExplorer() {
    const dungeons = {
        'easy': { icon: 'shield', danger: 'LOW', reward: 'Common Items' },
        'medium': { icon: 'sword', danger: 'MEDIUM', reward: 'Rare Equipment' },
        'hard': { icon: 'fire', danger: 'HIGH', reward: 'Epic Weapons' },
        'nightmare': { icon: 'skull', danger: 'EXTREME', reward: 'Legendary Artifacts' }
    };

    AriseAlert.fire({
        title: 'SELECT DUNGEON',
        message: 'Choose your next challenge:',
        icon: 'crown',
        input: 'select',
        options: {
            'easy': '🟢 Goblin Cave - Easy',
            'medium': '🟡 Orc Stronghold - Medium',
            'hard': '🔴 Dragon Lair - Hard',
            'nightmare': '💀 Shadow Realm - Nightmare'
        },
        confirmButtonText: 'Enter Dungeon'
    }).then(result => {
        if (result.confirmed) {
            const selected = dungeons[result.value];
            AriseAlert.fire({
                title: 'DUNGEON BRIEFING',
                message: `Danger Level: ${selected.danger}<br>Potential Rewards: ${selected.reward}<br><br>Are you prepared for battle?`,
                icon: selected.icon,
                showCancelButton: true,
                confirmButtonText: 'Begin Mission',
                cancelButtonText: 'Retreat'
            });
        }
    });
}