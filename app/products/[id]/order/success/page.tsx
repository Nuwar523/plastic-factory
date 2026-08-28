import Link from "next/link";

type Props = {
  searchParams: Promise<{
    orderId?: string;
  }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const { orderId } = await searchParams;

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 via-white to-slate-50 px-4 py-8 sm:px-6"
    >
      <div className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-xl sm:p-10">

        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-4xl font-bold text-teal-600">
          ✓
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black text-slate-900 sm:text-3xl">
          تم إرسال طلبك بنجاح
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          شكرًا لك. تم استلام طلبك وسيتم مراجعته والتواصل معك قريبًا.
        </p>

        {/* Order Number */}
        {orderId && (
          <div className="mt-6 rounded-2xl border border-teal-100 bg-teal-50 p-5">
            <p className="text-sm font-semibold text-slate-500">
              رقم الطلب
            </p>

            <p className="mt-1 text-3xl font-black text-teal-600">
              #{orderId}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              احتفظ برقم الطلب لمتابعته لاحقًا
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 space-y-3">

          <Link
            href="/my-orders"
            className="block w-full rounded-xl bg-teal-600 px-6 py-4 text-center font-bold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
          >
            📋 متابعة طلباتي
          </Link>

          <Link
            href="/products"
            className="block w-full rounded-xl border border-slate-200 bg-white px-6 py-4 text-center font-bold text-slate-700 transition hover:bg-slate-50"
          >
            🛍️ العودة إلى المنتجات
          </Link>

        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-slate-400">
          شركة البطنان • لصناعة وطباعة الأكياس البلاستيكية
        </p>

      </div>
    </main>
  );
}