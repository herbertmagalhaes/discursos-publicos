-- Execute este comando no Supabase > SQL Editor > New query.
-- Ele adiciona o status de envio sem apagar os oradores já cadastrados.
alter table public.oradores
add column if not exists convite_enviado boolean not null default false;
