import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-950 text-white"
    >

      {/* ================= NAVBAR ================= */}
      <Navbar />


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-900 to-slate-950" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />


        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-24 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-32">

          {/* Text */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              الجودة • السرعة • الاحترافية
            </div>


            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

              شركة البطنان

              <span className="mt-2 block text-teal-300">
                لصناعة وطباعة
              </span>

              <span className="mt-2 block">
                الأكياس البلاستيكية
              </span>

            </h1>


            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              نقدم حلولًا متكاملة لتصنيع وطباعة الأكياس البلاستيكية
              حسب طلب العميل، للمطاعم والمحلات التجارية والأسواق
              والمصانع، مع إمكانية تنفيذ التصاميم والطباعة حسب الطلب.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                تصفح المنتجات
                <span className="mr-2">←</span>
              </Link>


              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              >
                شاهد منتجاتنا
              </Link>

            </div>


            {/* Trust */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">

              <span>✓ تصنيع حسب الطلب</span>
              <span>✓ طباعة احترافية</span>
              <span>✓ مراجعة الطلب قبل التنفيذ</span>

            </div>

          </div>


          {/* Image */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 rounded-[3rem] bg-teal-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

              <img
                src="/iogo.jpeg"
                alt="شركة البطنان لصناعة وطباعة الأكياس البلاستيكية"
                className="h-auto w-full max-w-[480px] rounded-[1.5rem] object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="bg-white py-20 text-slate-900">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold text-teal-600">
              شركة البطنان
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              حلول تصنيع وطباعة تناسب احتياجك
            </h2>

            <p className="mt-5 leading-8 text-slate-500">
              منتجاتنا تُصنع حسب الطلب، لذلك يمكنك إرسال تفاصيل
              الكمية والمقاس واللون والطباعة وأي ملاحظات إضافية،
              ثم يقوم فريقنا بمراجعة الطلب قبل البدء في التنفيذ.
            </p>

          </div>


          {/* Features */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-2xl">
                🏭
              </div>

              <h3 className="mt-5 text-xl font-bold">
                تصنيع حسب الطلب
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                نجهز المنتجات وفق الكمية والمواصفات التي يحددها العميل.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                🎨
              </div>

              <h3 className="mt-5 text-xl font-bold">
                طباعة احترافية
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                إمكانية إضافة الشعارات والتصاميم والمعلومات الخاصة بالعميل.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🔍
              </div>

              <h3 className="mt-5 text-xl font-bold">
                مراجعة قبل التنفيذ
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                نراجع تفاصيل الطلب قبل البدء في التصنيع للتأكد من المتطلبات.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="bg-slate-50 py-20 text-slate-900">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="font-bold text-teal-600">
                خدماتنا
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
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


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

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
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-4xl">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-teal-700 to-slate-900 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="font-semibold text-teal-300">
            جاهز لطلبك؟
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            أخبرنا بما تحتاج وسنراجع طلبك
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            اختر المنتج المناسب وأرسل تفاصيل الكمية والمواصفات
            والملاحظات، وسيتم مراجعة طلبك قبل التنفيذ.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-orange-600"
          >
            ابدأ طلبك الآن
            <span className="mr-2">←</span>
          </Link>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="bg-white py-16 text-slate-900">

        <div className="mx-auto max-w-5xl px-6">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <p className="text-sm font-semibold text-slate-400">
                الهاتف
              </p>

              <a
                href="tel:0923324462"
                className="mt-2 block text-2xl font-black text-teal-700 hover:text-teal-900"
              >
                0923324462
              </a>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

              <p className="text-sm font-semibold text-slate-400">
                موقعنا
              </p>

              <p className="mt-2 text-2xl font-black text-slate-900">
                نجمة الخليج - طبرق
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 py-10 text-center">

        <div className="mx-auto max-w-7xl px-6">

          <h3 className="text-xl font-bold">
            شركة البطنان
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            لصناعة وطباعة الأكياس البلاستيكية
          </p>

          <div className="my-6 border-t border-white/10" />

          <p className="text-sm text-slate-500">
            © 2026 شركة البطنان - جميع الحقوق محفوظة
          </p>

        </div>

      </footer>

    </main>
  );
}