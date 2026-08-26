import { createClient } from "@/lib/supabase/server";

export default async function ReportsPage() {
  const supabase = await createClient();

  // جلب عدد المنتجات
  const { count: productsCount } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  // جلب المنتجات لحساب الكمية الموجودة
  const { data: products } = await supabase
    .from("products")
    .select("stock");

  const totalStock =
    products?.reduce((total, product) => {
      return total + (Number(product.stock) || 0);
    }, 0) || 0;

  // جلب عدد الطلبات
  const { count: ordersCount } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true });

  const productsTotal = productsCount || 0;
  const ordersTotal = ordersCount || 0;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 p-4 sm:p-6 lg:p-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-bold text-emerald-600">
            لوحة الإدارة
          </p>

          <h1 className="mt-1 text-3xl font-black text-slate-800 sm:text-4xl">
            التقارير والإحصائيات 📊
          </h1>

          <p className="mt-2 text-slate-500">
            نظرة عامة على حالة متجر شركة البطنان
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Products */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500">
                  إجمالي المنتجات
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-800">
                  {productsTotal}
                </h2>

                <p className="mt-2 text-xs text-emerald-600">
                  منتج مسجل في المتجر
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                📦
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500">
                  إجمالي الطلبات
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-800">
                  {ordersTotal}
                </h2>

                <p className="mt-2 text-xs text-orange-500">
                  جميع الطلبات المسجلة
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                🛒
              </div>
            </div>
          </div>

          {/* Stock */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500">
                  الكمية المتوفرة
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-800">
                  {totalStock}
                </h2>

                <p className="mt-2 text-xs text-blue-600">
                  إجمالي المخزون
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                🏭
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500">
                  حالة المتجر
                </p>

                <h2 className="mt-3 text-2xl font-black text-emerald-600">
                  يعمل
                </h2>

                <p className="mt-2 text-xs text-slate-400">
                  النظام يعمل بشكل طبيعي
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                ✓
              </div>
            </div>
          </div>

        </div>

        {/* Overview */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-800">
              ملخص المتجر
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              معلومات سريعة عن المنتجات والطلبات والمخزون.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span className="font-bold text-slate-600">
                  المنتجات
                </span>

                <span className="font-black text-emerald-600">
                  {productsTotal}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span className="font-bold text-slate-600">
                  الطلبات
                </span>

                <span className="font-black text-orange-500">
                  {ordersTotal}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span className="font-bold text-slate-600">
                  المخزون
                </span>

                <span className="font-black text-blue-600">
                  {totalStock}
                </span>
              </div>

            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-800">
              إجراءات سريعة
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              الوصول السريع إلى أهم أجزاء النظام.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <a
                href="/admin/products"
                className="rounded-2xl bg-emerald-50 p-5 transition hover:-translate-y-1 hover:bg-emerald-100"
              >
                <div className="text-3xl">📦</div>

                <h3 className="mt-3 font-black text-slate-800">
                  إدارة المنتجات
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  إضافة وتعديل المنتجات
                </p>
              </a>

              <a
                href="/admin/products/new"
                className="rounded-2xl bg-orange-50 p-5 transition hover:-translate-y-1 hover:bg-orange-100"
              >
                <div className="text-3xl">➕</div>

                <h3 className="mt-3 font-black text-slate-800">
                  إضافة منتج
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  إضافة منتج جديد للمتجر
                </p>
              </a>

              <a
                href="/admin/orders"
                className="rounded-2xl bg-blue-50 p-5 transition hover:-translate-y-1 hover:bg-blue-100"
              >
                <div className="text-3xl">🛒</div>

                <h3 className="mt-3 font-black text-slate-800">
                  الطلبات
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  متابعة طلبات العملاء
                </p>
              </a>

              <a
                href="/"
                className="rounded-2xl bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-slate-100"
              >
                <div className="text-3xl">🏠</div>

                <h3 className="mt-3 font-black text-slate-800">
                  الموقع الرئيسي
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  العودة إلى واجهة المتجر
                </p>
              </a>

            </div>
          </div>

        </div>

        {/* Footer note */}
        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-center text-sm text-emerald-700">
          📊 يتم تحديث إحصائيات المنتجات والطلبات تلقائيًا من قاعدة البيانات.
        </div>

      </div>
    </main>
  );
}