"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function updateProduct(formData: FormData) {
  const supabase = await createClient();

  const id = String(formData.get("id") || "");
  const name = String(formData.get("name") || "");
  const price = Number(formData.get("price") || 0);
  const description = String(formData.get("description") || "");

  const image = formData.get("image");

  let imageUrl: string | undefined;

  if (image instanceof File && image.size > 0) {
    const fileName = `${Date.now()}-${image.name}`;

    const { error: uploadError } = await supabase.storage
      .from("products")
      .upload(fileName, image);

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const { data } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

    imageUrl = data.publicUrl;
  }

  const updateData: {
    name: string;
    price: number;
    description: string;
    image?: string;
  } = {
    name,
    price,
    description,
  };

  if (imageUrl) {
    updateData.image = imageUrl;
  }

  const { error } = await supabase
    .from("products")
    .update(updateData)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/admin/products");
}