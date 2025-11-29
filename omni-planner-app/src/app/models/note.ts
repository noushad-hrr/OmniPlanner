export interface NoteCategory {
  id: number;
  name: string;
  icon?: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  categoryId: number | null;
  categoryName?: string;
  createdOn: Date;
  updatedOn: Date | null;
  important?: boolean;
}

export interface NoteFilters {
  search: string;
  categoryId: number | null;
  createdFrom: string | null; // yyyy-MM-dd
  createdTo: string | null;   // yyyy-MM-dd
  important: 'all' | 'starred' | 'non-starred'; // Filter by important status
  sort: 'id_asc' | 'id_desc' | 'createdOn_desc' | 'createdOn_asc' | 'updatedOn_asc' | 'updatedOn_desc' | 'categoryName_asc' | 'categoryName_desc' | 'title_asc' | 'title_desc';
}

export interface CredentialInfo {
  id: number;
  provider: string;
  credential_name: string;
  credential_id: string;
}

export interface NoteUrl {
  id: number;
  note_id: number;
  url_id: number;
  label: string;
  url: string;
  category_name?: string;
  category_icon?: string;
  created_on: Date;
  credentials?: CredentialInfo[];
}


