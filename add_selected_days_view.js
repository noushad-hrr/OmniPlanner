const fs = require('fs');

const filePath = 'd:\\noushad\\OmniPlanner\\OmniPlanner_Dev\\omni-planner-app\\src\\app\\components\\tasks2\\tasks2.html';

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// The new HTML section to add
const newSection = `
        <div class="view-info-compact" *ngIf="selectedTask?.selectedDays && selectedTask.selectedDays.length > 0">
          <i class="fas fa-calendar-week view-info-icon"></i>
          <div class="view-info-text">
            <span class="view-info-label">Selected Days</span>
            <span class="view-info-value">
              <span *ngFor="let dayIndex of selectedTask.selectedDays; let last = last">
                {{ weekDays[dayIndex]?.label }}<span *ngIf="!last">, </span>
              </span>
            </span>
          </div>
        </div>
`;

// Find and replace - looking for the end of Estimated Hours section
const searchPattern = /(<span class="view-info-label">Estimated Hours<\/span>[\s\S]*?<\/div>\r?\n\s*<\/div>\r?\n)(\s*<div class="view-info-compact">\r?\n\s*<i class="fas fa-sort-numeric-down)/;

content = content.replace(searchPattern, `$1${newSection}\n$2`);

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Successfully added Selected Days display to View Task Modal!');
