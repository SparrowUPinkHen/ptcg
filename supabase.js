const SUPABASE_URL = "https://iwjurjlsochgqnicohpd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3anVyamxzb2NoZ3FuaWNvaHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1ODI5NjEsImV4cCI6MjA5NjE1ODk2MX0.4yZCQFqmCDLLuK90YqfkI3hIONplpSHh1zrqc-wSkbo";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);