const fs = require('fs');

const filePath = 'd:\\noushad\\OmniPlanner\\OmniPlanner_Dev\\omni-planner-app\\src\\app\\components\\tasks2\\tasks2.ts';

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

console.log('Adding selectedDays parsing to editLevel2Subtask...\n');

// Add parsing to editLevel2Subtask - before showing the modal
const editL2Pattern = /(this\.selectedLevel2Subtask as any\)\.important = \(this\.selectedLevel2Subtask as any\)\.important \?\? false;)\s*(\/\/ Match status and priority)/;
const editL2Parsing = `$1

  // Parse selectedDays if it's a string
  if ((level2Subtask as any).selectedDays) {
    if (typeof (level2Subtask as any).selectedDays === 'string') {
      try {
        (this.selectedLevel2Subtask as any).selectedDays = JSON.parse((level2Subtask as any).selectedDays);
      } catch (e) {
        (this.selectedLevel2Subtask as any).selectedDays = [];
      }
    } else {
      (this.selectedLevel2Subtask as any).selectedDays = (level2Subtask as any).selectedDays;
    }
  } else {
    (this.selectedLevel2Subtask as any).selectedDays = [];
  }

  $2`;

if (editL2Pattern.test(content)) {
    content = content.replace(editL2Pattern, editL2Parsing);
    console.log('✅ Added selectedDays parsing to editLevel2Subtask');
} else {
    console.log('❌ Could not find editLevel2Subtask pattern');
}

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log('\n✅ Completed adding selectedDays parsing!');
