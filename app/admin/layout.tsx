import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 h-20 border-b border-slate-200 bg-white shadow-sm">

        <div className="mx-auto flex h-full w-full items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/admin"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-xl font-bold text-white shadow-sm">
              ب
            </div>

            <div>
              <h1 className="font-bold text-slate-900">
                شركة البطنان
              </h1>

              <p className="text-xs text-slate-500">
                نظام إدارة المصنع
              </p>
            </div>
          </Link>


          {/* Admin */}
          <div className="flex items-center gap-3">

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-800">
                مدير النظام
              </p>

              <p className="text-xs text-slate-500">
                لوحة الإدارة
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-lg">
              👤
            </div>

          </div>

        </div>

      </header>


      {/* ================= BODY ================= */}
      <div className="flex min-h-[calc(100vh-80px)]">


        {/* ================= SIDEBAR ================= */}
        <aside className="sticky top-20 hidden h-[calc(100vh-80px)] w-60 shrink-0 border-l border-slate-200 bg-white lg:block">

          <div className="flex h-full flex-col p-4">


            {/* Main menu */}
            <div>

              <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                القائمة الرئيسية
              </p>


              <nav className="space-y-1.5">

                <Link
                  href="/admin"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  <span className="text-lg">🏠</span>
                  <span>الرئيسية</span>
                </Link>


                <Link
                  href="/admin/orders"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  <span className="text-lg">🛒</span>
                  <span>الطلبات</span>
                </Link>


                <Link
                  href="/admin/products"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  <span className="text-lg">📦</span>
                  <span>المنتجات</span>
                </Link>


                <Link
                  href="/admin/reports"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  <span className="text-lg">📊</span>
                  <span>التقارير</span>
                </Link>
                <Link
  href="/admin/users"
  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
>
  <span className="text-lg">👥</span>
  <span>المستخدمون</span>
</Link>

              </nav>

            </div>


            {/* Divider */}
            <div className="my-6 border-t border-slate-100" />


            {/* System */}
            <div>

              <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                النظام
              </p>


              <nav className="space-y-1.5">

                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-teal-700"
                >
                  <span className="text-lg">⚙️</span>
                  <span>الإعدادات</span>
                </Link>


                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-teal-700"
                >
                  <span className="text-lg">🌐</span>
                  <span>زيارة الموقع</span>
                </Link>

              </nav>

            </div>


            {/* Logout */}
            <div className="mt-auto border-t border-slate-100 pt-4">

              <Link
                href="/admin/logout"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                <span className="text-lg">🚪</span>
                <span>تسجيل الخروج</span>
              </Link>

            </div>

          </div>

        </aside>


        {/* ================= CONTENT ================= */}
        <main className="min-w-0 flex-1 overflow-x-hidden">

          {children}

        </main>

      </div>

    </div>
  );
}