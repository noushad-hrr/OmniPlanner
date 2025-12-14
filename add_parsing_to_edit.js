const fs = require('fs');

const filePath = 'd:\\noushad\\OmniPlanner\\OmniPlanner_Dev\\omni-planner-app\\src\\app\\components\\tasks2\\tasks2.ts';

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

console.log('Adding selectedDays parsing to edit methods...\n');

// 1. Add parsing to editLevel1Subtask - after creating selectedLevel1Subtask
const editL1Pattern = /(important: \(level1Subtask as any\)\.important \?\? false\s*};)\s*(\/\/ Debug: Log the values after processing)/;
const editL1Parsing = `$1

  // Parse selectedDays if it's a string
  if ((level1Subtask as any).selectedDays) {
    if (typeof (level1Subtask as any).selectedDays === 'string') {
      try {
        (this.selectedLevel1Subtask as any).selectedDays = JSON.parse((level1Subtask as any).selectedDays);
      } catch (e) {
        (this.selectedLevel1Subtask as any).selectedDays = [];
      }
    } else {
      (this.selectedLevel1Subtask as any).selectedDays = (level1Subtask as any).selectedDays;
    }
  } else {
    (this.selectedLevel1Subtask as any).selectedDays = [];
  }

  $2`;

if (editL1Pattern.test(content)) {
    content = content.replace(editL1Pattern, editL1Parsing);
    console.log('✅ Added selectedDays parsing to editLevel1Subtask');
} else {
    console.log('❌ Could not find editLevel1Subtask pattern');
}

// 2. Add parsing to editLevel2Subtask - after creating selectedLevel2Subtask
const editL2Pattern = /(important: \(level2Subtask as any\)\.important \?\? false\s*};)\s*(\/\/ Set date from parent)/;
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

console.log('\n✅ Completed adding selectedDays parsing to edit methods!');
