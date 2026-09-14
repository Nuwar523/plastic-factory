import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-3 sm:p-5 md:p-8">

      {/* ================= PAGE HEADER ================= */}
      <div className="mb-5 sm:mb-8">
        <p className="text-xs font-semibold text-teal-600 sm:text-sm">
          لوحة التحكم
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          أهلاً بك 👋
        </h1>

        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-2">
          إليك ملخص نشاط شركة البطنان والطلبات الحالية.
        </p>
      </div>


      {/* ================= STATISTICS ================= */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-5 xl:grid-cols-4">

        {/* Total Orders */}
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-medium leading-5 text-slate-500 sm:text-sm">
              إجمالي الطلبات
            </p>

            <span className="hidden rounded-lg bg-teal-50 px-2 py-1 text-lg sm:block">
              🛒
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-slate-900 sm:mt-3 sm:text-3xl">
            2
          </p>

          <p className="mt-1 text-[11px] leading-4 text-teal-600 sm:mt-2 sm:text-sm">
            جميع الطلبات المسجلة
          </p>
        </div>


        {/* New Orders */}
        <div className="min-w-0 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-medium leading-5 text-slate-500 sm:text-sm">
              طلبات جديدة
            </p>

            <span className="hidden rounded-lg bg-amber-50 px-2 py-1 text-lg sm:block">
              ⏳
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-slate-900 sm:mt-3 sm:text-3xl">
            2
          </p>

          <p className="mt-1 text-[11px] leading-4 text-amber-600 sm:mt-2 sm:text-sm">
            تحتاج إلى مراجعة
          </p>
        </div>


        {/* Completed Orders */}
        <div className="min-w-0 rounded-2xl border border-emerald-200 bg-white p-3 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-medium leading-5 text-slate-500 sm:text-sm">
              طلبات مكتملة
            </p>

            <span className="hidden rounded-lg bg-emerald-50 px-2 py-1 text-lg sm:block">
              ✅
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-slate-900 sm:mt-3 sm:text-3xl">
            0
          </p>

          <p className="mt-1 text-[11px] leading-4 text-emerald-600 sm:mt-2 sm:text-sm">
            تم تنفيذها
          </p>
        </div>


        {/* Products */}
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-medium leading-5 text-slate-500 sm:text-sm">
              المنتجات
            </p>

            <span className="hidden rounded-lg bg-slate-50 px-2 py-1 text-lg sm:block">
              📦
            </span>
          </div>

          <p className="mt-2 text-2xl font-bold text-slate-900 sm:mt-3 sm:text-3xl">
            —
          </p>

          <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:mt-2 sm:text-sm">
            إجمالي المنتجات
          </p>
        </div>

      </div>


      {/* ================= RECENT ORDERS ================= */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mt-8">

        <div className="border-b border-slate-100 p-4 sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            آخر الطلبات
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
            أحدث الطلبات التي وصلت إلى النظام
          </p>
        </div>

        <div className="p-3 sm:p-6">
          <div className="rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500 sm:p-5">
            يتم عرض أحدث الطلبات هنا
          </div>
        </div>

      </div>


      {/* ================= QUICK ACTIONS ================= */}
      <div className="mt-5 sm:mt-8">

        <div className="mb-3 sm:mb-4">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            الوصول السريع
          </h2>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            اختصارات سريعة لأهم أقسام الإدارة
          </p>
        </div>


        <div className="grid gap-2.5 sm:gap-4 md:grid-cols-3">

          {/* Orders */}
          <Link
            href="/admin/orders"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md active:scale-[0.99] sm:p-5"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl sm:h-11 sm:w-11 sm:text-2xl">
              🛒
            </div>

            <h3 className="font-bold text-slate-900 group-hover:text-teal-700">
              إدارة الطلبات
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              مراجعة ومتابعة طلبات العملاء
            </p>

            <div className="mt-3 text-xs font-semibold text-teal-600">
              فتح الطلبات ←
            </div>
          </Link>


          {/* Products */}
          <Link
            href="/admin/products"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md active:scale-[0.99] sm:p-5"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl sm:h-11 sm:w-11 sm:text-2xl">
              📦
            </div>

            <h3 className="font-bold text-slate-900 group-hover:text-teal-700">
              إدارة المنتجات
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              إضافة وتعديل المنتجات والأسعار
            </p>

            <div className="mt-3 text-xs font-semibold text-teal-600">
              فتح المنتجات ←
            </div>
          </Link>


          {/* Store */}
          <Link
            href="/"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-md active:scale-[0.99] sm:p-5"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl sm:h-11 sm:w-11 sm:text-2xl">
              🌐
            </div>

            <h3 className="font-bold text-slate-900 group-hover:text-teal-700">
              زيارة المتجر
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              مشاهدة واجهة العملاء
            </p>

            <div className="mt-3 text-xs font-semibold text-teal-600">
              فتح المتجر ←
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}