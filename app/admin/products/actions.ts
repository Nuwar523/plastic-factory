"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function deleteProduct(id: number) {
  const supabase = await createClient();

  await supabase
    .from("products")
    .delete()
    .eq("id", id);

  redirect("/admin/products");
}