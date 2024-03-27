import supabase from "../../Config/supabase";

const supabaseConnect = supabase(); //initialized supabase class

export function signupPrivateService({ password, email }) {
  console.log("starting");
  return supabaseConnect.auth.signUp({
    email: email,
    password: password,
  });
}

export function SignupPublicService({ uuid, email }) {
  return supabaseConnect
    .from("user_public")
    .insert({
      email: email,
      uuid: uuid,
    })
    .select();
}
