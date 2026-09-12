import Link from "next/link";
import Navbar from "./components/Navbar";

const features = [
  {
    title: "تصنيع حسب الطلب",
    text: "نجهز المنتجات وفق الكمية والمواصفات التي يحددها العميل.",
    icon: "factory",
  },
  {
    title: "طباعة احترافية",
    text: "إمكانية إضافة الشعارات والتصاميم والمعلومات الخاصة بالعميل.",
    icon: "print",
  },
  {
    title: "مراجعة قبل التنفيذ",
    text: "نراجع تفاصيل الطلب قبل البدء في التصنيع للتأكد من المتطلبات.",
    icon: "check",
  },
];

const services = [
  {
    title: "أكياس المطاعم",
    text: "حلول مناسبة للمطاعم ومحلات الوجبات والمقاهي.",
    icon: "bag",
  },
  {
    title: "أكياس المحلات التجارية",
    text: "أكياس مخصصة للمتاجر والعلامات التجارية.",
    icon: "store",
  },
  {
    title: "أكياس السوبرماركت",
    text: "تصنيع كميات مختلفة حسب احتياج النشاط التجاري.",
    icon: "cart",
  },
  {
    title: "أكياس المصانع",
    text: "حلول مخصصة للاستخدامات الصناعية والتجارية.",
    icon: "industry",
  },
  {
    title: "تصميم الشعارات",
    text: "إمكانية إضافة شعار وتصميم خاص بالعميل.",
    icon: "design",
  },
  {
    title: "تصنيع حسب الطلب",
    text: "تنفيذ الطلبات وفق التفاصيل والمواصفات المطلوبة.",
    icon: "settings",
  },
];

function Icon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "factory" || name === "industry") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M3 21V9l6 3V9l6 3V5h3v16" />
        <path d="M3 21h18" />
        <path d="M7 16h2M12 16h2M17 16h1M7 19h2M12 19h2M17 19h1" />
      </svg>
    );
  }

  if (name === "print") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M6 9V3h12v6" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
        <path d="M18 12h.01" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M12 3l2.3 2.3 3.2-.2.8 3.1 2.7 1.7-1.7 2.7.2 3.2-3.1.8L15 19l-3 2-2-3-3.2.2-.8-3.1-2.7-1.7L5 10.7 4.8 7.5l3.1-.8L9 4.3 12 3z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (name === "bag") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M5 8h14l1 13H4L5 8z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    );
  }

  if (name === "store") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M4 10v10h16V10" />
        <path d="M3 10l2-6h14l2 6" />
        <path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
        <path d="M9 20v-5h6v5" />
      </svg>
    );
  }

  if (name === "cart") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M3 4h2l2 11h10l3-8H6" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    );
  }

  if (name === "design") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-white text-slate-900"
    >
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#024949] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(245,134,74,0.16),transparent_32%)]" />

        <div className="absolute -left-24 top-32 h-56 w-56 rounded-full bg-[#F5864A]/10 blur-3xl" />

        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">

          {/* ================= HERO TEXT ================= */}
          <div className="order-1 text-center lg:text-right">

            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/90 shadow-lg backdrop-blur sm:text-sm lg:mx-0">
              <span className="h-2 w-2 rounded-full bg-[#F5864A] shadow-[0_0_12px_rgba(245,134,74,0.9)]" />
              الجودة • السرعة • الاحترافية
            </div>

            <h1 className="mx-auto mt-5 max-w-xl text-[2.25rem] font-black leading-[1.18] tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl">
              شركة البطنان

              <span className="mt-2 block text-[#F5864A]">
                لصناعة وطباعة
              </span>

              <span className="mt-2 block text-white">
                الأكياس البلاستيكية
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-white/75 sm:text-lg lg:mx-0">
              نقدم حلولًا متكاملة لتصنيع وطباعة الأكياس البلاستيكية حسب طلب
              العميل، للمطاعم والمحلات التجارية والأسواق والمصانع.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

              <Link
                href="/products"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F5864A] px-7 text-base font-black text-white shadow-xl shadow-black/15 transition active:scale-[0.98] hover:bg-[#e9783d]"
              >
                ابدأ طلبك الآن
                <span className="mr-2 text-xl">
                  ←
                </span>
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 text-base font-bold text-white backdrop-blur transition active:scale-[0.98] hover:bg-white hover:text-[#024949]"
              >
                شاهد منتجاتنا
              </Link>

            </div>

            {/* Trust points */}
            <div className="mx-auto mt-7 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-3 lg:mx-0">

              <div className="rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2.5 text-center text-xs font-semibold text-white/80">
                ✓ تصنيع حسب الطلب
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2.5 text-center text-xs font-semibold text-white/80">
                ✓ طباعة احترافية
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2.5 text-center text-xs font-semibold text-white/80">
                ✓ مراجعة قبل التنفيذ
              </div>

            </div>
          </div>

          {/* ================= HERO VISUAL ================= */}
          <div className="order-2 mx-auto w-full max-w-[390px] lg:max-w-[470px]">

            <div className="relative">

              <div className="absolute -inset-5 rounded-[2.5rem] bg-[#F5864A]/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-sm sm:p-3">

                <div className="rounded-[1.5rem] bg-white p-4 text-slate-900 sm:p-5">

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3">

                    <div>
                      <p className="text-xs font-bold text-slate-400">
                        مرحبًا بكم في
                      </p>

                      <p className="mt-1 text-lg font-black text-[#024949]">
                        شركة البطنان
                      </p>
                    </div>

                    <div className="rounded-full bg-[#024949]/10 px-3 py-1.5 text-[11px] font-black text-[#024949]">
                      جودة موثوقة
                    </div>

                  </div>

                  {/* Logo Area */}
                  <div className="mt-4 flex h-[190px] items-center justify-center overflow-hidden rounded-[1.35rem] bg-slate-50 sm:h-[245px]">

                    <img
                      src="/iogo.jpeg"
                      alt="شعار شركة البطنان"
                      className="h-36 w-36 object-contain sm:h-48 sm:w-48"
                    />

                  </div>

                  {/* Info Cards */}
                  <div className="mt-4 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-[#024949] px-4 py-3 text-white">
                      <p className="text-[11px] text-white/60">
                        الخدمة
                      </p>

                      <p className="mt-1 text-sm font-black">
                        تصنيع وطباعة
                      </p>
                    </div>

                    <div className="rounded-2xl bg-orange-50 px-4 py-3 text-[#024949]">
                      <p className="text-[11px] text-slate-400">
                        التنفيذ
                      </p>

                      <p className="mt-1 text-sm font-black">
                        حسب الطلب
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Small Floating Badge - Desktop */}
              <div className="absolute -bottom-4 right-4 hidden rounded-2xl border border-white/15 bg-white/95 px-4 py-3 shadow-xl sm:block">

                <p className="text-[11px] font-bold text-slate-400">
                  نراجع التفاصيل
                </p>

                <p className="mt-0.5 text-sm font-black text-[#024949]">
                  قبل بدء التنفيذ ✓
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="scroll-mt-24 bg-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-[#024949]/10 px-4 py-2 text-xs font-black text-[#024949] sm:text-sm">
              لماذا شركة البطنان؟
            </span>

            <h2 className="mt-4 text-[2rem] font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              حلول تصنيع وطباعة تناسب احتياجك
            </h2>

            <p className="mt-4 text-[15px] leading-8 text-slate-500 sm:text-base">
              منتجاتنا تُصنع حسب الطلب، لذلك يمكنك إرسال تفاصيل الكمية
              والمقاس واللون والطباعة وأي ملاحظات إضافية، ثم يقوم فريقنا
              بمراجعة الطلب قبل البدء في التنفيذ.
            </p>

          </div>

          {/* Features */}
          <div className="mt-9 grid gap-4 md:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#024949]/10 text-[#024949]">
                    <Icon name={feature.icon} />
                  </div>

                  <div>

                    <h3 className="text-lg font-black text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {feature.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="scroll-mt-24 bg-slate-50 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <span className="text-sm font-black text-[#024949]">
                خدماتنا
              </span>

              <h2 className="mt-2 text-[2rem] font-black tracking-tight text-slate-900 sm:text-4xl">
                ماذا نقدم لك؟
              </h2>

            </div>

            <Link
              href="/products"
              className="text-sm font-black text-[#024949] transition hover:text-[#F5864A]"
            >
              عرض المنتجات ←
            </Link>

          </div>

          {/* Services */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#024949]/20 hover:shadow-xl sm:p-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#024949]/10 text-[#024949] transition group-hover:bg-[#024949] group-hover:text-white">
                  <Icon name={service.icon} />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {service.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#024949] py-14 text-white sm:py-20">

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#F5864A]/15 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">

          <span className="text-sm font-bold text-[#F5864A]">
            جاهز لطلبك؟
          </span>

          <h2 className="mt-3 text-[2rem] font-black leading-tight sm:text-5xl">
            أخبرنا بما تحتاج وسنراجع طلبك
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-white/70 sm:text-base">
            اختر المنتج المناسب وأرسل تفاصيل الكمية والمواصفات والملاحظات،
            وسيتم مراجعة طلبك قبل التنفيذ.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F5864A] px-8 font-black shadow-xl transition active:scale-[0.98] hover:bg-[#e9783d]"
          >
            ابدأ طلبك الآن

            <span className="mr-2 text-xl">
              ←
            </span>
          </Link>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="scroll-mt-24 bg-white py-14 sm:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <div className="mb-8 text-center">

            <span className="text-sm font-black text-[#024949]">
              تواصل معنا
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              نحن جاهزون لخدمتك
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Phone */}
            <a
              href="tel:0923324462"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >

              <p className="text-sm font-bold text-slate-400">
                الهاتف
              </p>

              <p className="mt-2 text-2xl font-black text-[#024949]">
                0923324462
              </p>

              <p className="mt-1 text-sm text-slate-500">
                اضغط للاتصال مباشرة
              </p>

            </a>

            {/* Location */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

              <p className="text-sm font-bold text-slate-400">
                موقعنا
              </p>

              <p className="mt-2 text-2xl font-black text-slate-900">
                نجمة الخليج - طبرق
              </p>

              <p className="mt-1 text-sm text-slate-500">
                يسعدنا استقبال طلباتكم واستفساراتكم
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 py-9 text-center text-white">

        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <p className="text-lg font-black">
            شركة البطنان
          </p>

          <p className="mt-1 text-sm text-slate-400">
            لصناعة وطباعة الأكياس البلاستيكية
          </p>

          <div className="my-6 border-t border-white/10" />

          <p className="text-xs text-slate-500">
            © 2026 شركة البطنان - جميع الحقوق محفوظة
          </p>

        </div>

      </footer>

    </main>
  );
}