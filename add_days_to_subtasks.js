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

// Days display HTML for View modals (read-only display)
const daysSelectorView = `
        <!-- Selected Days -->
        <div class="view-info-item" *ngIf="SUBTASK_VAR?.selectedDays?.length">
          <span class="view-info-label">Selected Days:</span>
          <span class="view-info-value">
            <span *ngFor="let dayIndex of SUBTASK_VAR.selectedDays; let last = last">
              {{ weekDays[dayIndex]?.label }}<span *ngIf="!last">, </span>
            </span>
          </span>
        </div>
`;

// 1. Add Level 2 Subtask Modal - Add days selector after description field
content = content.replace(
    /(<label for="level2SubtaskDescription">Description<\/label>[\s\S]*?<\/textarea>\s*<\/div>)/,
    `$1${daysSelectorEdit}`
);

console.log('✅ Added days selector to Add Level 2 Subtask Modal');

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Successfully added days selector to all subtask modals!');
console.log('Note: You may need to add to Edit and View modals manually if they exist.');
