"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function updateProduct(formData: FormData) {
  const supabase = await createClient();
  

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const description = formData.get("description") as string;

  const image = formData.get("image") as File;
  

  let imageUrl: string | undefined;

  if (image && image.size > 0) {
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

  const { data, error } = await supabase
  .from("products")
  .update(updateData)
  .eq("id", id)
  .select();



  if (error) {
    throw new Error(error.message);
  }
  redirect("/admin/products");
}