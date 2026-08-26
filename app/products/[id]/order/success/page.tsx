import Link from "next/link";

export default function SuccessPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-4xl">
          ✓
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          تم إرسال طلبك بنجاح
        </h1>

        <p className="mt-4 text-gray-500">
          شكرًا لك. تم استلام طلبك وسيتم مراجعته والتواصل معك قريبًا.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-xl bg-teal-600 px-8 py-4 font-bold text-white hover:bg-teal-700"
        >
          العودة إلى المنتجات
        </Link>
      </div>
    </main>
  );
}