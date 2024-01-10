import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gadfweosdyuwrvxjqlbr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZGZ3ZW9zZHl1d3J2eGpxbGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjY1MjYsImV4cCI6MjAxOTU0MjUyNn0.fZ5t8kCqbGcoJjQAlMo6vI8ya1Pb6YQ6PptQ8lM4Dbc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
