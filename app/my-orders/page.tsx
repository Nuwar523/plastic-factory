import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

function getStatus(status: string) {
  switch (status) {
    case "pending":
      return {
        label: "قيد المراجعة",
        icon: "⏳",
        color: "text-amber-700",
        bg: "bg-amber-50",
        border: "border-amber-200",
      };

    case "accepted":
      return {
        label: "تم قبول الطلب",
        icon: "✅",
        color: "text-blue-700",
        bg: "bg-blue-50",
        border: "border-blue-200",
      };

    case "completed":
      return {
        label: "تم إكمال الطلب",
        icon: "🎉",
        color: "text-green-700",
        bg: "bg-green-50",
        border: "border-green-200",
      };

    case "cancelled":
      return {
        label: "تم إلغاء الطلب",
        icon: "❌",
        color: "text-red-700",
        bg: "bg-red-50",
        border: "border-red-200",
      };

    default:
      return {
        label: status,
        icon: "📦",
        color: "text-gray-700",
        bg: "bg-gray-50",
        border: "border-gray-200",
      };
  }
}

function getProgress(status: string) {
  if (status === "pending") return 1;
  if (status === "accepted") return 2;
  if (status === "completed") return 3;
  return 0;
}

export default async function MyOrdersPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: orders, error } = await supabase
    .from("orders")
    .select(`
      id,
      customer_name,
      city,
      status,
      created_at,
      order_items (
        quantity,
        products (
          name
        )
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-50"
    >
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-teal-50 sm:h-11 sm:w-11">
              <img
                src="/iogo.jpeg"
                alt="شركة البطنان"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-black text-teal-600 sm:text-lg">
                شركة البطنان
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                لصناعة وطباعة الأكياس البلاستيكية
              </p>
            </div>
          </Link>

          {/* Products button */}
          <Link
            href="/products"
            className="shrink-0 rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 sm:px-4 sm:text-sm"
          >
            المنتجات
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto w-full max-w-5xl px-4 py-7 sm:px-6 sm:py-12">

        {/* Page title */}
        <div className="mb-6 sm:mb-8">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            📦 متابعة الطلبات
          </div>

          <h1 className="text-2xl font-black text-slate-900 sm:text-4xl">
            طلباتي
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            تابع حالة طلباتك وتعرّف على آخر تحديثاتها.
          </p>
        </div>

        {/* Orders */}
        {orders && orders.length > 0 ? (
          <div className="space-y-4 sm:space-y-5">

            {orders.map((order) => {
              const status = getStatus(order.status);
              const progress = getProgress(order.status);

              return (
                <div
                  key={order.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl"
                >

                  {/* Order header */}
                  <div className="border-b border-slate-100 p-4 sm:p-6">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      {/* Order number */}
                      <div>
                        <p className="text-xs font-semibold text-slate-400">
                          رقم الطلب
                        </p>

                        <p className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
                          #{order.id}
                        </p>
                      </div>

                      {/* Status */}
                      <div
                        className={`flex w-fit items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm ${status.bg} ${status.border} ${status.color}`}
                      >
                        <span>{status.icon}</span>
                        <span>{status.label}</span>
                      </div>
                    </div>

                    {/* City + Date */}
                    <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:flex-wrap sm:gap-5 sm:text-sm">

                      <span>
                        📍 {order.city}
                      </span>

                      <span>
                        📅{" "}
                        {new Intl.DateTimeFormat("ar-LY", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(new Date(order.created_at))}
                      </span>

                    </div>
                  </div>

                  {/* Progress */}
                  {order.status !== "cancelled" && (
                    <div className="px-4 pt-5 sm:px-6 sm:pt-6">

                      <p className="mb-5 text-sm font-black text-slate-800">
                        حالة الطلب
                      </p>

                      <div className="relative">

                        {/* Background line */}
                        <div className="absolute right-[12%] left-[12%] top-4 h-1 rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-teal-500 transition-all duration-500"
                            style={{
                              width:
                                progress === 1
                                  ? "0%"
                                  : progress === 2
                                    ? "50%"
                                    : progress === 3
                                      ? "100%"
                                      : "0%",
                            }}
                          />
                        </div>

                        {/* Steps */}
                        <div className="relative flex justify-between">

                          {/* Step 1 */}
                          <div className="flex w-1/3 flex-col items-center text-center">

                            <div
                              className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 sm:text-sm ${
                                progress >= 1
                                  ? "bg-teal-600 text-white"
                                  : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              1
                            </div>

                            <p className="mt-2 text-[11px] font-bold text-slate-600 sm:text-xs">
                              المراجعة
                            </p>
                          </div>

                          {/* Step 2 */}
                          <div className="flex w-1/3 flex-col items-center text-center">

                            <div
                              className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 sm:text-sm ${
                                progress >= 2
                                  ? "bg-teal-600 text-white"
                                  : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              2
                            </div>

                            <p className="mt-2 text-[11px] font-bold text-slate-600 sm:text-xs">
                              القبول
                            </p>
                          </div>

                          {/* Step 3 */}
                          <div className="flex w-1/3 flex-col items-center text-center">

                            <div
                              className={`z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 sm:text-sm ${
                                progress >= 3
                                  ? "bg-teal-600 text-white"
                                  : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              3
                            </div>

                            <p className="mt-2 text-[11px] font-bold text-slate-600 sm:text-xs">
                              الإكمال
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cancelled */}
                  {order.status === "cancelled" && (
                    <div className="mx-4 mt-4 rounded-2xl border border-red-100 bg-red-50 p-4 sm:mx-6 sm:mt-5">

                      <p className="text-sm font-black text-red-700">
                        ❌ تم إلغاء هذا الطلب
                      </p>

                      <p className="mt-1 text-xs leading-5 text-red-600">
                        يمكنك التواصل مع الشركة لمعرفة التفاصيل.
                      </p>

                    </div>
                  )}

                  {/* Products */}
                  <div className="p-4 sm:p-6">

                    <div className="mb-3 flex items-center justify-between gap-3">

                      <p className="text-sm font-black text-slate-800">
                        المنتجات المطلوبة
                      </p>

                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500">
                        {order.order_items?.length || 0} منتج
                      </span>

                    </div>

                    <div className="space-y-2">

                      {order.order_items?.map((item, index) => (
                        <div
                          key={index}
                          className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-3 sm:px-4"
                        >

                          <span className="min-w-0 truncate text-sm font-semibold text-slate-700">
                            {item.products?.[0]?.name || "منتج"}
                          </span>

                          <span className="shrink-0 rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-teal-700 shadow-sm sm:px-3">
                            × {item.quantity}
                          </span>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        ) : (

          /* No orders */
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-12 text-center shadow-sm sm:rounded-3xl sm:py-14">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-3xl sm:h-20 sm:w-20 sm:text-4xl">
              📦
            </div>

            <h2 className="mt-5 text-xl font-black text-slate-900">
              لا توجد طلبات حتى الآن
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              عندما تقوم بإرسال طلب، سيظهر هنا ويمكنك متابعة حالته خطوة بخطوة.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-flex rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 sm:text-base"
            >
              تصفح المنتجات
            </Link>

          </div>
        )}

      </section>
    </main>
  );
}