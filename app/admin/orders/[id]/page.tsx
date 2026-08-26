import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

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
          <div className="text-5xl">😕</div>

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

  const quantity = item?.quantity ?? order.quantity ?? 0;

  const status =
    order.status === "completed"
      ? "مكتمل"
      : order.status === "cancelled"
      ? "ملغي"
      : "قيد المراجعة";

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
        <div className="mb-6 rounded-2xl border border-orange-100 bg-orange-50 p-5">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm text-slate-500">
                حالة الطلب
              </p>

              <p className="mt-1 text-xl font-bold text-orange-600">
                {status}
              </p>
            </div>

            <span className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
              ● {status}
            </span>

          </div>

        </div>


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
                  ? new Date(order.created_at).toLocaleDateString(
                      "ar-LY"
                    )
                  : "-"}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">
                الوقت
              </p>

              <p className="mt-1 font-bold">
                {order.created_at
                  ? new Date(order.created_at).toLocaleTimeString(
                      "ar-LY",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )
                  : "-"}
              </p>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}