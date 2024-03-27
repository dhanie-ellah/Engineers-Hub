import supabase from "../../Config/supabase";

const supabaseConnect = supabase(); //initialized supabase class

export function updateDetails(data) {
  return supabaseConnect.auth.updateUser({
    data,
  });
}

// TO update the user's Information
export function updateuserPublic({ email, data }) {
  return supabaseConnect
    .from("user_public")
    .update({ extra_data: data })
    .eq("email", email)
    .select();
}

// TO update about the user
export function updateAboutPublic({ email, data }) {
  return supabaseConnect
    .from("user_public")
    .update({ about: data })
    .eq("email", email)
    .select();
}

// TO update the user's Experience
export function updateExperiencePublic({ email, data }) {
  return supabaseConnect
    .from("user_public")
    .update({ experience: data })
    .eq("email", email)
    .select();
}

// TO update the user's Education
export function updateEducationPublic({ email, data }) {
  return supabaseConnect
    .from("user_public")
    .update({ education: data })
    .eq("email", email)
    .select();
}

// TO update the user's Skill
export function updateSkillPublic({ email, data }) {
  return supabaseConnect
    .from("user_public")
    .update({ skills: data })
    .eq("email", email)
    .select();
}

