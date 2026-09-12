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
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "factory" || name === "industry") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
        <path d="M3 21V9l6 3V9l6 3V5h3v16" />
        <path d="M3 21h18" />
        <path d="M7 16h2M12 16h2M17 16h1" />
        <path d="M7 19h2M12 19h2M17 19h1" />
      </svg>
    );
  }

  if (name === "print") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
        <path d="M6 9V3h12v6" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
        <path d="M18 12h.01" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
        <path d="M12 3l2.3 2.3 3.2-.2.8 3.1 2.7 1.7-1.7 2.7.2 3.2-3.1.8L15 19l-3 2-2-3-3.2.2-.8-3.1-2.7-1.7L5 10.7 4.8 7.5l3.1-.8L9 4.3 12 3z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (name === "bag") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
        <path d="M5 8h14l1 13H4L5 8z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    );
  }

  if (name === "store") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
        <path d="M4 10v10h16V10" />
        <path d="M3 10l2-6h14l2 6" />
        <path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
        <path d="M9 20v-5h6v5" />
      </svg>
    );
  }

  if (name === "cart") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
        <path d="M3 4h2l2 11h10l3-8H6" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    );
  }

  if (name === "design") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...commonProps}>
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

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#024949] text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_5%_90%,rgba(245,134,74,0.15),transparent_30%)]" />

        <div className="absolute -left-28 top-32 h-64 w-64 rounded-full bg-[#F5864A]/10 blur-3xl" />

        <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-16">

          <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* HERO CONTENT */}
            <div className="text-center lg:text-right">

              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur sm:text-sm lg:mx-0">
                <span className="h-2 w-2 rounded-full bg-[#F5864A] shadow-[0_0_12px_rgba(245,134,74,0.9)]" />
                الجودة • السرعة • الاحترافية
              </div>

              <h1 className="mx-auto mt-5 max-w-2xl text-[2.35rem] font-black leading-[1.14] tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl">

                <span className="block">
                  شركة البطنان
                </span>

                <span className="mt-1 block text-[#F5864A]">
                  لصناعة وطباعة
                </span>

                <span className="mt-1 block">
                  الأكياس البلاستيكية
                </span>

              </h1>

              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-white/75 sm:text-lg lg:mx-0">
                نقدم حلولًا متكاملة لتصنيع وطباعة الأكياس البلاستيكية حسب
                طلب العميل، للمطاعم والمحلات التجارية والأسواق والمصانع.
              </p>

              {/* HERO BUTTONS */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

                <Link
                  href="/products"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F5864A] px-8 text-base font-black text-white shadow-xl shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e9783d] active:scale-[0.98]"
                >
                  ابدأ طلبك الآن
                  <span className="mr-2 text-xl">
                    ←
                  </span>
                </Link>

                <Link
                  href="/products"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-base font-bold text-white backdrop-blur transition duration-200 hover:bg-white hover:text-[#024949] active:scale-[0.98]"
                >
                  شاهد منتجاتنا
                </Link>

              </div>

              {/* TRUST */}
              <div className="mx-auto mt-5 grid max-w-xl grid-cols-3 gap-2 lg:mx-0">

                <div className="rounded-xl border border-white/10 bg-white/[0.06] px-2 py-2.5 text-center text-[10px] font-bold text-white/75 sm:text-xs">
                  تصنيع حسب الطلب
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.06] px-2 py-2.5 text-center text-[10px] font-bold text-white/75 sm:text-xs">
                  طباعة احترافية
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.06] px-2 py-2.5 text-center text-[10px] font-bold text-white/75 sm:text-xs">
                  مراجعة قبل التنفيذ
                </div>

              </div>

            </div>

            {/* BRAND CARD */}
            <div className="mx-auto w-full max-w-[430px]">

              <div className="relative">

                <div className="absolute -inset-4 rounded-[2.5rem] bg-[#F5864A]/10 blur-3xl" />

                <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur">

                  <div className="rounded-[1.6rem] bg-white p-4 sm:p-5">

                    <div className="flex items-center gap-4">

                      {/* LOGO */}
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 sm:h-28 sm:w-28">

                        <img
                          src="/iogo.jpeg"
                          alt="شعار شركة البطنان"
                          className="h-full w-full scale-[1.45] object-contain"
                        />

                      </div>

                      {/* BRAND TEXT */}
                      <div className="min-w-0">

                        <p className="text-xs font-bold text-slate-400">
                          مرحبًا بكم في
                        </p>

                        <h2 className="mt-1 text-xl font-black text-[#024949] sm:text-2xl">
                          شركة البطنان
                        </h2>

                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                          لصناعة وطباعة الأكياس البلاستيكية
                        </p>

                      </div>

                    </div>

                    <div className="mt-4 h-px bg-slate-100" />

                    <div className="mt-4 grid grid-cols-2 gap-3">

                      <div className="rounded-2xl bg-[#024949] px-3 py-3 text-white">

                        <p className="text-[10px] text-white/55">
                          الخدمة
                        </p>

                        <p className="mt-1 text-sm font-black">
                          تصنيع وطباعة
                        </p>

                      </div>

                      <div className="rounded-2xl bg-orange-50 px-3 py-3 text-[#024949]">

                        <p className="text-[10px] text-slate-400">
                          التنفيذ
                        </p>

                        <p className="mt-1 text-sm font-black">
                          حسب الطلب
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
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

          {/* FEATURES */}
          <div className="mt-9 grid gap-4 md:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#024949]/10 text-[#024949]">
                    <Icon name={feature.icon} />
                  </div>

                  <div className="min-w-0">

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

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="scroll-mt-24 bg-slate-50 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between gap-4">

            <div>

              <span className="text-sm font-black text-[#024949]">
                خدماتنا
              </span>

              <h2 className="mt-2 text-[2rem] font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
                ماذا نقدم لك؟
              </h2>

            </div>

            <Link
              href="/products"
              className="hidden shrink-0 text-sm font-black text-[#024949] transition hover:text-[#F5864A] sm:block"
            >
              عرض المنتجات ←
            </Link>

          </div>

          {/* SERVICES GRID */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#024949]/20 hover:shadow-lg sm:rounded-3xl sm:p-6"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#024949]/10 text-[#024949] transition group-hover:bg-[#024949] group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon name={service.icon} />
                </div>

                <h3 className="mt-4 text-[15px] font-black leading-6 text-slate-900 sm:text-lg">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                  {service.text}
                </p>

              </div>
            ))}

          </div>

          {/* MOBILE PRODUCTS LINK */}
          <div className="mt-6 text-center sm:hidden">

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl bg-[#024949] px-6 py-3 text-sm font-black text-white transition active:scale-[0.98]"
            >
              عرض جميع المنتجات
              <span className="mr-2">
                ←
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#024949] py-14 text-white sm:py-20">

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#F5864A]/15 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">

          <span className="text-sm font-black text-[#F5864A]">
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
            className="mt-7 inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F5864A] px-8 font-black text-white shadow-xl transition duration-200 hover:bg-[#e9783d] active:scale-[0.98]"
          >
            ابدأ طلبك الآن

            <span className="mr-2 text-xl">
              ←
            </span>

          </Link>

        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="scroll-mt-24 bg-white py-14 sm:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <div className="mb-8 text-center">

            <span className="text-sm font-black text-[#024949]">
              تواصل معنا
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              نحن جاهزون لخدمتك
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* PHONE */}
            <a
              href="tel:0923324462"
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#024949]/10 text-[#024949]">

                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                  </svg>

                </div>

                <div>

                  <p className="text-sm font-bold text-slate-400">
                    الهاتف
                  </p>

                  <p className="mt-1 text-xl font-black text-[#024949] sm:text-2xl">
                    0923324462
                  </p>

                </div>

              </div>

              <p className="mt-4 text-sm text-slate-500">
                اضغط للاتصال مباشرة
              </p>

            </a>

            {/* LOCATION */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#024949]/10 text-[#024949]">

                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                </div>

                <div>

                  <p className="text-sm font-bold text-slate-400">
                    موقعنا
                  </p>

                  <p className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                    نجمة الخليج - طبرق
                  </p>

                </div>

              </div>

              <p className="mt-4 text-sm text-slate-500">
                يسعدنا استقبال طلباتكم واستفساراتكم
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
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