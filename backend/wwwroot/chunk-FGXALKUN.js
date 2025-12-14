import {
  API_CONFIG,
  Injectable,
  __async,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-OPSATDSU.js";

// src/app/services/notes.service.ts
var BASE_URL = API_CONFIG.notes.baseUrl;
var NotesService = class _NotesService {
  getNotes(filters) {
    return __async(this, null, function* () {
      const params = new URLSearchParams();
      if (filters.search)
        params.set("q", filters.search);
      if (filters.categoryId != null)
        params.set("categoryId", String(filters.categoryId));
      if (filters.createdFrom)
        params.set("createdFrom", filters.createdFrom);
      if (filters.createdTo)
        params.set("createdTo", filters.createdTo);
      if (filters.important && filters.important !== "all")
        params.set("important", filters.important);
      params.set("sort", filters.sort || "createdOn_desc");
      const url = `${BASE_URL}?${params.toString()}`;
      console.log("Fetching notes with sort:", filters.sort, "URL:", url);
      const res = yield fetch(url);
      if (!res.ok)
        throw new Error("Failed to load notes");
      const body = yield res.json();
      return Array.isArray(body) ? body : body?.data ?? [];
    });
  }
  createNote(note) {
    return __async(this, null, function* () {
      const res = yield fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
      });
      if (!res.ok)
        throw new Error("Failed to create note");
      const body = yield res.json();
      if (body && body.success === false)
        throw new Error(body.message || "Failed to create note");
      return { data: body?.data ?? body, message: body?.message || "Created", success: body?.success ?? true };
    });
  }
  updateNote(note) {
    return __async(this, null, function* () {
      const res = yield fetch(`${BASE_URL}/${note.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
      });
      if (!res.ok)
        throw new Error("Failed to update note");
      const body = yield res.json();
      if (body && body.success === false)
        throw new Error(body.message || "Failed to update note");
      return { data: body?.data ?? body, message: body?.message || "Updated", success: body?.success ?? true };
    });
  }
  deleteNote(id) {
    return __async(this, null, function* () {
      const res = yield fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok)
        throw new Error("Failed to delete note");
      const body = yield res.json();
      if (body && body.success === false)
        throw new Error(body.message || "Failed to delete note");
      return { message: body?.message || "Deleted", success: body?.success ?? true };
    });
  }
  // Note-URL relationship methods
  getNoteUrls(noteId) {
    return __async(this, null, function* () {
      const res = yield fetch(`${BASE_URL}/${noteId}/urls`);
      if (!res.ok)
        throw new Error("Failed to load note URLs");
      const body = yield res.json();
      return Array.isArray(body.data) ? body.data : body?.data ?? [];
    });
  }
  addUrlToNote(noteId, urlId) {
    return __async(this, null, function* () {
      const res = yield fetch(`${BASE_URL}/${noteId}/urls/${urlId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok)
        throw new Error("Failed to add URL to note");
      const body = yield res.json();
      if (body && body.success === false)
        throw new Error(body.message || "Failed to add URL to note");
      return { message: body?.message || "URL added", success: body?.success ?? true };
    });
  }
  removeUrlFromNote(noteId, urlId) {
    return __async(this, null, function* () {
      const res = yield fetch(`${BASE_URL}/${noteId}/urls/${urlId}`, { method: "DELETE" });
      if (!res.ok)
        throw new Error("Failed to remove URL from note");
      const body = yield res.json();
      if (body && body.success === false)
        throw new Error(body.message || "Failed to remove URL from note");
      return { message: body?.message || "URL removed", success: body?.success ?? true };
    });
  }
  getAvailableUrls(categoryId) {
    return __async(this, null, function* () {
      const params = new URLSearchParams();
      if (categoryId != null)
        params.set("categoryId", String(categoryId));
      const url = `${BASE_URL}/urls/available?${params.toString()}`;
      const res = yield fetch(url);
      if (!res.ok)
        throw new Error("Failed to load available URLs");
      const body = yield res.json();
      return Array.isArray(body.data) ? body.data : body?.data ?? [];
    });
  }
  static \u0275fac = function NotesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotesService, factory: _NotesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotesService
};
//# sourceMappingURL=chunk-FGXALKUN.js.map
