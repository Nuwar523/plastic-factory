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

        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-32 lg:pt-32">
          {/* ================= HERO TEXT ================= */}
          <div className="text-center lg:text-right">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              الجودة • السرعة • الاحترافية
            </div>

            <h1 className="text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              شركة البطنان

              <span className="mt-2 block text-teal-300">
                لصناعة وطباعة
              </span>

              <span className="mt-2 block">
                الأكياس البلاستيكية
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-lg sm:leading-8 lg:mx-0">
              نقدم حلولًا متكاملة لتصنيع وطباعة الأكياس البلاستيكية حسب طلب
              العميل، للمطاعم والمحلات التجارية والأسواق والمصانع، مع إمكانية
              تنفيذ التصاميم والطباعة حسب الطلب.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:flex sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/products"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600 sm:w-auto"
              >
                اطلب عرض سعر
                <span className="mr-2 text-lg">←</span>
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white hover:text-slate-900 sm:w-auto"
              >
                شاهد منتجاتنا
              </Link>
            </div>

            {/* ================= TRUST ================= */}
            <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 lg:flex lg:flex-wrap">
              <span>✓ تصنيع حسب الطلب</span>
              <span>✓ طباعة احترافية</span>
              <span>✓ مراجعة الطلب قبل التنفيذ</span>
            </div>
          </div>

          {/* ================= HERO IMAGE ================= */}
          <div className="relative mt-10 flex justify-center lg:mt-0">
            <div className="absolute inset-4 rounded-[2rem] bg-teal-400/20 blur-3xl sm:inset-0" />

            <div className="relative w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur sm:max-w-[420px] sm:p-3 lg:max-w-[480px]">
              <img
                src="/iogo.jpeg"
                alt="شركة البطنان لصناعة وطباعة الأكياس البلاستيكية"
                className="h-auto max-h-[360px] w-full rounded-[1.5rem] object-contain object-center sm:max-h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white py-14 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-teal-600">شركة البطنان</p>

            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
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
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-2xl">
                🏭
              </div>

              <h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">
                تصنيع حسب الطلب
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500 sm:mt-3">
                نجهز المنتجات وفق الكمية والمواصفات التي يحددها العميل.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                🎨
              </div>

              <h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">
                طباعة احترافية
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500 sm:mt-3">
                إمكانية إضافة الشعارات والتصاميم والمعلومات الخاصة بالعميل.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🔍
              </div>

              <h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">
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
      <section className="bg-slate-50 py-14 text-slate-900 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold text-teal-600">خدماتنا</p>

              <h2 className="mt-2 text-2xl font-black sm:text-4xl">
                ماذا نقدم؟
              </h2>
            </div>

            <Link
              href="/products"
              className="font-bold text-teal-700 hover:text-teal-900"
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
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500 sm:mt-3">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-teal-700 to-slate-900 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="font-semibold text-teal-300">جاهز لطلبك؟</p>

          <h2 className="mt-3 text-2xl font-black leading-tight sm:text-5xl">
            أخبرنا بما تحتاج وسنراجع طلبك
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
            اختر المنتج المناسب وأرسل تفاصيل الكمية والمواصفات والملاحظات،
            وسيتم مراجعة طلبك قبل التنفيذ.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-orange-600 sm:w-auto"
          >
            ابدأ طلبك الآن
            <span className="mr-2">←</span>
          </Link>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="bg-white py-12 text-slate-900 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <p className="text-sm font-semibold text-slate-400">الهاتف</p>

              <a
                href="tel:0923324462"
                className="mt-2 block text-xl font-black text-teal-700 hover:text-teal-900 sm:text-2xl"
              >
                0923324462
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <p className="text-sm font-semibold text-slate-400">موقعنا</p>

              <p className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                نجمة الخليج - طبرق
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 py-8 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h3 className="text-xl font-bold">شركة البطنان</h3>

          <p className="mt-2 text-sm text-slate-400">
            لصناعة وطباعة الأكياس البلاستيكية
          </p>

          <div className="my-5 border-t border-white/10" />

          <p className="text-xs text-slate-500 sm:text-sm">
            © 2026 شركة البطنان - جميع الحقوق محفوظة
          </p>
        </div>
      </footer>
    </main>
  );
}