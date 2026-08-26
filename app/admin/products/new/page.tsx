import { createProduct } from "./actions";

export default function NewProductPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 p-4 sm:p-6 lg:p-10"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-emerald-600">
              إدارة المتجر
            </p>

            <h1 className="text-3xl font-black text-slate-800 sm:text-4xl">
              إضافة منتج جديد 📦
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              أضف منتجًا جديدًا إلى متجر شركة البطنان
            </p>
          </div>

          <a
            href="/admin/products"
            className="w-fit rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            ← العودة للمنتجات
          </a>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          {/* Card Header */}
          <div className="border-b border-slate-100 bg-gradient-to-l from-emerald-600 to-teal-500 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                📦
              </div>

              <div>
                <h2 className="text-xl font-black">
                  بيانات المنتج
                </h2>

                <p className="mt-1 text-sm text-emerald-50">
                  أدخل المعلومات الأساسية للمنتج
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            action={createProduct}
            encType="multipart/form-data"
            className="space-y-7 p-5 sm:p-8"
          >

            {/* Product Name */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                اسم المنتج
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="مثال: كيس أهلا وسهلا مطبوع 1 لون"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>

            {/* Price + Quantity */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  السعر
                </label>

                <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-slate-50 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
                  <input
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    required
                    placeholder="0.00"
                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-slate-800 outline-none"
                  />

                  <span className="flex items-center border-r border-slate-200 px-4 font-bold text-emerald-600">
                    LYD
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  الكمية المتوفرة
                </label>

                <input
                  name="stock"
                  type="number"
                  min="0"
                  placeholder="مثال: 100"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                وصف المنتج
              </label>

              <textarea
                name="description"
                required
                placeholder="اكتب وصفًا واضحًا للمنتج، مثل المقاسات، الألوان، نوع الخامة وأي معلومات مهمة..."
                className="min-h-40 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>

            {/* Image */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                صورة المنتج
              </label>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 px-6 py-10 text-center transition hover:border-emerald-400 hover:bg-emerald-50">
                <div className="mb-3 text-5xl">
                  🖼️
                </div>

                <p className="font-bold text-slate-700">
                  اختر صورة المنتج
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  PNG أو JPG أو WEBP
                </p>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit */}
            <div className="border-t border-slate-100 pt-6">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-l from-emerald-600 to-teal-500 py-4 text-lg font-black text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                حفظ المنتج ✓
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                تأكد من صحة بيانات المنتج قبل الحفظ
              </p>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}