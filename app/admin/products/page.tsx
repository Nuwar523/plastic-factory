import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteProduct } from "./actions";

export default async function ProductsPage() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    return (
      <div dir="rtl" className="p-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
          حدث خطأ أثناء تحميل المنتجات
        </div>
      </div>
    );
  }

  const totalProducts = products?.length ?? 0;

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50">

      {/* Page Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="mb-1 text-sm font-semibold text-teal-600">
                إدارة المتجر
              </p>

              <h1 className="text-3xl font-bold text-slate-900">
                المنتجات
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                إدارة منتجات شركة البطنان والأسعار والمعلومات الخاصة بها.
              </p>
            </div>

            <Link
              href="/admin/products/new"
              className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-700"
            >
              + إضافة منتج جديد
            </Link>

          </div>

        </div>
      </div>


      {/* Statistics */}
      <div className="mx-auto max-w-7xl px-6 py-6">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  إجمالي المنتجات
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {totalProducts}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                📦
              </div>

            </div>

          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  المنتجات المعروضة
                </p>

                <p className="mt-2 text-3xl font-bold text-green-600">
                  {totalProducts}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                ✓
              </div>

            </div>

          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  حالة المتجر
                </p>

                <p className="mt-2 text-lg font-bold text-green-600">
                  المتجر يعمل
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

            </div>

          </div>

        </div>


        {/* Products Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 px-6 py-5">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  قائمة المنتجات
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  جميع المنتجات الموجودة في المتجر.
                </p>
              </div>

              <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                {totalProducts} منتجات
              </span>

            </div>

          </div>


          {/* Desktop Table */}
          <div className="hidden overflow-x-auto lg:block">

            <table className="w-full text-right">

              <thead className="bg-slate-50">

                <tr className="border-b border-slate-200">

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    المنتج
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    السعر
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    الوصف
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    الحالة
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                    العمليات
                  </th>

                </tr>

              </thead>


              <tbody>

                {products?.map((product) => (

                  <tr
                    key={product.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >

                    {/* Product */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-4">

                        <img
                          src={
                            product.image ||
                            "https://placehold.co/80x80"
                          }
                          alt={product.name}
                          className="h-14 w-14 rounded-xl border border-slate-200 object-cover"
                        />

                        <div>

                          <p className="font-semibold text-slate-900">
                            {product.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            رقم المنتج #{product.id}
                          </p>

                        </div>

                      </div>

                    </td>


                    {/* Price */}
                    <td className="px-6 py-5">

                      <span className="font-bold text-teal-600">
                        LYD {product.price}
                      </span>

                    </td>


                    {/* Description */}
                    <td className="max-w-xs px-6 py-5">

                      <p className="line-clamp-2 text-sm leading-6 text-slate-500">
                        {product.description || "لا يوجد وصف"}
                      </p>

                    </td>


                    {/* Status */}
                    <td className="px-6 py-5">

                      <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">

                        <span className="h-2 w-2 rounded-full bg-green-500" />

                        متوفر

                      </span>

                    </td>


                    {/* Actions */}
                    <td className="px-6 py-5">

                      <div className="flex items-center justify-center gap-2">

                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
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
                            className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                          >
                            حذف
                          </button>

                        </form>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Mobile Cards */}
          <div className="space-y-4 p-4 lg:hidden">

            {products?.map((product) => (

              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >

                <div className="flex gap-4 p-4">

                  <img
                    src={
                      product.image ||
                      "https://placehold.co/100x100"
                    }
                    alt={product.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">

                    <h3 className="font-bold text-slate-900">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-lg font-bold text-teal-600">
                      LYD {product.price}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      {product.description || "لا يوجد وصف"}
                    </p>

                  </div>

                </div>


                <div className="grid grid-cols-2 gap-3 border-t border-slate-100 p-4">

                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="rounded-xl bg-blue-50 py-3 text-center font-semibold text-blue-600"
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
                      className="w-full rounded-xl bg-red-50 py-3 font-semibold text-red-600"
                    >
                      حذف
                    </button>

                  </form>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}