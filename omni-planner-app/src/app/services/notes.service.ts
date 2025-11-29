import { Injectable } from '@angular/core';
import { Note, NoteFilters, NoteUrl } from '../models/note';

import { API_CONFIG } from '../shared/config/api.config';
const BASE_URL = API_CONFIG.notes.baseUrl;

@Injectable({ providedIn: 'root' })
export class NotesService {
  async getNotes(filters: NoteFilters): Promise<Note[]> {
    const params = new URLSearchParams();
    if (filters.search) params.set('q', filters.search);
    if (filters.categoryId != null) params.set('categoryId', String(filters.categoryId));
    if (filters.createdFrom) params.set('createdFrom', filters.createdFrom);
    if (filters.createdTo) params.set('createdTo', filters.createdTo);
    if (filters.important && filters.important !== 'all') params.set('important', filters.important);
    // Always send sort parameter, default to createdOn_desc if not provided
    params.set('sort', filters.sort || 'createdOn_desc');
    const url = `${BASE_URL}?${params.toString()}`;
    console.log('Fetching notes with sort:', filters.sort, 'URL:', url);
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load notes');
    const body = await res.json();
    return Array.isArray(body) ? body : body?.data ?? [];
  }

  async createNote(note: Note): Promise<{ data: Note; message: string; success: boolean }> {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    });
    if (!res.ok) throw new Error('Failed to create note');
    const body = await res.json();
    if (body && body.success === false) throw new Error(body.message || 'Failed to create note');
    return { data: body?.data ?? body, message: body?.message || 'Created', success: body?.success ?? true };
  }

  async updateNote(note: Note): Promise<{ data: Note; message: string; success: boolean }> {
    const res = await fetch(`${BASE_URL}/${note.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    });
    if (!res.ok) throw new Error('Failed to update note');
    const body = await res.json();
    if (body && body.success === false) throw new Error(body.message || 'Failed to update note');
    return { data: body?.data ?? body, message: body?.message || 'Updated', success: body?.success ?? true };
  }

  async deleteNote(id: number): Promise<{ message: string; success: boolean }> {
    const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete note');
    const body = await res.json();
    if (body && body.success === false) throw new Error(body.message || 'Failed to delete note');
    return { message: body?.message || 'Deleted', success: body?.success ?? true };
  }

  // Note-URL relationship methods
  async getNoteUrls(noteId: number): Promise<NoteUrl[]> {
    const res = await fetch(`${BASE_URL}/${noteId}/urls`);
    if (!res.ok) throw new Error('Failed to load note URLs');
    const body = await res.json();
    return Array.isArray(body.data) ? body.data : body?.data ?? [];
  }

  async addUrlToNote(noteId: number, urlId: number): Promise<{ message: string; success: boolean }> {
    const res = await fetch(`${BASE_URL}/${noteId}/urls/${urlId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!res.ok) throw new Error('Failed to add URL to note');
    const body = await res.json();
    if (body && body.success === false) throw new Error(body.message || 'Failed to add URL to note');
    return { message: body?.message || 'URL added', success: body?.success ?? true };
  }

  async removeUrlFromNote(noteId: number, urlId: number): Promise<{ message: string; success: boolean }> {
    const res = await fetch(`${BASE_URL}/${noteId}/urls/${urlId}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to remove URL from note');
    const body = await res.json();
    if (body && body.success === false) throw new Error(body.message || 'Failed to remove URL from note');
    return { message: body?.message || 'URL removed', success: body?.success ?? true };
  }

  async getAvailableUrls(categoryId: number | null): Promise<NoteUrl[]> {
    const params = new URLSearchParams();
    if (categoryId != null) params.set('categoryId', String(categoryId));
    const url = `${BASE_URL}/urls/available?${params.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load available URLs');
    const body = await res.json();
    return Array.isArray(body.data) ? body.data : body?.data ?? [];
  }
}


