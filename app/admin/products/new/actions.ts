"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const supabase = await createClient();

  // بيانات المنتج
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));

  // الصورة
  const imageFile = formData.get("image") as File;

  let imageUrl = "";

  if (imageFile && imageFile.size > 0) {
    const extension = imageFile.name.split(".").pop();

const fileName = `${Date.now()}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("products")
      .upload(fileName, imageFile);

   if (uploadError) {
  console.error(uploadError);
  throw new Error("فشل رفع الصورة");
}

    const { data } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

    imageUrl = data.publicUrl;
  }

  const { error } = await supabase.from("products").insert({
    name,
    description,
    price,
    category: "",
    stock: 0,
    image: imageUrl,
    status: "active",
  });

  if (error) {
    console.log(error);
    throw new Error("فشل حفظ المنتج");
  }

  redirect("/admin/products");
}

export async function deleteProduct(id: number) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
  }

  redirect("/admin/products");
}