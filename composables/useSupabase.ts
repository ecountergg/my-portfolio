import { createClient } from "@supabase/supabase-js";
import { useRuntimeConfig } from "#imports";

import { Database } from "@/types/database.types";

export const useSupabase = () => {
  const runtimeConfig = useRuntimeConfig();

  const supabase = createClient<Database>(
    runtimeConfig.public.supabase.url,
    runtimeConfig.public.supabase.key,
  );

  return {
    supabase,
  };
};
