"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateOrderStatus(formData: FormData) {
  const orderId = String(formData.get("orderId") || "");
  const status = String(formData.get("status") || "");

  // التأكد من وجود رقم الطلب
  if (!orderId) {
    console.error("Order ID is missing");
    return;
  }

  // الحالات المسموح بها
  if (
    !["new", "pending", "accepted", "completed", "cancelled"].includes(
      status
    )
  ) {
    console.error("Invalid order status:", status);
    return;
  }

  const supabase = await createClient();

  // تحديث حالة الطلب
  const { error } = await supabase
    .from("orders")
    .update({
      status,
    })
    .eq("id", orderId);

  if (error) {
    console.error("Failed to update order status:", error);
    return;
  }

  // تحديث الصفحات بعد تغيير الحالة
  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${orderId}`);
  revalidatePath("/admin/reports");
}