const fs = require('fs');

const filePath = 'd:\\noushad\\OmniPlanner\\OmniPlanner_Dev\\omni-planner-app\\src\\app\\components\\tasks2\\tasks2.html';

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Days selector HTML for Add/Edit modals (interactive checkboxes)
const daysSelectorEdit = `
        <!-- Days Selector -->
        <div class="form-group">
          <label>Days</label>
          <div class="days-selector">
            <label *ngFor="let day of weekDays" class="day-checkbox">
              <input type="checkbox" [checked]="isDaySelected(day.value)" (change)="toggleDay(day.value)">
              <span>{{ day.label }}</span>
            </label>
          </div>
        </div>
`;

console.log('Adding days selector to subtask modals...\n');

// 1. Edit Level 1 Subtask Modal - Add after end time field
const editL1Pattern = /(id="editLevel1SubtaskEndTime"[\s\S]*?<\/div>\s*<\/div>)(\s*<div class="form-row">)/;
if (editL1Pattern.test(content)) {
    content = content.replace(editL1Pattern, `$1${daysSelectorEdit}$2`);
    console.log('✅ Added days selector to Edit Level 1 Subtask Modal');
} else {
    console.log('❌ Could not find Edit Level 1 Subtask Modal pattern');
}

// 2. Edit Level 2 Subtask Modal - Add after end time field  
const editL2Pattern = /(id="editLevel2SubtaskEndTime"[\s\S]*?<\/div>\s*<\/div>)(\s*<div class="form-row">)/;
if (editL2Pattern.test(content)) {
    content = content.replace(editL2Pattern, `$1${daysSelectorEdit}$2`);
    console.log('✅ Added days selector to Edit Level 2 Subtask Modal');
} else {
    console.log('❌ Could not find Edit Level 2 Subtask Modal pattern');
}

// 3. View Level 1 Subtask Modal - Add after time section
const viewL1Pattern = /(View Level 1 Sub Task Modal[\s\S]*?<span class="time-value">[\s\S]*?<\/div>\s*<\/div>)(\s*<\/div>)/;
if (viewL1Pattern.test(content)) {
    const viewDaysL1 = `
        <!-- Selected Days -->
        <div class="view-info-item" *ngIf="selectedLevel1Subtask?.selectedDays?.length">
          <span class="view-info-label">Selected Days:</span>
          <span class="view-info-value">
            <span *ngFor="let dayIndex of selectedLevel1Subtask.selectedDays; let last = last">
              {{ weekDays[dayIndex]?.label }}<span *ngIf="!last">, </span>
            </span>
          </span>
        </div>
`;
    content = content.replace(viewL1Pattern, `$1${viewDaysL1}$2`);
    console.log('✅ Added days display to View Level 1 Subtask Modal');
} else {
    console.log('❌ Could not find View Level 1 Subtask Modal pattern');
}

// 4. View Level 2 Subtask Modal - Add after time section
const viewL2Pattern = /(View Level 2 Sub Task Modal[\s\S]*?<span class="time-value">[\s\S]*?<\/div>\s*<\/div>)(\s*<\/div>)/;
if (viewL2Pattern.test(content)) {
    const viewDaysL2 = `
        <!-- Selected Days -->
        <div class="view-info-item" *ngIf="selectedLevel2Subtask?.selectedDays?.length">
          <span class="view-info-label">Selected Days:</span>
          <span class="view-info-value">
            <span *ngFor="let dayIndex of selectedLevel2Subtask.selectedDays; let last = last">
              {{ weekDays[dayIndex]?.label }}<span *ngIf="!last">, </span>
            </span>
          </span>
        </div>
`;
    content = content.replace(viewL2Pattern, `$1${viewDaysL2}$2`);
    console.log('✅ Added days display to View Level 2 Subtask Modal');
} else {
    console.log('❌ Could not find View Level 2 Subtask Modal pattern');
}

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('\n✅ Completed adding days selector to all subtask modals!');
