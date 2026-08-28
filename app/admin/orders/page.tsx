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
      return "bg-green-50 text-green-700 border-green-200";

    case "cancelled":
      return "bg-red-50 text-red-700 border-red-200";

    case "accepted":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";

    case "new":
      return "bg-blue-50 text-blue-700 border-blue-200";

    case "pending":
      return "bg-orange-50 text-orange-700 border-orange-200";

    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
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

export default async function OrdersPage() {
  const supabase = await createClient();

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div dir="rtl" className="p-8">
        <div className="rounded-2xl bg-red-50 p-6 text-red-700">
          <h2 className="font-bold">حدث خطأ في تحميل الطلبات</h2>

          <p className="mt-2 text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  const allOrders = orders ?? [];

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
    <div dir="rtl" className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-7">

          <p className="text-sm font-semibold text-teal-600">
            إدارة الطلبات
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            طلبات العملاء
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            متابعة وإدارة جميع الطلبات الواردة من العملاء.
          </p>

        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6">

        {/* Statistics */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

          {/* Total */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              إجمالي الطلبات
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {totalOrders}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              جميع الطلبات المسجلة
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              تحتاج إلى مراجعة
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-500">
              {newOrders}
            </p>

            <p className="mt-1 text-xs text-orange-400">
              طلبات جديدة
            </p>
          </div>

          {/* Accepted */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              الطلبات المقبولة
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-600">
              {acceptedOrders}
            </p>

            <p className="mt-1 text-xs text-emerald-500">
              تم قبولها
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              الطلبات المكتملة
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {completedOrders}
            </p>

            <p className="mt-1 text-xs text-green-500">
              تم إنجازها
            </p>
          </div>

          {/* Cancelled */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              الطلبات الملغاة
            </p>

            <p className="mt-2 text-3xl font-bold text-red-600">
              {cancelledOrders}
            </p>

            <p className="mt-1 text-xs text-red-400">
              الطلبات الملغاة
            </p>
          </div>

        </div>

        {/* Orders */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Title */}
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  قائمة الطلبات
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  أحدث الطلبات التي وصلت إلى النظام.
                </p>
              </div>

              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                {totalOrders} طلب
              </div>

            </div>
          </div>

          {allOrders.length === 0 ? (

            <div className="px-6 py-20 text-center text-slate-500">
              لا توجد طلبات حاليًا.
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[1100px]">

                <thead className="bg-slate-50">
                  <tr className="border-b border-slate-200">

                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                      العميل
                    </th>

                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                      الهاتف
                    </th>

                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                      المدينة
                    </th>

                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                      الكمية
                    </th>

                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                      الملاحظات
                    </th>

                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                      الحالة
                    </th>

                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                      الإجراءات
                    </th>

                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                      التاريخ
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {allOrders.map((order) => (

                    <tr
                      key={order.id}
                      className="border-b border-slate-100 transition hover:bg-slate-50"
                    >

                      {/* Customer */}
                      <td className="px-6 py-5">

                        <Link
                          href={`/admin/orders/${order.id}`}
                          className="font-semibold text-teal-700 hover:underline"
                        >
                          {order.customer_name || "عميل"}
                        </Link>

                        <p className="mt-1 text-xs text-slate-400">
                          طلب #{order.id}
                        </p>

                      </td>

                      {/* Phone */}
                      <td className="px-6 py-5 text-sm text-slate-700">
                        {order.phone || "-"}
                      </td>

                      {/* City */}
                      <td className="px-6 py-5 text-sm text-slate-700">
                        {order.city || "-"}
                      </td>

                      {/* Quantity */}
                      <td className="px-6 py-5 text-center">

                        <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                          {order.quantity || 0}
                        </span>

                      </td>

                      {/* Notes */}
                      <td className="max-w-xs px-6 py-5">

                        <p className="line-clamp-2 text-sm leading-6 text-slate-500">
                          {order.notes || "لا توجد ملاحظات"}
                        </p>

                      </td>

                      {/* Status */}
                      <td className="px-6 py-5 text-center">

                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                            order.status
                          )}`}
                        >

                          <span
                            className={`h-2 w-2 rounded-full ${getStatusDot(
                              order.status
                            )}`}
                          />

                          {getStatusLabel(order.status)}

                        </span>

                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">

                        <div className="flex flex-wrap items-center justify-center gap-2">

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
                                className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                              >
                                ✓ قبول
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
                                className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                              >
                                ✓ مكتمل
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
                                className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-700 transition hover:bg-red-100"
                              >
                                ✕ إلغاء
                              </button>

                            </form>

                          )}

                          {/* Details */}
                          <Link
                            href={`/admin/orders/${order.id}`}
                            className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-200"
                          >
                            👁 التفاصيل
                          </Link>

                        </div>

                      </td>

                      {/* Date */}
                      <td className="px-6 py-5">

                        <div className="text-sm text-slate-600">

                          {order.created_at
                            ? new Date(
                                order.created_at
                              ).toLocaleDateString("ar-LY")
                            : "-"}

                          <p className="mt-1 text-xs text-slate-400">

                            {order.created_at
                              ? new Date(
                                  order.created_at
                                ).toLocaleTimeString("ar-LY", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : ""}

                          </p>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}