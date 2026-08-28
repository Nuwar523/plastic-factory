import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function ProductsPage() {
  const supabase = await createClient();

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-teal-50 sm:h-11 sm:w-11">
              <img
                src="/iogo.jpeg"
                alt="شركة البطنان"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-black text-teal-600 sm:text-lg">
                شركة البطنان
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                لصناعة وطباعة الأكياس البلاستيكية
              </p>
            </div>
          </Link>

          {/* Home */}
          <Link
            href="/"
            className="shrink-0 rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-teal-50 hover:text-teal-700 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            الرئيسية
          </Link>
        </div>
      </header>

      {/* Hero / Page Title */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-7 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8">

        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            منتجاتنا
          </span>

          <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            منتجات شركة البطنان
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7">
            نوفر أكياس بلاستيكية مصنّعة ومطبوعة حسب احتياجات العملاء،
            بجودة مناسبة لمختلف الاستخدامات.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">

        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
              >

                {/* Product Image */}
                <Link
                  href={`/products/${product.id}`}
                  className="block overflow-hidden bg-slate-100"
                >
                  <div className="aspect-[16/10] w-full sm:aspect-[4/3]">
                    <img
                      src={
                        product.image ||
                        "https://placehold.co/800x600?text=Product"
                      }
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Product Information */}
                <div className="p-4 sm:p-6">

                  {/* Category */}
                  <span className="text-xs font-bold text-teal-600 sm:text-sm">
                    {product.category || "منتج بلاستيكي"}
                  </span>

                  {/* Name */}
                  <h2 className="mt-1.5 line-clamp-2 text-lg font-black leading-7 text-slate-900 sm:mt-2 sm:text-2xl sm:leading-8">
                    {product.name}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-slate-500">
                    {product.description ||
                      "منتج متوفر حسب الطلب وبجودة مناسبة لاحتياجاتك."}
                  </p>

                  {/* Price + Button */}
                  <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:pt-5">

                    {/* Price */}
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        السعر المعلن
                      </p>

                      <p className="mt-1 text-xl font-black text-teal-600 sm:text-2xl">
                        LYD {product.price}
                      </p>
                    </div>

                    {/* View Product */}
                    <Link
                      href={`/products/${product.id}`}
                      className="flex w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700 active:scale-[0.98] sm:w-auto sm:text-base"
                    >
                      عرض المنتج
                      <span className="mr-2">←</span>
                    </Link>

                  </div>
                </div>
              </article>
            ))}

          </div>
        ) : (

          /* No Products */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center sm:rounded-3xl sm:p-14">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-3xl">
              📦
            </div>

            <h2 className="mt-5 text-xl font-black text-slate-800">
              لا توجد منتجات متاحة حاليًا
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              يرجى العودة لاحقًا لمشاهدة منتجاتنا.
            </p>

          </div>
        )}

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center">
        <p className="text-xs leading-5 text-slate-400 sm:text-sm">
          © شركة البطنان لصناعة وطباعة الأكياس البلاستيكية
        </p>
      </footer>

    </main>
  );
}