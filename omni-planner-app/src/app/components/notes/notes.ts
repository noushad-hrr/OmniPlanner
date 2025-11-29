import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { CategoryMasterService } from '../../services/category-master.service';
import { ToasterService } from '../../services/toaster.service';
import { ConfirmationService } from '../../services/confirmation.service';
import { Note, NoteCategory, NoteFilters, NoteUrl, CredentialInfo } from '../../models/note';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.html',
  styleUrls: ['./notes.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  categories: NoteCategory[] = [];
  selectedNote: Note | null = null;
  filters: NoteFilters = { search: '', categoryId: null, createdFrom: null, createdTo: null, important: 'all', sort: 'createdOn_desc' };
  loading = false;
  isTextWrapped = true;
  @ViewChild('contentArea') contentArea?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('lineNumbers') lineNumbers?: ElementRef<HTMLDivElement>;
  totalLines: number = 1;
  lineHeights: number[] = []; // Store heights for each line when wrapped
  
  // Auto-save properties
  private autoSaveTimer: any = null;
  private originalNoteState: Note | null = null;
  isAutoSaving = false;
  autoSaveStatus: 'idle' | 'saving' | 'saved' = 'idle';
  
  // Search and Replace properties
  showSearchReplace = false;
  searchText = '';
  replaceText = '';
  searchCaseSensitive = false;
  searchWholeWord = false;
  searchRegex = false;
  searchMatches: { start: number; end: number; text: string }[] = [];
  currentMatchIndex = -1;
  private keyboardShortcutHandler?: (event: KeyboardEvent) => void;

  // URL management properties
  noteUrls: NoteUrl[] = [];
  availableUrls: NoteUrl[] = [];
  showAddUrlDropdown = false;
  selectedUrlId: number | null = null;
  loadingUrls = false;
  urlsSectionCollapsed = true; // Start collapsed to save space for note editor
  dropdownPosition: { top: number; right: number } | null = null;

  constructor(
    private notesService: NotesService,
    private categoryMasterService: CategoryMasterService,
    private toaster: ToasterService,
    private confirmation: ConfirmationService
  ) {}

  private readonly STORAGE_KEYS = {
    selectedNoteId: 'omni-planner-notes-selected-note-id',
    textWrap: 'omni-planner-notes-text-wrap',
    sort: 'omni-planner-notes-sort'
  };

  ngOnInit(): void {
    this.loadSavedState();
    this.loadCategories();
    this.loadNotes();
    this.setupKeyboardShortcuts();
  }

  private setupKeyboardShortcuts(): void {
    this.keyboardShortcutHandler = (event: KeyboardEvent) => {
      // Ctrl+F or Cmd+F to toggle search
      if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
        event.preventDefault();
        if (this.selectedNote && !this.isNewNoteWithoutCategory()) {
          this.toggleSearchReplace();
        }
      }
      
      // Escape to close search
      if (event.key === 'Escape' && this.showSearchReplace) {
        this.closeSearchReplace();
      }
    };
    document.addEventListener('keydown', this.keyboardShortcutHandler);
  }

  ngOnDestroy(): void {
    if (this.keyboardShortcutHandler) {
      document.removeEventListener('keydown', this.keyboardShortcutHandler);
    }
  }

  private loadSavedState(): void {
    try {
      // Load text wrap state
      const savedTextWrap = localStorage.getItem(this.STORAGE_KEYS.textWrap);
      if (savedTextWrap !== null) {
        this.isTextWrapped = savedTextWrap === 'true';
      }

      // Load sort selection
      const savedSort = localStorage.getItem(this.STORAGE_KEYS.sort);
      if (savedSort) {
        this.filters.sort = savedSort as any;
      }
    } catch (error) {
      console.warn('Failed to load saved state from localStorage:', error);
    }
  }

  private saveSelectedNoteId(noteId: number | null): void {
    try {
      if (noteId && noteId > 0) {
        localStorage.setItem(this.STORAGE_KEYS.selectedNoteId, noteId.toString());
      } else {
        localStorage.removeItem(this.STORAGE_KEYS.selectedNoteId);
      }
    } catch (error) {
      console.warn('Failed to save selected note ID to localStorage:', error);
    }
  }

  private saveTextWrapState(): void {
    try {
      localStorage.setItem(this.STORAGE_KEYS.textWrap, this.isTextWrapped.toString());
    } catch (error) {
      console.warn('Failed to save text wrap state to localStorage:', error);
    }
  }

  private saveSortSelection(): void {
    try {
      localStorage.setItem(this.STORAGE_KEYS.sort, this.filters.sort);
    } catch (error) {
      console.warn('Failed to save sort selection to localStorage:', error);
    }
  }

  refresh(): void { this.loadNotes(); }

  onFiltersChanged(): void { 
    this.saveSortSelection();
    this.loadNotes(); 
  }

  resetFilters(): void {
    // Clear search
    this.filters.search = '';
    
    // Reset category to All
    this.filters.categoryId = null;
    
    // Clear date filters
    this.filters.createdFrom = null;
    this.filters.createdTo = null;
    
    // Reset important filter to All
    this.filters.important = 'all';
    
    // Restore sort from localStorage or use default
    try {
      const savedSort = localStorage.getItem(this.STORAGE_KEYS.sort);
      this.filters.sort = savedSort ? (savedSort as any) : 'createdOn_desc';
    } catch (error) {
      this.filters.sort = 'createdOn_desc';
    }
    
    // Reload notes with reset filters
    this.loadNotes();
  }

  selectNote(note: Note): void { 
    // Clear any pending auto-save
    this.clearAutoSaveTimer();
    
    this.selectedNote = { ...note, important: note.important ?? false };
    this.saveSelectedNoteId(note.id);
    
    // Store original state for change detection
    this.originalNoteState = JSON.parse(JSON.stringify({ ...note, important: note.important ?? false }));
    this.autoSaveStatus = 'idle';
    
    // Reset search when switching notes
    this.searchMatches = [];
    this.currentMatchIndex = -1;
    if (this.showSearchReplace && this.searchText) {
      // Re-perform search for new note
      setTimeout(() => this.performSearch(), 0);
    }
    
    // Load URLs for the selected note
    if (note.id && note.id > 0) {
      this.loadNoteUrls();
    } else {
      this.noteUrls = [];
      this.availableUrls = [];
    }
    
    // Update line count for new note
    setTimeout(() => {
      this.updateLineCount();
      // Sync scroll position after content is loaded
      setTimeout(() => {
        this.syncScroll();
      }, 150);
    }, 100);
  }

  toggleTextWrap(): void {
    this.isTextWrapped = !this.isTextWrapped;
    this.saveTextWrapState();
    // Recalculate line count when wrap mode changes
    setTimeout(() => {
      this.updateLineCount();
      // Reset line heights when toggling
      const lineNumbersEl = this.lineNumbers?.nativeElement;
      if (lineNumbersEl && !this.isTextWrapped) {
        const lineNumberElements = lineNumbersEl.querySelectorAll('.line-number');
        lineNumberElements.forEach(el => {
          (el as HTMLElement).style.height = '';
          (el as HTMLElement).style.minHeight = '';
        });
      }
    }, 100);
  }

  isNewNoteWithoutCategory(): boolean {
    return !!(this.selectedNote && this.selectedNote.id === 0 && this.selectedNote.categoryId == null);
  }

  startNewNote(): void {
    // Clear any pending auto-save
    this.clearAutoSaveTimer();
    
    this.selectedNote = {
      id: 0,
      title: '',
      content: '',
      categoryId: null,
      categoryName: undefined,
      createdOn: new Date(),
      updatedOn: null,
      important: false
    };
    this.saveSelectedNoteId(null);
    
    // Reset original state and auto-save status
    this.originalNoteState = null;
    this.autoSaveStatus = 'idle';
    
    // Update line count for new note
    setTimeout(() => this.updateLineCount(), 100);
  }

  duplicateNote(): void {
    if (!this.selectedNote) { return; }
    const copy = { ...this.selectedNote, id: 0, title: `${this.selectedNote.title || 'Untitled'} (Copy)`, createdOn: new Date(), updatedOn: null, important: false };
    this.selectedNote = copy;
    this.originalNoteState = null;
    this.autoSaveStatus = 'idle';
  }

  toggleNoteImportant(noteId: number): void {
    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      const oldImportant = note.important;
      note.important = !note.important;
      
      // Update selected note if it's the same one
      if (this.selectedNote && this.selectedNote.id === noteId) {
        this.selectedNote.important = note.important;
      }
      
      // Update via API
      this.notesService.updateNote({ ...note, important: note.important }).then(response => {
        this.toaster.success(response.message);
        // Refresh notes list to get updated data
        this.loadNotes();
      }).catch(err => {
        note.important = oldImportant; // Revert on error
        if (this.selectedNote && this.selectedNote.id === noteId) {
          this.selectedNote.important = oldImportant;
        }
        const msg = err?.message || 'Failed to update note importance';
        this.toaster.error(msg);
      });
    }
  }

  toggleSelectedNoteImportant(): void {
    if (!this.selectedNote) { return; }
    this.selectedNote.important = !this.selectedNote.important;
    this.onTitleChange(); // Trigger auto-save - API message will be shown via auto-save
  }

  insertBullet(): void {
    if (!this.selectedNote) { return; }
    const ta = this.contentArea?.nativeElement;
    const value = this.selectedNote.content || '';
    if (!ta) {
      // Fallback: append a new bullet at the end with indentation
      this.selectedNote.content = (value ? value + '\n' : '') + '    ➥ ';
      this.onContentChange();
      return;
    }
    const start = ta.selectionStart ?? value.length;
    const end = ta.selectionEnd ?? start;
    
    // Find the end of the current line (where cursor is)
    const lineEnd = value.indexOf('\n', start);
    let insertPosition: number;
    
    if (lineEnd === -1) {
      // Cursor is at end of document, add newline then bullet
      insertPosition = value.length;
      // Ensure we have a newline before adding bullet
      const needsNewline = value.length > 0 && value[value.length - 1] !== '\n';
      const bulletText = (needsNewline ? '\n' : '') + '    ➥ ';
      const newValue = value.slice(0, insertPosition) + bulletText + value.slice(insertPosition);
      this.selectedNote.content = newValue;
      this.onContentChange();
      
      setTimeout(() => {
        try {
          const newCaretPos = insertPosition + bulletText.length;
          ta.setSelectionRange(newCaretPos, newCaretPos);
          ta.focus();
        } catch {}
      });
    } else {
      // There's a next line, insert bullet at the start of that line
      insertPosition = lineEnd + 1;
      const bulletText = '    ➥ ';
      const newValue = value.slice(0, insertPosition) + bulletText + value.slice(insertPosition);
      this.selectedNote.content = newValue;
      this.onContentChange();
      
      setTimeout(() => {
        try {
          const newCaretPos = insertPosition + bulletText.length;
          ta.setSelectionRange(newCaretPos, newCaretPos);
          ta.focus();
        } catch {}
      });
    }
  }

  increaseIndent(): void {
    if (!this.selectedNote) { return; }
    const ta = this.contentArea?.nativeElement;
    const value = this.selectedNote.content || '';
    if (!ta) { return; }
    
    const start = ta.selectionStart ?? value.length;
    const end = ta.selectionEnd ?? start;
    
    // Find the start of the selection (beginning of first line)
    const firstLineStart = value.lastIndexOf('\n', start - 1) + 1;
    // Find the end of the selection (end of last line)
    const lastLineEnd = value.indexOf('\n', end - 1);
    const selectionEnd = lastLineEnd === -1 ? value.length : lastLineEnd;
    
    // Get selected text
    const before = value.slice(0, firstLineStart);
    const selected = value.slice(firstLineStart, selectionEnd);
    const after = value.slice(selectionEnd);
    
    // Add 4 spaces to the beginning of each line in selection
    const indented = selected.split('\n').map(line => '    ' + line).join('\n');
      const newValue = before + indented + after;
      this.selectedNote.content = newValue;
      this.onContentChange();
      
      // Adjust selection range (each line got 4 more chars)
    const lineCount = selected.split('\n').length;
    const lengthDiff = lineCount * 4;
    const newStart = start + (start === firstLineStart ? 0 : 4);
    const newEnd = end + lengthDiff;
    
    setTimeout(() => {
      try {
        ta.setSelectionRange(newStart, newEnd);
        ta.focus();
      } catch {}
    });
  }

  decreaseIndent(): void {
    if (!this.selectedNote) { return; }
    const ta = this.contentArea?.nativeElement;
    const value = this.selectedNote.content || '';
    if (!ta) { return; }
    
    const start = ta.selectionStart ?? value.length;
    const end = ta.selectionEnd ?? start;
    
    // Find the start of the selection (beginning of first line)
    const firstLineStart = value.lastIndexOf('\n', start - 1) + 1;
    // Find the end of the selection (end of last line)
    const lastLineEnd = value.indexOf('\n', end - 1);
    const selectionEnd = lastLineEnd === -1 ? value.length : lastLineEnd;
    
    // Get selected text
    const before = value.slice(0, firstLineStart);
    const selected = value.slice(firstLineStart, selectionEnd);
    const after = value.slice(selectionEnd);
    
    // Remove up to 4 spaces from the beginning of each line
    const unindented = selected.split('\n').map(line => {
      // Remove up to 4 leading spaces
      let trimmed = line;
      let removed = 0;
      while (removed < 4 && trimmed.startsWith(' ')) {
        trimmed = trimmed.substring(1);
        removed++;
      }
      return trimmed;
    }).join('\n');
    
    const newValue = before + unindented + after;
    this.selectedNote.content = newValue;
    this.onContentChange();
    
    // Adjust selection range (calculate how many chars were removed)
    const lines = selected.split('\n');
    let totalRemoved = 0;
    lines.forEach(line => {
      let spaces = 0;
      for (let i = 0; i < Math.min(4, line.length); i++) {
        if (line[i] === ' ') spaces++;
        else break;
      }
      totalRemoved += spaces;
    });
    
    const newStart = Math.max(firstLineStart, start - (start > firstLineStart ? 4 : 0));
    const newEnd = end - totalRemoved;
    
    setTimeout(() => {
      try {
        ta.setSelectionRange(newStart, Math.max(newStart, newEnd));
        ta.focus();
      } catch {}
    });
  }

  // Auto-save methods
  onContentChange(): void {
    if (!this.selectedNote) { return; }
    this.scheduleAutoSave();
  }

  onTitleChange(): void {
    if (!this.selectedNote) { return; }
    this.scheduleAutoSave();
  }

  onCategoryChange(): void {
    if (!this.selectedNote) { return; }
    // For new notes, if category is now selected, check if we should auto-save
    if (this.selectedNote.id === 0 && this.selectedNote.categoryId != null) {
      // Category is now selected, schedule auto-save if there's content
      if ((this.selectedNote.title || '').trim() || (this.selectedNote.content || '').trim()) {
        this.scheduleAutoSave();
      }
      // Load available URLs for the new category
      this.loadAvailableUrls();
    } else {
      // For existing notes, category change triggers auto-save
      this.scheduleAutoSave();
      // Reload URLs when category changes
      if (this.selectedNote.id && this.selectedNote.id > 0) {
        this.loadNoteUrls();
      }
    }
  }

  private scheduleAutoSave(): void {
    // Clear existing timer
    this.clearAutoSaveTimer();
    
    // Set new timer for 3 seconds
    this.autoSaveTimer = setTimeout(() => {
      this.performAutoSave();
    }, 3000);
    
    // Update status to indicate changes are pending
    if (this.autoSaveStatus === 'saved') {
      this.autoSaveStatus = 'idle';
    }
  }

  private clearAutoSaveTimer(): void {
    if (this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
      this.autoSaveTimer = null;
    }
  }

  private async performAutoSave(): Promise<void> {
    if (!this.selectedNote) { return; }
    
    // Check if note has actually changed
    if (this.hasNoteChanged()) {
      // For new notes, category is mandatory
      if (this.selectedNote.id === 0 && this.selectedNote.categoryId == null) {
        // Don't auto-save new notes without category
        return;
      }
      
      // Set saving status
      this.isAutoSaving = true;
      this.autoSaveStatus = 'saving';
      
      try {
        // Use the existing save logic
        if (this.selectedNote.id && this.selectedNote.id > 0) {
          // Update existing note
          const response = await this.notesService.updateNote(this.selectedNote);
          this.selectedNote = response.data;
          this.saveSelectedNoteId(response.data.id);
          
          // Update original state
          this.originalNoteState = JSON.parse(JSON.stringify(response.data));
          this.autoSaveStatus = 'saved';
          
          // Show success toast with API message
          this.toaster.success(response.message);
          
          // Refresh notes list to get updated data
          await this.loadNotes();
        } else {
          // Create new note
          const response = await this.notesService.createNote(this.selectedNote);
          this.selectedNote = response.data;
          this.saveSelectedNoteId(response.data.id);
          
          // Update original state
          this.originalNoteState = JSON.parse(JSON.stringify(response.data));
          this.autoSaveStatus = 'saved';
          
          // Show success toast with API message
          this.toaster.success(response.message);
          
          // Refresh notes list
          await this.loadNotes();
        }
      } catch (err: any) {
        // Show error toast with API error message
        const msg = err?.message || 'Auto-save failed';
        this.toaster.error(msg);
        console.warn('Auto-save failed:', err);
        this.autoSaveStatus = 'idle';
      } finally {
        this.isAutoSaving = false;
      }
    }
  }

  private hasNoteChanged(): boolean {
    if (!this.selectedNote || !this.originalNoteState) {
      // New note - check if it has any content
      return !!(this.selectedNote && (
        (this.selectedNote.title || '').trim() || 
        (this.selectedNote.content || '').trim()
      ));
    }
    
    // Compare current state with original
    return (
      (this.selectedNote.title || '') !== (this.originalNoteState.title || '') ||
      (this.selectedNote.content || '') !== (this.originalNoteState.content || '') ||
      this.selectedNote.categoryId !== this.originalNoteState.categoryId ||
      (this.selectedNote.important ?? false) !== (this.originalNoteState.important ?? false)
    );
  }

  async saveSelectedNote(): Promise<void> {
    // Clear auto-save timer when manual save is triggered
    this.clearAutoSaveTimer();
    
    if (!this.selectedNote) { return; }
    // Mandatory category selection
    if (this.selectedNote.categoryId == null) {
      this.toaster.warn('Please select a category before saving.');
      return;
    }
    this.loading = true;
    try {
      // Let API handle duplicate title validation - it will return appropriate error message
      if (this.selectedNote.id && this.selectedNote.id > 0) {
        const response = await this.notesService.updateNote(this.selectedNote);
        this.selectedNote = response.data;
        this.saveSelectedNoteId(response.data.id);
        // Update original state after manual save
        this.originalNoteState = JSON.parse(JSON.stringify(response.data));
        this.autoSaveStatus = 'saved';
        // Show API response message
        this.toaster.success(response.message);
      } else {
        const response = await this.notesService.createNote(this.selectedNote);
        this.selectedNote = response.data;
        this.saveSelectedNoteId(response.data.id);
        // Update original state after manual save
        this.originalNoteState = JSON.parse(JSON.stringify(response.data));
        this.autoSaveStatus = 'saved';
        // Show API response message
        this.toaster.success(response.message);
      }
      await this.loadNotes();
    } catch (err: any) {
      // Show API error message
      const msg = err?.message || 'Failed to save note';
      this.toaster.error(msg);
    } finally {
      this.loading = false;
    }
  }

  async deleteSelectedNote(): Promise<void> {
    if (!this.selectedNote || !this.selectedNote.id) { return; }
    // Clear auto-save timer
    this.clearAutoSaveTimer();
    
    const confirmed = await this.confirmation.confirm({
      title: 'Delete Note',
      message: 'Are you sure you want to delete this note? This action cannot be undone.',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });
    if (!confirmed) { return; }
    this.loading = true;
    try {
      const response = await this.notesService.deleteNote(this.selectedNote.id);
      this.selectedNote = null;
      this.originalNoteState = null;
      this.autoSaveStatus = 'idle';
      this.saveSelectedNoteId(null);
      await this.loadNotes();
      // Show API response message
      this.toaster.success(response.message);
    } catch (err: any) {
      // Show API error message
      const msg = err?.message || 'Failed to delete note';
      this.toaster.error(msg);
    } finally {
      this.loading = false;
    }
  }

  private async loadCategories(): Promise<void> {
    try {
      const categoryData = await this.categoryMasterService.getAllCategories().toPromise();
      // Map Category to NoteCategory format (category -> name, include icon)
      this.categories = (categoryData || []).map(cat => ({
        id: cat.id,
        name: cat.category,
        icon: cat.icon || ''
      }));
    } catch {
      this.categories = [
        { id: 1, name: 'Development', icon: '🚀' },
        { id: 2, name: 'Design', icon: '🎨' },
        { id: 3, name: 'Marketing', icon: '📈' },
        { id: 4, name: 'Operations', icon: '⚙️' },
        { id: 5, name: 'Research', icon: '📚' }
      ];
    }
  }

  getCategoryIcon(categoryId: number | null | undefined): string {
    if (!categoryId) return '';
    const category = this.categories.find(c => c.id === categoryId);
    return category?.icon || '';
  }

  private async loadNotes(): Promise<void> {
    this.loading = true;
    try {
      this.notes = await this.notesService.getNotes(this.filters);
      // Ensure important field is initialized for all notes
      this.notes = this.notes.map(note => ({ ...note, important: note.important ?? false }));
      
      // Try to restore selected note from localStorage if no note is currently selected
      if (!this.selectedNote) {
        try {
          const savedNoteId = localStorage.getItem(this.STORAGE_KEYS.selectedNoteId);
          if (savedNoteId) {
            const noteId = parseInt(savedNoteId, 10);
            const savedNote = this.notes.find(n => n.id === noteId);
            if (savedNote) {
              // Use selectNote to properly initialize the note and load URLs
              this.selectNote(savedNote);
            } else {
              // Note not found in current list, clear saved ID
              localStorage.removeItem(this.STORAGE_KEYS.selectedNoteId);
            }
          }
        } catch (error) {
          console.warn('Failed to restore selected note from localStorage:', error);
        }
      } else {
        // Refresh currently selected note if it exists
        const refreshed = this.notes.find(n => n.id === this.selectedNote!.id);
        if (refreshed) { 
          // Preserve the URLs loading state - don't reload URLs if note data hasn't changed
          const noteId = this.selectedNote.id;
          this.selectedNote = { ...refreshed, important: refreshed.important ?? false };
          // Only reload URLs if they haven't been loaded yet or if note was refreshed
          if (this.noteUrls.length === 0 && noteId && noteId > 0) {
            this.loadNoteUrls();
          }
        } else {
          // Selected note no longer exists, clear it
          this.selectedNote = null;
          this.noteUrls = [];
          this.availableUrls = [];
          this.saveSelectedNoteId(null);
        }
      }
    } finally {
      this.loading = false;
    }
  }

  // Search and Replace methods
  toggleSearchReplace(): void {
    this.showSearchReplace = !this.showSearchReplace;
    if (this.showSearchReplace) {
      // Focus search input when opened
      setTimeout(() => {
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }, 0);
    } else {
      // Clear search when closed
      this.searchText = '';
      this.replaceText = '';
      this.searchMatches = [];
      this.currentMatchIndex = -1;
    }
  }

  closeSearchReplace(): void {
    this.showSearchReplace = false;
    this.searchText = '';
    this.replaceText = '';
    this.searchMatches = [];
    this.currentMatchIndex = -1;
  }

  toggleCaseSensitive(): void {
    this.searchCaseSensitive = !this.searchCaseSensitive;
    this.performSearch();
  }

  toggleWholeWord(): void {
    this.searchWholeWord = !this.searchWholeWord;
    this.performSearch();
  }

  toggleRegex(): void {
    this.searchRegex = !this.searchRegex;
    this.performSearch();
  }

  performSearch(): void {
    if (!this.selectedNote || !this.searchText.trim()) {
      this.searchMatches = [];
      this.currentMatchIndex = -1;
      return;
    }

    const content = this.selectedNote.content || '';
    if (!content) {
      this.searchMatches = [];
      this.currentMatchIndex = -1;
      return;
    }

    try {
      let searchPattern: RegExp;
      let searchString = this.searchText;

      if (this.searchRegex) {
        // Regular expression mode
        try {
          const flags = this.searchCaseSensitive ? 'g' : 'gi';
          searchPattern = new RegExp(searchString, flags);
        } catch (e) {
          // Invalid regex, clear matches
          this.searchMatches = [];
          this.currentMatchIndex = -1;
          return;
        }
      } else {
        // Normal text search
        if (this.searchWholeWord) {
          // Escape special regex characters for whole word matching
          const escaped = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          searchString = `\\b${escaped}\\b`;
        } else {
          // Escape special regex characters
          searchString = searchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        const flags = this.searchCaseSensitive ? 'g' : 'gi';
        searchPattern = new RegExp(searchString, flags);
      }

      // Find all matches
      this.searchMatches = [];
      let match;
      while ((match = searchPattern.exec(content)) !== null) {
        this.searchMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0]
        });
        // Prevent infinite loop with zero-length matches
        if (match[0].length === 0) {
          searchPattern.lastIndex++;
        }
      }

      // Reset current match index if out of bounds
      if (this.currentMatchIndex >= this.searchMatches.length) {
        this.currentMatchIndex = -1;
      }

      // If we have matches and no current selection, select the first match
      if (this.searchMatches.length > 0 && this.currentMatchIndex === -1) {
        this.currentMatchIndex = 0;
        this.selectCurrentMatch();
      } else if (this.searchMatches.length === 0) {
        this.currentMatchIndex = -1;
      }
    } catch (error) {
      console.error('Search error:', error);
      this.searchMatches = [];
      this.currentMatchIndex = -1;
    }
  }

  findNext(): void {
    if (this.searchMatches.length === 0) {
      this.performSearch();
      return;
    }

    this.currentMatchIndex = (this.currentMatchIndex + 1) % this.searchMatches.length;
    this.selectCurrentMatch();
  }

  findPrevious(): void {
    if (this.searchMatches.length === 0) {
      return;
    }

    this.currentMatchIndex = this.currentMatchIndex <= 0 
      ? this.searchMatches.length - 1 
      : this.currentMatchIndex - 1;
    this.selectCurrentMatch();
  }

  selectCurrentMatch(): void {
    if (this.currentMatchIndex < 0 || this.currentMatchIndex >= this.searchMatches.length) {
      return;
    }

    const match = this.searchMatches[this.currentMatchIndex];
    const textarea = this.contentArea?.nativeElement;
    if (!textarea) {
      return;
    }

    // Set selection range
    textarea.setSelectionRange(match.start, match.end);
    textarea.focus();

    // Scroll to selection
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 10) || 20;
    const textBeforeSelection = textarea.value.substring(0, match.start);
    const linesBefore = textBeforeSelection.split('\n').length - 1;
    const scrollTop = linesBefore * lineHeight;
    textarea.scrollTop = Math.max(0, scrollTop - lineHeight * 2);
  }

  replaceNext(): void {
    if (!this.selectedNote || this.searchMatches.length === 0 || this.currentMatchIndex < 0) {
      return;
    }

    const match = this.searchMatches[this.currentMatchIndex];
    const content = this.selectedNote.content || '';
    
    // Perform replacement
    let replacement = this.replaceText;
    if (this.searchRegex && this.searchText) {
      try {
        const flags = this.searchCaseSensitive ? 'g' : 'gi';
        const regex = new RegExp(this.searchText, flags);
        // Replace only the current match
        const beforeMatch = content.substring(0, match.start);
        const afterMatch = content.substring(match.end);
        const matchedText = content.substring(match.start, match.end);
        replacement = matchedText.replace(regex, this.replaceText);
        this.selectedNote.content = beforeMatch + replacement + afterMatch;
      } catch (e) {
        // If regex replacement fails, do simple text replacement
        this.selectedNote.content = content.substring(0, match.start) + replacement + content.substring(match.end);
      }
    } else {
      this.selectedNote.content = content.substring(0, match.start) + replacement + content.substring(match.end);
    }

    // Trigger content change
    this.onContentChange();

    // Recalculate matches after replacement
    const lengthDiff = replacement.length - match.text.length;
    this.performSearch();

    // Adjust match indices that come after the replaced match
    if (this.searchMatches.length > 0) {
      // Try to find the next match at a similar position
      const nextMatchIndex = this.searchMatches.findIndex(m => m.start >= match.start + replacement.length);
      if (nextMatchIndex >= 0) {
        this.currentMatchIndex = nextMatchIndex;
      } else {
        // Wrap to first match
        this.currentMatchIndex = 0;
      }
      this.selectCurrentMatch();
    }
  }

  replaceAll(): void {
    if (!this.selectedNote || !this.searchText || this.searchMatches.length === 0) {
      return;
    }

    let content = this.selectedNote.content || '';
    
    if (this.searchRegex) {
      try {
        const flags = this.searchCaseSensitive ? 'g' : 'gi';
        const regex = new RegExp(this.searchText, flags);
        content = content.replace(regex, this.replaceText);
      } catch (e) {
        // If regex replacement fails, do simple text replacement
        const searchPattern = this.searchCaseSensitive ? this.searchText : new RegExp(this.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        content = content.replace(searchPattern, this.replaceText);
      }
    } else {
      let searchPattern: string | RegExp = this.searchText;
      
      if (this.searchWholeWord) {
        const escaped = this.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        searchPattern = new RegExp(`\\b${escaped}\\b`, this.searchCaseSensitive ? 'g' : 'gi');
      } else {
        searchPattern = new RegExp(this.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), this.searchCaseSensitive ? 'g' : 'gi');
      }
      
      content = content.replace(searchPattern, this.replaceText);
    }

    this.selectedNote.content = content;
    this.onContentChange();
    
    // Clear search matches after replace all
    this.searchMatches = [];
    this.currentMatchIndex = -1;
  }

  // Simple line numbers implementation - based on logical lines (like Notepad++)
  updateLineCount(): void {
    setTimeout(() => {
      const textarea = this.contentArea?.nativeElement;
      const lineNumbersEl = this.lineNumbers?.nativeElement;
      
      if (!textarea || !this.selectedNote) {
        this.totalLines = 1;
        this.lineHeights = [];
        return;
      }

      const content = this.selectedNote.content || '';
      // Count logical lines (separated by newlines) - NOT visual wrapped lines
      const logicalLines = content.split('\n');
      this.totalLines = logicalLines.length > 0 ? logicalLines.length : 1;
      
      const computedStyle = window.getComputedStyle(textarea);
      const lineHeight = parseFloat(computedStyle.lineHeight) || 24;
      
      // When wrapping is enabled, calculate actual height of each logical line
      if (this.isTextWrapped) {
        this.calculateLogicalLineHeights(textarea, computedStyle, logicalLines, lineHeight);
      } else {
        // When unwrapped, each logical line is one lineHeight
        this.lineHeights = [];
        if (lineNumbersEl) {
          const lineNumberElements = lineNumbersEl.querySelectorAll('.line-number');
          lineNumberElements.forEach(el => {
            (el as HTMLElement).style.height = '';
            (el as HTMLElement).style.minHeight = '';
          });
        }
      }
      
      // Ensure line numbers container content height matches textarea scrollHeight
      // The container itself should auto-size to visible area, but content should match scrollHeight
      if (lineNumbersEl) {
        // Remove fixed height constraints - let container size naturally to visible area
        lineNumbersEl.style.height = '';
        lineNumbersEl.style.minHeight = '';
        lineNumbersEl.style.maxHeight = '';
        
        // Ensure the line numbers content wrapper matches textarea scrollHeight
        const contentWrapper = lineNumbersEl.querySelector('.line-numbers-content') as HTMLElement;
        if (contentWrapper) {
          // Set content height to match textarea's total scrollable height
          contentWrapper.style.minHeight = `${textarea.scrollHeight}px`;
        }
        
        // Sync scroll multiple times to ensure it works even with large content
        requestAnimationFrame(() => {
          this.syncScroll();
          // Double-check sync after a brief delay for large content
          setTimeout(() => {
            this.syncScroll();
          }, 50);
        });
      }
    }, 0);
  }

  calculateLogicalLineHeights(textarea: HTMLTextAreaElement, computedStyle: CSSStyleDeclaration, logicalLines: string[], lineHeight: number): void {
    const textareaWidth = textarea.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
    
    // Create a temporary measuring element
    const measurer = document.createElement('div');
    measurer.style.position = 'absolute';
    measurer.style.visibility = 'hidden';
    measurer.style.height = 'auto';
    measurer.style.width = `${textareaWidth}px`;
    measurer.style.fontSize = computedStyle.fontSize;
    measurer.style.fontFamily = computedStyle.fontFamily;
    measurer.style.lineHeight = computedStyle.lineHeight;
    measurer.style.whiteSpace = 'pre-wrap';
    measurer.style.wordWrap = 'break-word';
    measurer.style.overflowWrap = 'break-word';
    measurer.style.padding = '0';
    measurer.style.margin = '0';
    document.body.appendChild(measurer);
    
    // Calculate actual height of each logical line (which may wrap to multiple visual lines)
    const heights: number[] = [];
    logicalLines.forEach((line) => {
      measurer.textContent = line || ' '; // Use space for empty lines
      const height = measurer.offsetHeight;
      heights.push(Math.max(lineHeight, height)); // At least one line height
    });
    
    // Clean up
    document.body.removeChild(measurer);
    
    this.lineHeights = heights;
    
    // Apply heights to line number elements
    setTimeout(() => {
      const lineNumbersEl = this.lineNumbers?.nativeElement;
      const textarea = this.contentArea?.nativeElement;
      if (lineNumbersEl && textarea) {
        const lineNumberElements = lineNumbersEl.querySelectorAll('.line-number');
        lineNumberElements.forEach((el, index) => {
          if (this.lineHeights[index]) {
            (el as HTMLElement).style.height = `${this.lineHeights[index]}px`;
            (el as HTMLElement).style.minHeight = `${this.lineHeights[index]}px`;
          }
        });
        // After applying heights, ensure container can scroll properly
        // Set content wrapper height to match textarea scrollHeight
        const contentWrapper = lineNumbersEl.querySelector('.line-numbers-content') as HTMLElement;
        if (contentWrapper) {
          contentWrapper.style.minHeight = `${textarea.scrollHeight}px`;
        }
        // Sync scroll position immediately
        requestAnimationFrame(() => {
          this.syncScroll();
        });
      }
    }, 10);
  }

  getLineNumbers(): number[] {
    return Array.from({ length: this.totalLines }, (_, i) => i + 1);
  }

  syncScroll(): void {
    const textarea = this.contentArea?.nativeElement;
    const lineNumbersEl = this.lineNumbers?.nativeElement;
    
    if (textarea && lineNumbersEl) {
      // Sync scroll positions exactly - both have same padding (12px top/bottom)
      // so scrollTop should match directly
      // Use direct assignment for immediate sync during scroll events
      const scrollTop = textarea.scrollTop;
      if (lineNumbersEl.scrollTop !== scrollTop) {
        lineNumbersEl.scrollTop = scrollTop;
      }
    }
  }

  syncScrollFromLineNumbers(): void {
    const textarea = this.contentArea?.nativeElement;
    const lineNumbersEl = this.lineNumbers?.nativeElement;
    
    if (textarea && lineNumbersEl) {
      // Sync textarea scroll when line numbers are scrolled
      // Use direct assignment for immediate sync during scroll events
      textarea.scrollTop = lineNumbersEl.scrollTop;
    }
  }

  // URL management methods
  async loadNoteUrls(): Promise<void> {
    if (!this.selectedNote || !this.selectedNote.id || this.selectedNote.id === 0) {
      this.noteUrls = [];
      return;
    }

    this.loadingUrls = true;
    try {
      this.noteUrls = await this.notesService.getNoteUrls(this.selectedNote.id);
      // Also load available URLs for the note's category
      await this.loadAvailableUrls();
    } catch (err: any) {
      this.toaster.error(err?.message || 'Failed to load URLs');
      this.noteUrls = [];
    } finally {
      this.loadingUrls = false;
    }
  }

  async loadAvailableUrls(): Promise<void> {
    if (!this.selectedNote || !this.selectedNote.categoryId) {
      this.availableUrls = [];
      return;
    }

    try {
      const urls = await this.notesService.getAvailableUrls(this.selectedNote.categoryId);
      // Filter out URLs that are already added to the note
      const existingUrlIds = this.noteUrls.map(u => u.url_id);
      this.availableUrls = urls.filter(u => !existingUrlIds.includes(u.url_id));
    } catch (err: any) {
      console.warn('Failed to load available URLs:', err);
      this.availableUrls = [];
    }
  }

  async addUrlToNote(): Promise<void> {
    if (!this.selectedNote || !this.selectedNote.id || this.selectedNote.id === 0) {
      this.toaster.warn('Please save the note first before adding URLs');
      return;
    }

    if (!this.selectedUrlId) {
      this.toaster.warn('Please select a URL to add');
      return;
    }

    try {
      await this.notesService.addUrlToNote(this.selectedNote.id, this.selectedUrlId);
      this.toaster.success('URL added successfully');
      this.selectedUrlId = null;
      this.showAddUrlDropdown = false;
      await this.loadNoteUrls();
    } catch (err: any) {
      this.toaster.error(err?.message || 'Failed to add URL');
    }
  }

  async removeUrlFromNote(urlId: number): Promise<void> {
    if (!this.selectedNote || !this.selectedNote.id || this.selectedNote.id === 0) {
      return;
    }

    const confirmed = await this.confirmation.confirm({
      title: 'Remove URL',
      message: 'Are you sure you want to remove this URL from the note?',
      confirmText: 'Remove',
      cancelText: 'Cancel',
      confirmClass: 'danger'
    });

    if (!confirmed) return;

    try {
      await this.notesService.removeUrlFromNote(this.selectedNote.id, urlId);
      this.toaster.success('URL removed successfully');
      await this.loadNoteUrls();
    } catch (err: any) {
      this.toaster.error(err?.message || 'Failed to remove URL');
    }
  }

  openUrl(url: string): void {
    if (url) {
      // Ensure URL has protocol
      let urlToOpen = url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        urlToOpen = 'https://' + url;
      }
      window.open(urlToOpen, '_blank', 'noopener,noreferrer');
    }
  }

  toggleAddUrlDropdown(): void {
    if (!this.selectedNote || !this.selectedNote.categoryId) {
      this.toaster.warn('Please select a category first');
      return;
    }
    this.showAddUrlDropdown = !this.showAddUrlDropdown;
    if (this.showAddUrlDropdown) {
      // Calculate dropdown position relative to the button
      this.calculateDropdownPosition();
      if (this.availableUrls.length === 0) {
        this.loadAvailableUrls();
      }
    }
  }

  calculateDropdownPosition(): void {
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      const button = document.querySelector('.btn-add-url-compact') as HTMLElement;
      if (button) {
        const rect = button.getBoundingClientRect();
        const dropdownWidth = 300; // min-width of dropdown
        const dropdownMaxHeight = 300; // max-height of dropdown
        const screenPadding = 16; // Minimum padding from screen edge
        const margin = 4; // Margin between button and dropdown
        
        // Check available space in all directions
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;
        
        // Always prefer positioning above the button (top-left direction)
        // since page is not scrollable and button is at bottom-right
        let calculatedTop: number;
        if (spaceAbove >= dropdownMaxHeight) {
          // Position above the button
          calculatedTop = rect.top - dropdownMaxHeight - margin;
          // Ensure it doesn't go above the viewport
          if (calculatedTop < screenPadding) {
            calculatedTop = screenPadding;
          }
        } else if (spaceAbove > spaceBelow) {
          // Position above but adjust height if needed
          calculatedTop = Math.max(screenPadding, rect.top - Math.min(dropdownMaxHeight, spaceAbove - margin));
        } else {
          // Fallback: position below if there's more space there
          calculatedTop = rect.bottom + margin;
        }
        
        // Position to the left of button (top-left direction)
        // Calculate right position from the left edge of button
        let calculatedRight: number;
        if (spaceLeft >= dropdownWidth) {
          // Position to the left of button
          calculatedRight = window.innerWidth - rect.left;
        } else if (spaceLeft > spaceRight) {
          // Position to the left but adjust if needed
          calculatedRight = window.innerWidth - Math.max(screenPadding, rect.left - dropdownWidth + screenPadding);
        } else {
          // Fallback: position to the right of button
          const rightPosition = window.innerWidth - rect.right;
          calculatedRight = Math.max(screenPadding, rightPosition);
        }
        
        this.dropdownPosition = {
          top: calculatedTop,
          right: calculatedRight
        };
      }
    }, 0);
  }

  closeAddUrlDropdown(): void {
    this.showAddUrlDropdown = false;
  }

  getCredentialTooltip(credentials: CredentialInfo[]): string {
    if (!credentials || credentials.length === 0) return '';
    return credentials.map(cred => 
      `${cred.credential_id || cred.id || ''} - ${cred.credential_name || ''}`
    ).filter(text => text.trim()).join('\n');
  }
}


