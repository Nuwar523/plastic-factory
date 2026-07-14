export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div className="flex items-center gap-4">
          <img
            src="/iogo.jpeg"
            alt="شركة البطنان"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h2 className="font-bold text-xl text-white">
              شركة البطنان
            </h2>

            <p className="text-sm text-orange-300">
              لصناعة وطباعة الأكياس البلاستيكية
            </p>
          </div>
        </div>

        <ul className="hidden md:flex gap-10 text-white font-semibold">
          <li>الرئيسية</li>
          <li>من نحن</li>
          <li>الخدمات</li>
          <li>منتجاتنا</li>
          <li>تواصل معنا</li>
        </ul>

        <button className="bg-orange-500 px-6 py-3 rounded-xl text-white hover:scale-105 duration-300">
          اطلب عرض سعر
        </button>

      </div>
    </nav>
  );
}