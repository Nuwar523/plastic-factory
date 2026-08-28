import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { updateOrderStatus } from "../actions";

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
    case "accepted":
      return {
        box: "border-emerald-100 bg-emerald-50",
        text: "text-emerald-700",
        badge: "bg-emerald-100 text-emerald-700",
      };

    case "completed":
      return {
        box: "border-green-100 bg-green-50",
        text: "text-green-700",
        badge: "bg-green-100 text-green-700",
      };

    case "cancelled":
      return {
        box: "border-red-100 bg-red-50",
        text: "text-red-700",
        badge: "bg-red-100 text-red-700",
      };

    case "new":
      return {
        box: "border-blue-100 bg-blue-50",
        text: "text-blue-700",
        badge: "bg-blue-100 text-blue-700",
      };

    default:
      return {
        box: "border-orange-100 bg-orange-50",
        text: "text-orange-700",
        badge: "bg-orange-100 text-orange-700",
      };
  }
}

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  // Get order
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (orderError || !order) {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-slate-50 p-8"
      >
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm">

          <div className="text-5xl">
            😕
          </div>

          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            الطلب غير موجود
          </h1>

          <p className="mt-2 text-slate-500">
            لم نتمكن من العثور على هذا الطلب.
          </p>

          <Link
            href="/admin/orders"
            className="mt-6 inline-block rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
          >
            العودة إلى الطلبات
          </Link>

        </div>
      </main>
    );
  }

  // Get order item
  const { data: item } = await supabase
    .from("order_items")
    .select("*")
    .eq("order_id", order.id)
    .single();

  // Get product
  const { data: product } = item
    ? await supabase
        .from("products")
        .select("*")
        .eq("id", item.product_id)
        .single()
    : { data: null };

  const quantity = item?.quantity ?? 0;

  const statusLabel = getStatusLabel(order.status);

  const statusStyle = getStatusStyle(order.status);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-50 p-6 md:p-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm font-semibold text-teal-600">
              إدارة الطلبات
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              تفاصيل الطلب
            </h1>

            <p className="mt-2 text-slate-500">
              رقم الطلب #{order.id}
            </p>
          </div>

          <Link
            href="/admin/orders"
            className="w-fit rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            ← العودة إلى الطلبات
          </Link>

        </div>

        {/* Status */}
        <div
          className={`mb-6 rounded-2xl border p-5 ${statusStyle.box}`}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm text-slate-500">
                حالة الطلب
              </p>

              <p
                className={`mt-1 text-xl font-bold ${statusStyle.text}`}
              >
                {statusLabel}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">

              <span
                className={`rounded-full px-4 py-2 text-sm font-bold ${statusStyle.badge}`}
              >
                ● {statusLabel}
              </span>

              {/* Accept */}
{(order.status === "new" || order.status === "pending" || !order.status) && (
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
      className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
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
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
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
                      className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-red-700"
                    >
                      ✕ إلغاء الطلب
                    </button>

                  </form>
                )}

            </div>

          </div>
        </div>

        {/* Main information */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Customer */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
                👤
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  بيانات العميل
                </h2>

                <p className="text-sm text-slate-500">
                  معلومات التواصل
                </p>
              </div>

            </div>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-slate-400">
                  الاسم الكامل
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {order.customer_name || "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  رقم الهاتف
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {order.phone || "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  المدينة / المنطقة
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {order.city || "-"}
                </p>
                {order.customer_image && (
  <div>
    <p className="text-sm text-slate-400">
      الصورة المرفقة
    </p>

    <img
      src={order.customer_image}
      alt="الصورة المرفقة من العميل"
      className="mt-2 h-48 w-full rounded-2xl object-cover border border-slate-200"
    />
  </div>
)}
              </div>

            </div>

          </section>

          {/* Product */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
                📦
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  تفاصيل المنتج
                </h2>

                <p className="text-sm text-slate-500">
                  المنتج المطلوب
                </p>
              </div>

            </div>

            {product ? (
              <div>

                <img
                  src={
                    product.image ||
                    "https://placehold.co/500x300"
                  }
                  alt={product.name}
                  className="mb-5 h-44 w-full rounded-2xl object-cover"
                />

                <h3 className="text-xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-400">
                      السعر
                    </p>

                    <p className="mt-1 font-bold text-teal-600">
                      LYD {product.price}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-400">
                      الكمية
                    </p>

                    <p className="mt-1 text-xl font-bold text-slate-900">
                      {quantity}
                    </p>
                  </div>

                </div>

              </div>
            ) : (
              <p className="text-slate-500">
                لم يتم العثور على المنتج.
              </p>
            )}

          </section>

          {/* Notes */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
                📝
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  ملاحظات الطلب
                </h2>

                <p className="text-sm text-slate-500">
                  التفاصيل الإضافية
                </p>
              </div>

            </div>

            <div className="min-h-32 rounded-2xl bg-slate-50 p-5 leading-7 text-slate-600">
              {order.notes || "لا توجد ملاحظات من العميل."}
            </div>

          </section>

        </div>

        {/* Order information */}
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-bold text-slate-900">
            معلومات الطلب
          </h2>

          <div className="grid gap-4 md:grid-cols-4">

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">
                رقم الطلب
              </p>

              <p className="mt-1 font-bold">
                #{order.id}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">
                الكمية
              </p>

              <p className="mt-1 font-bold">
                {quantity}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">
                تاريخ الطلب
              </p>

              <p className="mt-1 font-bold">
                {order.created_at
                  ? new Date(
                      order.created_at
                    ).toLocaleDateString("ar-LY")
                  : "-"}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">
                الوقت
              </p>

              <p className="mt-1 font-bold">
                {order.created_at
                  ? new Date(
                      order.created_at
                    ).toLocaleTimeString("ar-LY", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "-"}
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}