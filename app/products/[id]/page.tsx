import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .eq("status", "active")
    .single();

  if (error || !product) {
    notFound();
  }

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
            href="/products"
            className="font-medium text-gray-600 hover:text-teal-600"
          >
            ← المنتجات
          </Link>

        </div>
      </header>

      {/* Product */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">

          {/* Image */}
          <div className="aspect-square bg-gray-100 md:aspect-auto">

            <img
              src={
                product.image ||
                "https://placehold.co/800x800?text=Product"
              }
              alt={product.name}
              className="h-full w-full object-cover"
            />

          </div>

          {/* Information */}
          <div className="flex flex-col justify-center p-8 md:p-12">

            <span className="font-semibold text-teal-600">
              {product.category || "منتج بلاستيكي"}
            </span>

            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {product.description || "منتج يتم تصنيعه حسب الطلب."}
            </p>

            {/* Price */}
            <div className="mt-8 rounded-2xl bg-gray-50 p-5">

              <p className="text-sm text-gray-500">
                السعر
              </p>

              <p className="mt-1 text-3xl font-bold text-teal-600">
                LYD {product.price}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                توجد عروض خاصة للكميات الكبيرة.
              </p>

            </div>

            {/* Order */}
            <Link
              href={`/products/${product.id}/order`}
              className="mt-6 flex items-center justify-center rounded-xl bg-teal-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-teal-700"
            >
              طلب هذا المنتج
            </Link>

            <Link
              href="/products"
              className="mt-3 text-center font-medium text-gray-500 hover:text-gray-800"
            >
              العودة إلى المنتجات
            </Link>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
        © شركة البطنان لصناعة وطباعة الأكياس البلاستيكية
      </footer>

    </main>
  );
}