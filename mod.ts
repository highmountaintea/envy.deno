import { load as stdload } from "https://deno.land/std/dotenv/mod.ts";

export async function load() {
  const dotenv = await stdload();
  const env = Deno.env.toObject();
  return { ...dotenv, ...env };
}
