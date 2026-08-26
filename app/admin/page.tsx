export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-teal-600">
          لوحة التحكم
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          أهلاً بك 👋
        </h1>

        <p className="mt-2 text-slate-500">
          إليك ملخص نشاط شركة البطنان والطلبات الحالية.
        </p>
      </div>


      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">إجمالي الطلبات</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">2</p>
          <p className="mt-2 text-sm text-teal-600">
            جميع الطلبات المسجلة
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">طلبات جديدة</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">2</p>
          <p className="mt-2 text-sm text-amber-600">
            تحتاج إلى مراجعة
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">طلبات مكتملة</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">0</p>
          <p className="mt-2 text-sm text-emerald-600">
            تم تنفيذها
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">المنتجات</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">—</p>
          <p className="mt-2 text-sm text-slate-500">
            إجمالي المنتجات
          </p>
        </div>

      </div>


      {/* Recent Orders */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            آخر الطلبات
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            أحدث الطلبات التي وصلت إلى النظام
          </p>
        </div>

        <div className="p-6">
          <div className="rounded-xl bg-slate-50 p-5 text-center text-slate-500">
            يتم عرض أحدث الطلبات هنا
          </div>
        </div>

      </div>


      {/* Quick Actions */}
      <div className="mt-8">

        <h2 className="mb-4 text-xl font-bold text-slate-900">
          الوصول السريع
        </h2>

        <div className="grid gap-4 md:grid-cols-3">

          <a
            href="/admin/orders"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md"
          >
            <div className="mb-3 text-2xl">🛒</div>
            <h3 className="font-bold text-slate-900">
              إدارة الطلبات
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              مراجعة ومتابعة طلبات العملاء
            </p>
          </a>

          <a
            href="/admin/products"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md"
          >
            <div className="mb-3 text-2xl">📦</div>
            <h3 className="font-bold text-slate-900">
              إدارة المنتجات
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              إضافة وتعديل المنتجات والأسعار
            </p>
          </a>

          <a
            href="/"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md"
          >
            <div className="mb-3 text-2xl">🌐</div>
            <h3 className="font-bold text-slate-900">
              زيارة المتجر
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              مشاهدة واجهة العملاء
            </p>
          </a>

        </div>

      </div>

    </div>
  );
}