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
    <main dir="rtl" className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-2xl font-bold text-teal-600"
          >
            شركة البطنان
          </Link>

          <Link
            href="/"
            className="font-medium text-gray-600 hover:text-teal-600"
          >
            الرئيسية
          </Link>

        </div>
      </header>

      {/* Page Title */}
      <section className="mx-auto max-w-7xl px-6 pb-6 pt-12">

        <p className="mb-2 font-semibold text-teal-600">
          منتجاتنا
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          منتجات شركة البطنان
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          نوفر أكياس بلاستيكية مصنّعة ومطبوعة حسب احتياجات العملاء
          وبجودة مناسبة لمختلف الاستخدامات.
        </p>

      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        {products && products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (

              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="aspect-[4/3] overflow-hidden bg-gray-100">

                  <img
                    src={
                      product.image ||
                      "https://placehold.co/800x600?text=Product"
                    }
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="p-5">

                  <span className="text-sm font-medium text-teal-600">
                    {product.category || "منتج بلاستيكي"}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-gray-600">
                    {product.description || "منتج متوفر حسب الطلب."}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <div>
                      <p className="text-sm text-gray-500">
                        السعر
                      </p>

                      <p className="text-2xl font-bold text-teal-600">
                        LYD {product.price}
                      </p>
                    </div>

                    <Link
                      href={`/products/${product.id}`}
                      className="rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                    >
                      عرض المنتج
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>
        ) : (

          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">

            <h2 className="text-xl font-bold text-gray-800">
              لا توجد منتجات متاحة حاليًا
            </h2>

            <p className="mt-2 text-gray-500">
              يرجى العودة لاحقًا لمشاهدة منتجاتنا.
            </p>

          </div>

        )}

      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        © شركة البطنان لصناعة وطباعة الأكياس البلاستيكية
      </footer>

    </main>
  );
}