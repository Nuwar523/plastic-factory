import { createProduct } from "./actions";

export default function NewProductPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">

      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          📦 إضافة منتج جديد
        </h1>

        <form
  action={createProduct}
  className="space-y-5"
  
>

          <div>
            <label className="block mb-2 font-semibold">
              اسم المنتج
            </label>

            <input
              name="name"
              type="text"
              placeholder="اكتب اسم المنتج"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              السعر
            </label>

            <input
              name="price"
              type="number"
              placeholder="0"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              الوصف
            </label>

            <textarea
              name="description"
              placeholder="اكتب وصف المنتج"
              className="w-full border rounded-lg p-3 h-32"
            />
          </div>

          <div>
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

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-bold"
          >
            حفظ المنتج
          </button>

        </form>

      </div>

    </main>
  );
}