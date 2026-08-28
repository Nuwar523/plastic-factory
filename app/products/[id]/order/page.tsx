import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderPage({ params }: Props) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .eq("status", "active")
    .single();

  if (!product) {
    notFound();
  }

  async function submitOrder(formData: FormData) {
    "use server";

    const supabase = await createClient();

    const customerName = String(formData.get("customer_name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const quantity = Number(formData.get("quantity"));
    const notes = String(formData.get("notes") || "").trim();
    const image = formData.get("image") as File;

let imageUrl: string | null = null;

if (image && image.size > 0) {
  const fileExt = image.name.split(".").pop() || "jpg";
const fileName = `${Date.now()}-${crypto.randomUUID()}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from("order-images")
    .upload(fileName, image);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage
    .from("order-images")
    .getPublicUrl(fileName);

  imageUrl = data.publicUrl;
}

    if (!customerName || !phone || !city || !quantity || quantity < 1) {
      return;
    }

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
  customer_name: customerName,
  phone,
  city,
  notes: notes || null,
  customer_image: imageUrl,
})
      .select("id")
      .single();

    if (orderError || !order) {
  throw new Error(
    orderError?.message || "فشل في إنشاء الطلب"
  );
}

    const { error: itemError } = await supabase
      .from("order_items")
      .insert({
        order_id: order.id,
        product_id: product.id,
        quantity,
      });

    if (itemError) {
      throw new Error("فشل في إضافة المنتج إلى الطلب");
    }

    redirect(`/products/${product.id}/order/success`);
  }

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50">

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-teal-600"
          >
            شركة البطنان
          </Link>

          <Link
            href={`/products/${product.id}`}
            className="font-medium text-gray-600"
          >
            ← العودة للمنتج
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12">

        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10">

          <div className="mb-8">
            <p className="font-semibold text-teal-600">
              طلب منتج
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-2 text-gray-500">
              يرجى تعبئة البيانات التالية لإرسال طلبك للمراجعة.
            </p>
          </div>

          <form action={submitOrder} className="space-y-5">

            <div>
              <label className="mb-2 block font-semibold">
                الاسم الكامل
              </label>

              <input
                name="customer_name"
                type="text"
                required
                placeholder="اكتب اسمك الكامل"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                رقم الهاتف
              </label>

              <input
                name="phone"
                type="tel"
                required
                placeholder="09XXXXXXXX"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                المدينة / المنطقة
              </label>

              <input
                name="city"
                type="text"
                required
                placeholder="مثال: طبرق"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                الكمية المطلوبة
              </label>

              <input
                name="quantity"
                type="number"
                min="1"
                required
                placeholder="اكتب الكمية"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-teal-500"
              />
            </div>
            <div>
  <label className="mb-2 block font-semibold">
    صورة مرفقة
  </label>

  <input
    name="image"
    type="file"
    accept="image/*"
    className="w-full rounded-xl border border-gray-300 bg-white p-3"
  />

  <p className="mt-2 text-sm text-gray-500">
    يمكنك رفع صورة توضح التصميم أو الشكل المطلوب.
  </p>
</div>

            <div>
              <label className="mb-2 block font-semibold">
                ملاحظات الطلب
              </label>

              <textarea
                name="notes"
                rows={5}
                placeholder="مثال: اللون، المقاس، نوع الطباعة، أو أي تفاصيل إضافية..."
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-teal-500"
              />
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                السعر المعلن
              </p>

              <p className="mt-1 text-2xl font-bold text-teal-600">
                LYD {product.price}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                قد تختلف الأسعار للكميات الكبيرة بعد مراجعة الطلب.
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-teal-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-teal-700"
            >
              إرسال الطلب للمراجعة
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}