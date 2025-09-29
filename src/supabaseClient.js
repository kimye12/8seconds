import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sodjsejkhxfffwdxarym.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZGpzZWpraHhmZmZ3ZHhhcnltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODQwODEsImV4cCI6MjA3MDA2MDA4MX0.RPIuKPwUtddhF894yf8ZlbEJuLJ-ah_WxnrkDlHyT5I";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
