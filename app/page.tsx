import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-slate-950 text-white"
    >
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-900 to-slate-950" />

        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute right-1/2 top-1/2 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20">
          {/* ================= TEXT ================= */}
          <div className="text-center lg:text-right">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
              الجودة • السرعة • الاحترافية
            </div>

            {/* Main Title */}
            <h1 className="text-[2.15rem] font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              شركة البطنان

              <span className="mt-2 block text-teal-300">
                لصناعة وطباعة
              </span>

              <span className="mt-2 block">
                الأكياس البلاستيكية
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-slate-200 sm:text-lg sm:leading-9 lg:mx-0">
              نصنع ونطبع الأكياس البلاستيكية حسب طلبك، بجودة احترافية
              وتصاميم مخصصة تناسب المطاعم والمحلات التجارية والأسواق
              والمصانع.
            </p>

            {/* Main Buttons */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:justify-center lg:justify-start">
              <Link
                href="/products"
                className="group flex min-h-14 w-full items-center justify-center rounded-2xl bg-orange-500 px-7 py-4 text-base font-black text-white shadow-xl shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:w-auto"
              >
                اطلب عرض سعر
                <span className="mr-2 text-xl transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </Link>

              <Link
                href="/products"
                className="flex min-h-14 w-full items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-slate-900 sm:w-auto"
              >
                شاهد منتجاتنا
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:flex lg:flex-wrap">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-slate-200 backdrop-blur">
                ✓ تصنيع حسب الطلب
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-slate-200 backdrop-blur">
                ✓ طباعة احترافية
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-slate-200 backdrop-blur">
                ✓ مراجعة قبل التنفيذ
              </div>
            </div>
          </div>

          {/* ================= VISUAL ================= */}
          <div className="relative mt-10 lg:mt-0">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[3rem] bg-teal-300/20 blur-3xl" />

            {/* Main Card */}
            <div className="relative mx-auto max-w-[360px] sm:max-w-[440px]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-4">
                {/* Top label */}
                <div className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-xl sm:right-7 sm:top-7 sm:text-xs">
                  شركة البطنان
                </div>

                {/* Logo Area */}
                <div className="flex min-h-[290px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white sm:min-h-[390px] sm:rounded-[2rem]">
                  <img
                    src="/iogo.jpeg"
                    alt="شركة البطنان لصناعة وطباعة الأكياس البلاستيكية"
                    className="h-auto w-[78%] max-w-[330px] object-contain"
                  />
                </div>

                {/* Bottom info */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 sm:gap-3 sm:pt-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-xl sm:p-4">
                    <div className="text-xl sm:text-2xl">🏭</div>
                    <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                      تصنيع حسب الطلب
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-xl sm:p-4">
                    <div className="text-xl sm:text-2xl">🎨</div>
                    <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                      طباعة مخصصة
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-2 rounded-2xl border border-white/15 bg-slate-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-bottom-5 sm:-left-5 sm:px-5 sm:py-4">
                <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
                  جودة نهتم بها
                </p>

                <p className="mt-0.5 text-sm font-black text-white sm:text-base">
                  من التصميم إلى التنفيذ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        id="about"
        className="bg-white py-14 text-slate-900 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-xs font-black text-teal-700 sm:text-sm">
              لماذا شركة البطنان؟
            </div>

            <h2 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
              حلول تصنيع وطباعة تناسب احتياجك
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-8">
              منتجاتنا تُصنع حسب الطلب، لذلك يمكنك إرسال تفاصيل الكمية
              والمقاس واللون والطباعة وأي ملاحظات إضافية، ثم يقوم فريقنا
              بمراجعة الطلب قبل البدء في التنفيذ.
            </p>
          </div>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">
            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-2xl transition group-hover:scale-110">
                🏭
              </div>

              <h3 className="mt-4 text-lg font-black sm:mt-5 sm:text-xl">
                تصنيع حسب الطلب
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500 sm:mt-3">
                نجهز المنتجات وفق الكمية والمواصفات التي يحددها العميل.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition group-hover:scale-110">
                🎨
              </div>

              <h3 className="mt-4 text-lg font-black sm:mt-5 sm:text-xl">
                طباعة احترافية
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500 sm:mt-3">
                إمكانية إضافة الشعارات والتصاميم والمعلومات الخاصة بالعميل.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl transition group-hover:scale-110">
                🔍
              </div>

              <h3 className="mt-4 text-lg font-black sm:mt-5 sm:text-xl">
                مراجعة قبل التنفيذ
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500 sm:mt-3">
                نراجع تفاصيل الطلب قبل البدء في التصنيع للتأكد من المتطلبات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="bg-slate-50 py-14 text-slate-900 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-black text-teal-700 sm:text-sm">
                خدماتنا
              </div>

              <h2 className="mt-3 text-2xl font-black sm:text-4xl">
                ماذا نقدم؟
              </h2>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                حلول عملية تناسب مختلف الأنشطة التجارية والصناعية.
              </p>
            </div>

            <Link
              href="/products"
              className="font-bold text-teal-700 transition hover:text-teal-900"
            >
              عرض المنتجات ←
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🛍️",
                title: "أكياس المطاعم",
                text: "حلول مناسبة للمطاعم ومحلات الوجبات والمقاهي.",
              },
              {
                icon: "🏪",
                title: "أكياس المحلات التجارية",
                text: "أكياس مخصصة للمتاجر والعلامات التجارية.",
              },
              {
                icon: "🛒",
                title: "أكياس السوبرماركت",
                text: "تصنيع كميات مختلفة حسب احتياج النشاط التجاري.",
              },
              {
                icon: "🏭",
                title: "أكياس المصانع",
                text: "حلول مخصصة للاستخدامات الصناعية والتجارية.",
              },
              {
                icon: "🎨",
                title: "تصميم الشعارات",
                text: "إمكانية إضافة شعار وتصميم خاص بالعميل.",
              },
              {
                icon: "⚙️",
                title: "تصنيع حسب الطلب",
                text: "تنفيذ الطلبات وفق التفاصيل والمواصفات المطلوبة.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="mt-4 text-lg font-black sm:mt-5 sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500 sm:mt-3">
                  {service.text}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-800 to-slate-950 py-14 sm:py-20">
        <div className="absolute -right-20 top-0 h-60 w-60 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="mx-auto inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-teal-200 backdrop-blur sm:text-sm">
            جاهز لطلبك؟
          </div>

          <h2 className="mt-4 text-2xl font-black leading-tight sm:text-5xl">
            أخبرنا بما تحتاج وسنراجع طلبك
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
            اختر المنتج المناسب وأرسل تفاصيل الكمية والمواصفات والملاحظات،
            وسيتم مراجعة طلبك قبل التنفيذ.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-orange-500 px-8 py-4 font-black text-white shadow-xl shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 sm:w-auto"
          >
            ابدأ طلبك الآن
            <span className="mr-2 text-lg">←</span>
          </Link>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-white py-12 text-slate-900 sm:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <p className="font-bold text-teal-600">تواصل معنا</p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              نحن جاهزون لخدمتك
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="tel:0923324462"
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-xl">
                  📞
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    الهاتف
                  </p>

                  <p className="mt-1 text-xl font-black text-teal-700 sm:text-2xl">
                    0923324462
                  </p>
                </div>
              </div>
            </a>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    موقعنا
                  </p>

                  <p className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                    نجمة الخليج - طبرق
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 py-8 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto flex max-w-md flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg">
              <img
                src="/iogo.jpeg"
                alt="شركة البطنان"
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="mt-4 text-xl font-black">
              شركة البطنان
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              لصناعة وطباعة الأكياس البلاستيكية
            </p>

            <div className="my-6 w-full border-t border-white/10" />

            <p className="text-xs text-slate-500 sm:text-sm">
              © 2026 شركة البطنان - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}