-- 1. Buat tabel profiles
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  phone_number text,
  avatar_url text,
  updated_at timestamp with time zone default now(),
  created_at timestamp with time zone default now()
);

-- 2. Aktifkan Row Level Security (RLS)
alter table public.profiles enable row level security;

-- 3. Policy: Siapa saja bisa melihat profil (untuk keperluan internal/display)
-- Atau batasi: Hanya user pemilik yang bisa melihat
create policy "Users can view own profile" 
on public.profiles for select 
using (auth.uid() = id);

-- 4. Policy: User hanya bisa update profil mereka sendiri
create policy "Users can update own profile" 
on public.profiles for update 
using (auth.uid() = id);

-- Fungsi trigger
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Pasang trigger ke tabel auth.users
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();