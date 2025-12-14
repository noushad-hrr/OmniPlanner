import re

# Read the file
file_path = r'd:\noushad\OmniPlanner\OmniPlanner_Dev\omni-planner-app\src\app\components\tasks2\tasks2.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the HTML to insert
new_section = '''
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
'''

# Find the location to insert (after Estimated Hours section, before Priority Order section)
# Looking for the pattern that ends Estimated Hours and starts Priority Order
pattern = r'(</div>\s*</div>\s*<div class="view-info-compact">\s*<i class="fas fa-sort-numeric-down view-info-icon"></i>)'

# Replace with the pattern plus our new section
replacement = r'</div>\n        </div>\n' + new_section + r'\n        <div class="view-info-compact">\n          <i class="fas fa-sort-numeric-down view-info-icon"></i>'

content = re.sub(pattern, replacement, content, count=1)

# Write back to file
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully added Selected Days display to View Task Modal!")
