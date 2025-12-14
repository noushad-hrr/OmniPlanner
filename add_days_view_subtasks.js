const fs = require('fs');

const filePath = 'd:\\noushad\\OmniPlanner\\OmniPlanner_Dev\\omni-planner-app\\src\\app\\components\\tasks2\\tasks2.html';

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

console.log('Adding days display to View Level 1 and View Level 2 Subtask Modals...\n');

// View Level 1 Subtask Modal - Add after Time section (around line 2246)
const viewL1Days = `
        <div class="view-info-compact" *ngIf="selectedLevel1Subtask?.selectedDays?.length">
          <i class="fas fa-calendar-week view-info-icon"></i>
          <div class="view-info-text">
            <span class="view-info-label">Selected Days</span>
            <span class="view-info-value">
              <span *ngFor="let dayIndex of selectedLevel1Subtask.selectedDays; let last = last">
                {{ weekDays[dayIndex]?.label }}<span *ngIf="!last">, </span>
              </span>
            </span>
          </div>
        </div>
`;

// Find and replace for View Level 1 - after Time section, before Estimated Hours
const viewL1Pattern = /(selectedLevel1Subtask\?\.endTime === '00:00'"\s*class="nd-value">ND<\/span>\s*<\/span>\s*<\/div>\s*<\/div>)(\s*<div class="view-info-compact">\s*<i class="fas fa-hourglass-half)/;
if (viewL1Pattern.test(content)) {
    content = content.replace(viewL1Pattern, `$1${viewL1Days}$2`);
    console.log('✅ Added days display to View Level 1 Subtask Modal');
} else {
    console.log('❌ Could not find View Level 1 Subtask Modal pattern');
}

// View Level 2 Subtask Modal - Add after Time section
const viewL2Days = `
        <div class="view-info-compact" *ngIf="selectedLevel2Subtask?.selectedDays?.length">
          <i class="fas fa-calendar-week view-info-icon"></i>
          <div class="view-info-text">
            <span class="view-info-label">Selected Days</span>
            <span class="view-info-value">
              <span *ngFor="let dayIndex of selectedLevel2Subtask.selectedDays; let last = last">
                {{ weekDays[dayIndex]?.label }}<span *ngIf="!last">, </span>
              </span>
            </span>
          </div>
        </div>
`;

// Find and replace for View Level 2 - after Time section, before Estimated Hours
const viewL2Pattern = /(selectedLevel2Subtask\?\.endTime === '00:00'"\s*class="nd-value">ND<\/span>\s*<\/span>\s*<\/div>\s*<\/div>)(\s*<div class="view-info-compact">\s*<i class="fas fa-hourglass-half)/;
if (viewL2Pattern.test(content)) {
    content = content.replace(viewL2Pattern, `$1${viewL2Days}$2`);
    console.log('✅ Added days display to View Level 2 Subtask Modal');
} else {
    console.log('❌ Could not find View Level 2 Subtask Modal pattern');
}

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('\n✅ Completed adding days display to View subtask modals!');
