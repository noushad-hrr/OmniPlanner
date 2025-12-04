const fs = require('fs');
const path = require('path');

const filePath = 'd:\\noushad\\OmniPlanner\\OmniPlanner_Dev\\omni-planner-app\\src\\app\\components\\tasks2\\tasks2.html';

const daysSelector = `
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

// Read the file
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Insert after line 475 (0-indexed, so 475)
lines.splice(476, 0, daysSelector);

// Write back
fs.writeFileSync(filePath, lines.join('\n'), 'utf8');

console.log('Days selector added to Add Task Modal at line 476');
