import { supabase } from "../lib/supabaseClient";

/* ---------------- READ LIST ---------------- */
export async function getCrewmates() {
  const { data, error } = await supabase
    .from("crewmates")
    .select("*")
    .order("name");
  if (error) throw error;
  return data;               // <- array
}

/* ---------------- READ ONE ----------------- */
export async function getCrewmate(id) {
  const { data, error } = await supabase
    .from("crewmates")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;               // <- row object
}

/* ---------------- CREATE ------------------- */
export async function createCrewmate({ name, color, class: cls }) {
  const { data, error } = await supabase
    .from("crewmates")
    .insert({ name, color, class: cls })
    .select()
    .single();
  if (error) throw error;
  return data;
}

/* ---------------- UPDATE ------------------- */
export async function updateCrewmate(id, fields) {
  const { data, error } = await supabase
    .from("crewmates")
    .update(fields)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

/* ---------------- DELETE ------------------- */
export async function deleteCrewmate(id) {
  const { error } = await supabase.from("crewmates").delete().eq("id", id);
  if (error) throw error;
}
