import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

import { updateOrderStatus } from "./actions";

function getStatusLabel(status: string | null) {
  switch (status) {
    case "new":
      return "طلب جديد";

    case "pending":
      return "قيد المراجعة";

    case "accepted":
      return "مقبول";

    case "completed":
      return "مكتمل";

    case "cancelled":
      return "ملغي";

    default:
      return status || "جديد";
  }
}

function getStatusStyle(status: string | null) {
  switch (status) {
    case "completed":
      return "border-green-200 bg-green-50 text-green-700";

    case "cancelled":
      return "border-red-200 bg-red-50 text-red-700";

    case "accepted":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";

    case "new":
      return "border-blue-200 bg-blue-50 text-blue-700";

    case "pending":
      return "border-orange-200 bg-orange-50 text-orange-700";

    default:
      return "border-slate-200 bg-slate-50 text-slate-700";
  }
}

function getStatusDot(status: string | null) {
  switch (status) {
    case "completed":
      return "bg-green-500";

    case "cancelled":
      return "bg-red-500";

    case "accepted":
      return "bg-emerald-500";

    case "new":
      return "bg-blue-500";

    case "pending":
      return "bg-orange-500";

    default:
      return "bg-slate-400";
  }
}

function getOrderNumber(id: string) {
  return id.length > 8 ? id.slice(-8).toUpperCase() : id;
}

export default async function OrdersPage() {
  const supabase = await createClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div dir="rtl" className="p-4 sm:p-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
          <h2 className="font-bold">حدث خطأ في تحميل الطلبات</h2>

          <p className="mt-2 text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  const allOrders = orders ?? [];

  /*
   * الكمية موجودة في order_items وليس orders.
   * لذلك نجلب جميع عناصر الطلبات مرة واحدة ونحسب الكمية لكل طلب.
   */
  const orderIds = allOrders.map((order) => order.id);

  const { data: orderItems } =
    orderIds.length > 0
      ? await supabase
          .from("order_items")
          .select("order_id, quantity")
          .in("order_id", orderIds)
      : { data: [] };

  const quantityByOrder: Record<string, number> = {};

  for (const item of orderItems ?? []) {
    const orderId = item.order_id;

    quantityByOrder[orderId] =
      (quantityByOrder[orderId] || 0) + Number(item.quantity || 0);
  }

  const totalOrders = allOrders.length;

  const newOrders = allOrders.filter(
    (order) =>
      order.status === "new" ||
      order.status === "pending" ||
      !order.status
  ).length;

  const acceptedOrders = allOrders.filter(
    (order) => order.status === "accepted"
  ).length;

  const completedOrders = allOrders.filter(
    (order) => order.status === "completed"
  ).length;

  const cancelledOrders = allOrders.filter(
    (order) => order.status === "cancelled"
  ).length;

  return (
    <div
      dir="rtl"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50"
    >
      {/* =========================
          Header
      ========================== */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full bg-[#024949]/10 px-3 py-1.5 text-xs font-black text-[#024949]">
                إدارة الطلبات
              </div>

              <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                طلبات العملاء
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                متابعة وإدارة جميع الطلبات الواردة من العملاء بشكل سريع وواضح.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3">
              <span className="text-xl">📦</span>

              <div>
                <p className="text-xs font-bold text-slate-400">
                  إجمالي الطلبات
                </p>

                <p className="text-lg font-black text-slate-900">
                  {totalOrders}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          Statistics
      ========================== */}
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-400 sm:text-sm">
                  إجمالي الطلبات
                </p>

                <p className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  {totalOrders}
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
                📦
              </div>
            </div>

            <p className="mt-2 text-[11px] text-slate-400 sm:text-xs">
              جميع الطلبات المسجلة
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-400 sm:text-sm">
                  تحتاج مراجعة
                </p>

                <p className="mt-2 text-2xl font-black text-orange-500 sm:text-3xl">
                  {newOrders}
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg">
                ⏳
              </div>
            </div>

            <p className="mt-2 text-[11px] text-orange-400 sm:text-xs">
              طلبات جديدة
            </p>
          </div>

          {/* Accepted */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-400 sm:text-sm">
                  الطلبات المقبولة
                </p>

                <p className="mt-2 text-2xl font-black text-emerald-600 sm:text-3xl">
                  {acceptedOrders}
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg">
                ✓
              </div>
            </div>

            <p className="mt-2 text-[11px] text-emerald-500 sm:text-xs">
              تم قبولها
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-400 sm:text-sm">
                  الطلبات المكتملة
                </p>

                <p className="mt-2 text-2xl font-black text-green-600 sm:text-3xl">
                  {completedOrders}
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-lg">
                ✅
              </div>
            </div>

            <p className="mt-2 text-[11px] text-green-500 sm:text-xs">
              تم إنجازها
            </p>
          </div>
        </div>

        {/* =========================
            Orders List
        ========================== */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* List Header */}
          <div className="border-b border-slate-100 bg-white p-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-black text-slate-900 sm:text-xl">
                  قائمة الطلبات
                </h2>

                <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm">
                  اضغط على أي طلب لعرض جميع تفاصيله.
                </p>
              </div>

              <div className="w-fit rounded-full bg-[#024949]/10 px-4 py-2 text-xs font-black text-[#024949] sm:text-sm">
                {totalOrders} طلب
              </div>
            </div>
          </div>

          {allOrders.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">
                📦
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-800">
                لا توجد طلبات حاليًا
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                ستظهر طلبات العملاء هنا عند وصولها.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {allOrders.map((order) => {
                const quantity = quantityByOrder[order.id] || 0;

                const orderDate = order.created_at
                  ? new Date(order.created_at).toLocaleDateString("ar-LY")
                  : "-";

                const orderTime = order.created_at
                  ? new Date(order.created_at).toLocaleTimeString("ar-LY", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "";

                return (
                  <div
                    key={order.id}
                    className="group relative bg-white p-4 transition hover:bg-slate-50/80 sm:p-5 lg:p-6"
                  >
                    {/* Main clickable information */}
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="block rounded-2xl outline-none focus-visible:ring-4 focus-visible:ring-[#024949]/10"
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        {/* Customer */}
                        <div className="min-w-0 flex-1">
                          <div className="flex min-w-0 items-start gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#024949] text-lg font-black text-white shadow-sm">
                              {(order.customer_name || "ع")
                                .trim()
                                .charAt(0)}
                            </div>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="break-words text-base font-black text-slate-900 sm:text-lg">
                                  {order.customer_name || "عميل"}
                                </h3>

                                <span
                                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-black sm:text-xs ${getStatusStyle(
                                    order.status
                                  )}`}
                                >
                                  <span
                                    className={`h-1.5 w-1.5 rounded-full ${getStatusDot(
                                      order.status
                                    )}`}
                                  />

                                  {getStatusLabel(order.status)}
                                </span>
                              </div>

                              <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
                                طلب #{getOrderNumber(order.id)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Quick Information */}
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[620px]">
                          {/* Phone */}
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-[10px] font-bold text-slate-400 sm:text-xs">
                              الهاتف
                            </p>

                            <p className="mt-1 break-words text-xs font-black text-slate-700 sm:text-sm">
                              {order.phone || "-"}
                            </p>
                          </div>

                          {/* City */}
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-[10px] font-bold text-slate-400 sm:text-xs">
                              المدينة
                            </p>

                            <p className="mt-1 break-words text-xs font-black text-slate-700 sm:text-sm">
                              {order.city || "-"}
                            </p>
                          </div>

                          {/* Quantity */}
                          <div className="rounded-2xl bg-[#024949]/5 p-3">
                            <p className="text-[10px] font-bold text-slate-400 sm:text-xs">
                              الكمية
                            </p>

                            <p className="mt-1 text-sm font-black text-[#024949] sm:text-base">
                              {quantity > 0 ? quantity : "—"}
                            </p>
                          </div>

                          {/* Date */}
                          <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-[10px] font-bold text-slate-400 sm:text-xs">
                              التاريخ
                            </p>

                            <p className="mt-1 text-xs font-black text-slate-700 sm:text-sm">
                              {orderDate}
                            </p>

                            {orderTime && (
                              <p className="mt-0.5 text-[10px] text-slate-400">
                                {orderTime}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden shrink-0 items-center justify-center rounded-2xl bg-slate-100 px-4 py-3 text-sm font-black text-slate-600 transition group-hover:bg-[#024949] group-hover:text-white lg:flex">
                          عرض التفاصيل
                          <span className="mr-2 text-lg">←</span>
                        </div>
                      </div>
                    </Link>

                    {/* Actions */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                      {/* Accept */}
                      {(order.status === "new" ||
                        order.status === "pending" ||
                        !order.status) && (
                        <form action={updateOrderStatus}>
                          <input
                            type="hidden"
                            name="orderId"
                            value={order.id}
                          />

                          <input
                            type="hidden"
                            name="status"
                            value="accepted"
                          />

                          <button
                            type="submit"
                            className="rounded-xl bg-emerald-50 px-4 py-2.5 text-xs font-black text-emerald-700 transition hover:bg-emerald-100 active:scale-[0.98]"
                          >
                            ✓ قبول الطلب
                          </button>
                        </form>
                      )}

                      {/* Complete */}
                      {order.status === "accepted" && (
                        <form action={updateOrderStatus}>
                          <input
                            type="hidden"
                            name="orderId"
                            value={order.id}
                          />

                          <input
                            type="hidden"
                            name="status"
                            value="completed"
                          />

                          <button
                            type="submit"
                            className="rounded-xl bg-blue-50 px-4 py-2.5 text-xs font-black text-blue-700 transition hover:bg-blue-100 active:scale-[0.98]"
                          >
                            ✓ تحديد كمكتمل
                          </button>
                        </form>
                      )}

                      {/* Cancel */}
                      {order.status !== "cancelled" &&
                        order.status !== "completed" && (
                          <form action={updateOrderStatus}>
                            <input
                              type="hidden"
                              name="orderId"
                              value={order.id}
                            />

                            <input
                              type="hidden"
                              name="status"
                              value="cancelled"
                            />

                            <button
                              type="submit"
                              className="rounded-xl bg-red-50 px-4 py-2.5 text-xs font-black text-red-700 transition hover:bg-red-100 active:scale-[0.98]"
                            >
                              ✕ إلغاء الطلب
                            </button>
                          </form>
                        )}

                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="mr-auto rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-700 transition hover:bg-slate-200 active:scale-[0.98]"
                      >
                        👁 التفاصيل
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}