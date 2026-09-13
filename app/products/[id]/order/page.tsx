import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import SubmitButton from "./SubmitButton";
import Navbar from "../../../components/Navbar";
import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderPage({ params }: Props) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

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

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const customerName = String(
      formData.get("customer_name") || ""
    ).trim();

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
        user_id: user?.id ?? null,
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

    redirect(
      `/products/${product.id}/order/success?orderId=${order.id}`
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900"
    >
      <Navbar />

      {/* عنوان الصفحة */}
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex max-w-full items-center rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 ring-1 ring-slate-200 transition hover:text-[#024949] sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <span className="ml-2 shrink-0">→</span>
            <span>العودة إلى المنتج</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-3 py-5 sm:px-6 sm:py-10 lg:px-8">
        <div className="w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm sm:rounded-[2rem]">
          {/* رأس الطلب */}
          <div className="border-b border-slate-100 p-4 sm:p-8">
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center">
              {/* صورة المنتج */}
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-28 sm:w-28">
                <img
                  src={
                    product.image ||
                    "https://placehold.co/400x400?text=Product"
                  }
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span className="inline-flex rounded-full bg-[#024949]/10 px-3 py-1 text-[11px] font-black text-[#024949] sm:text-xs">
                  طلب منتج
                </span>

                <h1 className="mt-2 break-words text-2xl font-black leading-[1.4] text-slate-900 sm:text-3xl">
                  {product.name}
                </h1>

                <p className="mt-2 break-words text-sm leading-7 text-slate-500">
                  يرجى تعبئة البيانات التالية لإرسال طلبك للمراجعة.
                </p>
              </div>
            </div>
          </div>

          {/* النموذج */}
          <div className="p-4 sm:p-8 lg:p-10">
            <form
              action={submitOrder}
              encType="multipart/form-data"
              className="space-y-5"
            >
              {/* الاسم */}
              <div>
                <label
                  htmlFor="customer_name"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  الاسم الكامل
                </label>

                <input
                  id="customer_name"
                  name="customer_name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="اكتب اسمك الكامل"
                  className="block min-h-12 w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#024949] focus:bg-white focus:ring-4 focus:ring-[#024949]/10"
                />
              </div>

              {/* الهاتف */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  رقم الهاتف
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="09XXXXXXXX"
                  className="block min-h-12 w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#024949] focus:bg-white focus:ring-4 focus:ring-[#024949]/10"
                />
              </div>

              {/* المدينة */}
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  المدينة / المنطقة
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  autoComplete="address-level2"
                  placeholder="مثال: طبرق"
                  className="block min-h-12 w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#024949] focus:bg-white focus:ring-4 focus:ring-[#024949]/10"
                />
              </div>

              {/* الكمية */}
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  الكمية المطلوبة
                </label>

                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  required
                  inputMode="numeric"
                  placeholder="اكتب الكمية"
                  className="block min-h-12 w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#024949] focus:bg-white focus:ring-4 focus:ring-[#024949]/10"
                />
              </div>

              {/* رفع الصورة */}
              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  صورة مرفقة
                </label>

                <div className="w-full min-w-0 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-3 sm:p-4">
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    className="block w-full min-w-0 text-sm text-slate-600 file:ml-3 file:rounded-xl file:border-0 file:bg-[#024949] file:px-4 file:py-2.5 file:text-sm file:font-bold file:text-white hover:file:bg-[#013c3c]"
                  />

                  <p className="mt-2 break-words text-xs leading-6 text-slate-400 sm:text-sm">
                    يمكنك رفع صورة للتصميم أو الشكل المطلوب.
                  </p>
                </div>
              </div>

              {/* الملاحظات */}
              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  ملاحظات الطلب
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  placeholder="مثال: اللون، المقاس، نوع الطباعة، أو أي تفاصيل إضافية..."
                  className="block min-h-32 w-full min-w-0 resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#024949] focus:bg-white focus:ring-4 focus:ring-[#024949]/10"
                />
              </div>

              {/* السعر */}
              <div className="w-full min-w-0 rounded-2xl bg-[#024949]/5 p-4 sm:p-5">
                <div className="flex min-w-0 items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-400 sm:text-sm">
                      السعر المعلن
                    </p>

                    <p className="mt-1 break-words text-2xl font-black text-[#024949] sm:text-3xl">
                      LYD {product.price}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#024949] shadow-sm">
                    سعر مبدئي
                  </div>
                </div>

                <p className="mt-3 break-words text-xs leading-6 text-slate-500 sm:text-sm">
                  قد تختلف الأسعار للكميات الكبيرة بعد مراجعة الطلب.
                </p>
              </div>

              {/* زر الإرسال */}
              <SubmitButton />

              <p className="px-2 text-center text-xs leading-6 text-slate-400">
                بعد إرسال الطلب ستتم مراجعته من فريق شركة البطنان.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-7 text-center">
        <p className="text-xs leading-6 text-slate-400 sm:text-sm">
          © شركة البطنان لصناعة وطباعة الأكياس البلاستيكية
        </p>
      </footer>
    </main>
  );
}