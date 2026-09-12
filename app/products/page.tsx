import Link from "next/link";
import Navbar from "../components/Navbar";
import { createClient } from "@/lib/supabase/server";

export default async function ProductsPage() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900"
    >
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="bg-[#024949] text-white">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              منتجاتنا
            </span>

            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              منتجات شركة البطنان
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              اختر المنتج المناسب لك، واضغط عليه لمشاهدة جميع تفاصيله وإرسال
              طلبك.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
        {error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="text-lg font-black text-red-700">
              تعذر تحميل المنتجات
            </h2>

            <p className="mt-2 text-sm text-red-600">
              يرجى تحديث الصفحة والمحاولة مرة أخرى.
            </p>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] sm:rounded-3xl"
              >
                {/* IMAGE */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={
                      product.image ||
                      "https://placehold.co/800x800?text=Product"
                    }
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-2 top-2 rounded-full bg-white/95 px-2 py-1 text-[10px] font-black text-[#024949] shadow-sm sm:right-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-xs">
                    {product.category || "منتج بلاستيكي"}
                  </span>
                </div>

                {/* INFO */}
                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <h2 className="line-clamp-2 text-sm font-black leading-6 text-slate-900 sm:text-lg sm:leading-7">
                    {product.name}
                  </h2>

                  <p className="mt-1.5 line-clamp-2 text-[11px] leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                    {product.description ||
                      "منتج يتم تصنيعه حسب الطلب."}
                  </p>

                  <div className="mt-auto pt-3 sm:pt-5">
                    <div className="mb-2 border-t border-slate-100 pt-3 sm:mb-3 sm:pt-4">
                      <p className="text-[9px] font-bold text-slate-400 sm:text-xs">
                        السعر المعلن
                      </p>

                      <p className="mt-0.5 text-base font-black text-[#024949] sm:text-xl">
                        LYD {product.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-center rounded-xl bg-[#024949] px-2 py-2.5 text-[11px] font-black text-white transition group-hover:bg-[#013c3c] sm:py-3 sm:text-sm">
                      عرض التفاصيل

                      <span className="mr-1.5 text-base">
                        ←
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-2xl">
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

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center">
        <p className="text-xs leading-5 text-slate-400 sm:text-sm">
          © شركة البطنان لصناعة وطباعة الأكياس البلاستيكية
        </p>
      </footer>
    </main>
  );
}