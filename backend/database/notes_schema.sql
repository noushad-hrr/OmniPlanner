-- PostgreSQL schema for Notes Management

create table if not exists notes (
    id serial primary key,
    title text not null default '',
    content text not null default '',
    category_id int null references category_master(id) on delete set null,
    created_on timestamptz not null default now(),
    updated_on timestamptz null
);

create index if not exists ix_notes_category_id on notes(category_id);
create index if not exists ix_notes_created_on on notes(created_on desc);
-- Enforce case-insensitive unique titles per category (null category treated as its own group)
do $$ begin
    if exists (select 1 from pg_class c join pg_namespace n on n.oid=c.relnamespace where c.relkind='i' and c.relname='ix_notes_title_unique') then
        -- legacy global-title unique index: drop if present to switch to per-category uniqueness
        execute 'drop index if exists ix_notes_title_unique';
    end if;
    if not exists (select 1 from pg_class c join pg_namespace n on n.oid=c.relnamespace where c.relkind='i' and c.relname='ix_notes_category_title_unique') then
        create unique index ix_notes_category_title_unique on notes(coalesce(category_id, -1), lower(title));
    end if;
end $$;

-- Note: Categories are managed via category_master table


