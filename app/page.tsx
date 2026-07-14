import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-cyan-500 via-teal-500 to-slate-900 text-white"
    >
      {/* Navbar */}
      

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-40 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="text-orange-300 font-bold">
            الجودة • السرعة • الاحترافية
          </span>

          <h1 className="text-6xl font-black mt-5 leading-tight">
            شركة البطنان
            <br />
            لصناعة وطباعة
            <br />
            الأكياس البلاستيكية
          </h1>

          <p className="mt-8 text-xl leading-10 text-gray-200">
            نقدم حلولاً متكاملة لتصنيع وطباعة الأكياس البلاستيكية
            للمطاعم والمحلات التجارية والأسواق والمصانع
            باستخدام أحدث تقنيات الطباعة.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-orange-500 px-8 py-4 rounded-xl text-lg hover:scale-105 duration-300 shadow-xl">
              اطلب الآن
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black duration-300">
              شاهد أعمالنا
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src="/iogo.jpeg"
            alt="شركة البطنان"
            className="w-[420px] rounded-[40px] shadow-2xl"
          />

        </div>

      </section>
            {/* الخدمات */}
      <section className="max-w-7xl mx-auto px-8 py-28">

        <h2 className="text-5xl font-black text-center mb-16">
          خدماتنا
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "طباعة أكياس المطاعم",
            "أكياس المحلات التجارية",
            "أكياس السوبرماركت",
            "أكياس المصانع",
            "تصميم الشعارات",
            "طباعة حسب الطلب",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:scale-105 duration-300"
            >
              <div className="text-5xl mb-5">🛍️</div>

              <h3 className="text-2xl font-bold">
                {item}
              </h3>

              <p className="mt-4 text-gray-200">
                جودة عالية وخامات ممتازة مع طباعة احترافية.
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* الإحصائيات */}
      <section className="bg-black/20 py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-10">

          <div>
            <h3 className="text-6xl font-black text-orange-300">15+</h3>
            <p>سنة خبرة</p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-orange-300">300+</h3>
            <p>عميل</p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-orange-300">5000+</h3>
            <p>طلب منفذ</p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-orange-300">24/7</h3>
            <p>دعم العملاء</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-black/40">
        © 2026 شركة البطنان - جميع الحقوق محفوظة
      </footer>

    </main>
  );
}