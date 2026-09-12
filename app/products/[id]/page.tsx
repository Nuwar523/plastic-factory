import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
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
    <main
      dir="rtl"
      className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900"
    >
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-7 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8">
        {/* BACK */}
        <Link
          href="/products"
          className="mb-5 inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-xs font-black text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-[#024949] sm:mb-7 sm:text-sm"
        >
          <span className="ml-2">
            →
          </span>

          العودة إلى المنتجات
        </Link>

        {/* PRODUCT */}
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-2">

            {/* ================= IMAGE ================= */}
            <div className="bg-slate-100 p-3 sm:p-5 lg:p-7">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
                <img
                  src={
                    product.image ||
                    "https://placehold.co/1000x1000?text=Product"
                  }
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* ================= INFORMATION ================= */}
            <div className="flex flex-col p-5 sm:p-8 lg:p-12">

              <div>
                {/* CATEGORY */}
                <span className="inline-flex rounded-full bg-[#024949]/10 px-3 py-1.5 text-xs font-black text-[#024949] sm:px-4 sm:py-2 sm:text-sm">
                  {product.category || "منتج بلاستيكي"}
                </span>

                {/* NAME */}
                <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {product.name}
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-8 text-slate-500 sm:text-base sm:leading-8">
                  {product.description ||
                    "منتج يتم تصنيعه حسب الطلب."}
                </p>
              </div>

              {/* PRICE */}
              <div className="mt-7 rounded-2xl bg-slate-50 p-5 sm:mt-9 sm:p-6">
                <p className="text-xs font-bold text-slate-400 sm:text-sm">
                  السعر المعلن
                </p>

                <p className="mt-1 text-3xl font-black text-[#024949] sm:text-4xl">
                  LYD {product.price}
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                  توجد عروض خاصة للكميات الكبيرة.
                </p>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold text-slate-400">
                    التصنيع
                  </p>

                  <p className="mt-1 text-sm font-black text-slate-800">
                    حسب الطلب
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold text-slate-400">
                    الطباعة
                  </p>

                  <p className="mt-1 text-sm font-black text-slate-800">
                    حسب المواصفات
                  </p>
                </div>

              </div>

              {/* ORDER */}
              <Link
                href={`/products/${product.id}/order`}
                className="mt-6 flex min-h-14 items-center justify-center rounded-2xl bg-[#024949] px-6 text-base font-black text-white shadow-lg shadow-[#024949]/20 transition hover:bg-[#013c3c] active:scale-[0.99] sm:mt-8 sm:text-lg"
              >
                اطلب هذا المنتج

                <span className="mr-2 text-xl">
                  ←
                </span>
              </Link>

              <p className="mt-3 text-center text-xs leading-6 text-slate-400 sm:text-sm">
                بعد الضغط يمكنك إرسال تفاصيل الكمية والمقاس واللون والطباعة
                وأي ملاحظات إضافية.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white py-7 text-center text-xs text-slate-400 sm:text-sm">
        © شركة البطنان لصناعة وطباعة الأكياس البلاستيكية
      </footer>
    </main>
  );
}