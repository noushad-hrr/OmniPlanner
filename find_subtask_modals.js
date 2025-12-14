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

console.log('Starting to add days selector to all subtask modals...\n');

// Find all modal sections and their line numbers
const lines = content.split('\n');
const modalLocations = [];

lines.forEach((line, index) => {
    if (line.includes('Edit Level 1') || line.includes('View Level 1') ||
        line.includes('Edit Level 2') || line.includes('View Level 2') ||
        line.includes('Add Level 2')) {
        modalLocations.push({ line: index + 1, content: line.trim() });
    }
});

console.log('Found modal locations:');
modalLocations.forEach(loc => console.log(`  Line ${loc.line}: ${loc.content}`));

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('\n✅ Analysis complete!');
