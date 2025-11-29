-- Add important column to notes table
ALTER TABLE notes ADD COLUMN IF NOT EXISTS important BOOLEAN NOT NULL DEFAULT false;

-- Create index for important notes for better query performance
CREATE INDEX IF NOT EXISTS ix_notes_important ON notes(important) WHERE important = true;

