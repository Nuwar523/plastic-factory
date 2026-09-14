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

        <div className="relative mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/admin"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-lg font-bold text-white shadow-sm sm:h-11 sm:w-11 sm:text-xl">
              ب
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-sm font-bold text-slate-900 sm:text-base">
                شركة البطنان
              </h1>

              <p className="truncate text-[10px] text-slate-500 sm:text-xs">
                نظام إدارة المصنع
              </p>
            </div>
          </Link>


          {/* ================= MOBILE MENU ================= */}
          <details className="relative lg:hidden">

            <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm transition active:scale-95 [&::-webkit-details-marker]:hidden">
              <span className="text-lg leading-none">☰</span>
              <span>القائمة</span>
            </summary>

            <div className="absolute left-0 top-14 z-[60] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">

              {/* Mobile menu title */}
              <div className="mb-2 border-b border-slate-100 px-2 pb-3">
                <p className="text-sm font-bold text-slate-900">
                  لوحة إدارة المصنع
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  اختر القسم الذي تريد الدخول إليه
                </p>
              </div>


              {/* Main menu */}
              <nav className="space-y-1">

                <Link
                  href="/admin"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 active:bg-teal-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg">
                    🏠
                  </span>

                  <span>الرئيسية</span>
                </Link>


                <Link
                  href="/admin/orders"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 active:bg-teal-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg">
                    🛒
                  </span>

                  <span>الطلبات</span>
                </Link>


                <Link
                  href="/admin/products"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 active:bg-teal-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg">
                    📦
                  </span>

                  <span>المنتجات</span>
                </Link>


                <Link
                  href="/admin/reports"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 active:bg-teal-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg">
                    📊
                  </span>

                  <span>التقارير</span>
                </Link>


                <Link
                  href="/admin/users"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 active:bg-teal-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg">
                    👥
                  </span>

                  <span>المستخدمون</span>
                </Link>

              </nav>


              {/* Divider */}
              <div className="my-3 border-t border-slate-100" />


              {/* System */}
              <nav className="space-y-1">

                <Link
                  href="/admin/settings"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-teal-700 active:bg-slate-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg">
                    ⚙️
                  </span>

                  <span>الإعدادات</span>
                </Link>


                <Link
                  href="/"
                  className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-teal-700 active:bg-slate-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg">
                    🌐
                  </span>

                  <span>زيارة الموقع</span>
                </Link>

              </nav>

            </div>

          </details>


          {/* ================= ADMIN ================= */}
          <div className="hidden items-center gap-3 sm:flex">

            <div className="hidden text-left md:block">
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