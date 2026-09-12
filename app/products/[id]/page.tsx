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
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900"
    >
      <Navbar />

      <section className="mx-auto w-full max-w-7xl min-w-0 px-3 pb-10 pt-5 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8">
        <Link
          href="/products"
          className="mb-5 inline-flex max-w-full items-center rounded-xl bg-white px-3 py-2.5 text-xs font-black text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-[#024949] sm:mb-7 sm:px-4 sm:text-sm"
        >
          <span className="ml-2 shrink-0">→</span>
          <span className="break-words">العودة إلى المنتجات</span>
        </Link>

        <div className="w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm sm:rounded-[2rem]">
          <div className="grid w-full min-w-0 lg:grid-cols-2">
            {/* صورة المنتج */}
            <div className="w-full min-w-0 bg-slate-100 p-2.5 sm:p-5 lg:p-7">
              <div className="relative aspect-square w-full min-w-0 overflow-hidden rounded-2xl bg-white sm:rounded-3xl">
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

            {/* معلومات المنتج */}
            <div className="flex w-full min-w-0 flex-col p-4 sm:p-8 lg:p-12">
              <div className="min-w-0">
                <span className="inline-flex max-w-full rounded-full bg-[#024949]/10 px-3 py-1.5 text-xs font-black text-[#024949] sm:px-4 sm:py-2 sm:text-sm">
                  {product.category || "منتج بلاستيكي"}
                </span>

                <h1 className="mt-4 w-full max-w-full break-words text-2xl font-black leading-[1.5] tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
                  {product.name}
                </h1>

                <p className="mt-4 w-full max-w-full break-words text-sm leading-8 text-slate-500 sm:text-base sm:leading-8">
                  {product.description ||
                    "منتج يتم تصنيعه حسب الطلب."}
                </p>
              </div>

              {/* السعر */}
              <div className="mt-6 w-full min-w-0 rounded-2xl bg-slate-50 p-4 sm:mt-9 sm:p-6">
                <p className="text-xs font-bold text-slate-400 sm:text-sm">
                  السعر المعلن
                </p>

                <p className="mt-1 break-words text-2xl font-black text-[#024949] sm:text-4xl">
                  LYD {product.price}
                </p>

                <p className="mt-2 break-words text-xs leading-6 text-slate-500 sm:text-sm">
                  توجد عروض خاصة للكميات الكبيرة.
                </p>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-5 grid w-full min-w-0 grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2">
                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold text-slate-400">
                    التصنيع
                  </p>

                  <p className="mt-1 break-words text-sm font-black text-slate-800">
                    حسب الطلب
                  </p>
                </div>

                <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold text-slate-400">
                    الطباعة
                  </p>

                  <p className="mt-1 break-words text-sm font-black text-slate-800">
                    حسب المواصفات
                  </p>
                </div>
              </div>

              {/* زر الطلب */}
              <Link
                href={`/products/${product.id}/order`}
                className="mt-5 flex min-h-14 w-full max-w-full items-center justify-center rounded-2xl bg-[#024949] px-4 text-center text-base font-black text-white shadow-lg shadow-[#024949]/20 transition hover:bg-[#013c3c] active:scale-[0.99] sm:mt-8 sm:px-6 sm:text-lg"
              >
                <span className="break-words">اطلب هذا المنتج</span>

                <span className="mr-2 shrink-0 text-xl">
                  ←
                </span>
              </Link>

              <p className="mt-3 w-full max-w-full break-words text-center text-xs leading-6 text-slate-400 sm:text-sm">
                بعد الضغط يمكنك إرسال تفاصيل الكمية والمقاس واللون والطباعة
                وأي ملاحظات إضافية.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-full border-t border-slate-200 bg-white px-3 py-7 text-center text-xs text-slate-400 sm:px-4 sm:text-sm">
        © شركة البطنان لصناعة وطباعة الأكياس البلاستيكية
      </footer>
    </main>
  );
}