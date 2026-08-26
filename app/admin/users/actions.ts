"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

type State = {
  error: string;
  success: string;
};

export async function createAdminUser(
  prevState: State,
  formData: FormData
): Promise<State> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      error: "يرجى إدخال البريد الإلكتروني وكلمة المرور.",
      success: "",
    };
  }

  if (password.length < 6) {
    return {
      error: "كلمة المرور يجب أن تكون 6 أحرف على الأقل.",
      success: "",
    };
  }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );

  const { error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    return {
      error: error.message,
      success: "",
    };
  }

  revalidatePath("/admin/users");

  return {
    error: "",
    success: "تم إنشاء حساب الأدمن بنجاح.",
  };
}