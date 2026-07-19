import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteProduct } from "./actions";
import { logout } from "../logout";
export default async function ProductsPage() {
  const supabase = await createClient();

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex justify-between items-center">

  <div>
    <h1 className="text-4xl font-bold text-gray-800">
      🛍️ إدارة المنتجات
    </h1>

    <p className="text-gray-500 mt-2">
      يمكنك إدارة جميع منتجات المصنع من هنا.
    </p>
  </div>

  <div className="flex items-center gap-4">

    <div className="bg-gray-100 px-5 py-3 rounded-xl text-center">
      <p className="text-sm text-gray-500">
        عدد المنتجات
      </p>

      <p className="text-2xl font-bold text-green-600">
        {products?.length ?? 0}
      </p>
    </div>

    <Link
      href="/admin/products/new"
      className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-xl font-semibold shadow"
    >
      + إضافة منتج
    </Link>
<form action={logout}>
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-xl font-semibold shadow"
  >
    تسجيل الخروج
  </button>
</form>
  </div>

</div>

     <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">

        <table className="w-full table-fixed">

          <thead className="bg-gray-50 text-gray-700">

            <tr>
              <th className="p-5 text-center font-bold w-24">الصورة</th>

<th className="p-5 text-center font-bold w-52">الاسم</th>

<th className="p-5 text-center font-bold w-32">السعر</th>

<th className="p-5 text-center font-bold">الوصف</th>

<th className="p-5 text-center font-bold w-44">العمليات</th>

            </tr>

          </thead>

          <tbody>

            {products?.map((product) => (

              <tr
  key={product.id}
  className="border-t hover:bg-gray-50 transition duration-200"
>
                <td className="p-4 text-center">
  <img
    src={product.image || "https://placehold.co/80x80"}
    alt={product.name}
    className="w-20 h-20 rounded-xl object-cover mx-auto border border-gray-200 shadow-sm"
  />
</td>

<td className="p-4 text-center font-medium">
  {product.name}
</td>

<td className="p-4 text-center font-semibold text-green-600">
  LYD {product.price}
</td>

<td className="p-4 text-center">
  <p className="line-clamp-2 break-words">
    {product.description}
  </p>
</td>

<td className="p-4">

  <Link
    href={`/admin/products/${product.id}/edit`}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
  >
    تعديل
  </Link>

  <form
  action={async () => {
    "use server";
    await deleteProduct(product.id);
  }}
>
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-medium"
  >
    حذف
  </button>
</form>

</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}