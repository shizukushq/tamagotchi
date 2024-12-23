import { createClient } from "@supabase/supabase-js";

export default defineBackground(() => {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_API_URL,
    import.meta.env.VITE_SUPABASE_API_KEY
  );

  chrome.runtime.onInstalled.addListener(async (details) => {
    if (details.reason === "install") {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      const { data, error } = await supabase
        .from("users_count")
        .insert([{ first_use: formattedDate }]);
      if (error) {
        console.error("Supabase error:", error);
      }
    }
  });
});
