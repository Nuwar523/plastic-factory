import { createClient } from "@/lib/supabase/server";
import { updateProduct } from "./actions";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          ✏️ تعديل المنتج
        </h1>

        <form action={updateProduct} className="space-y-5">
          <input type="hidden" name="id" value={product?.id} />

          <div>
            <label className="block mb-2 font-semibold">
              اسم المنتج
            </label>

            <input
  type="text"
  name="name"
  defaultValue={product?.name}
  className="w-full border rounded-lg p-3"
/>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              السعر
            </label>

            <input
  type="number"
  name="price"
  defaultValue={product?.price}
  className="w-full border rounded-lg p-3"
/>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              الوصف
            </label>

            <textarea
  name="description"
  defaultValue={product?.description}
  rows={4}
  className="w-full border rounded-lg p-3"
/>
          </div>
          <div className="mt-4">
  <label className="block mb-2 font-semibold">
    صورة المنتج
  </label>

  <input
    type="file"
    name="image"
    accept="image/*"
    className="w-full border rounded-lg p-3"
  />
</div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            حفظ التعديلات
          </button>

          </form>

          </div>
    </main>
  );
}