import Link from "next/link";
type ProductHeaderProps = {
  totalProducts: number;
};

export default function ProductHeader({
  totalProducts,
}: ProductHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Products
        </h1>

        <p className="mt-1 text-gray-500">
          Total Products: {totalProducts}
        </p>
      </div>

      <Link
  href="/admin/products/new"
  className="rounded-lg bg-black px-5 py-2.5 font-medium text-white transition hover:bg-gray-800"
>
        + Add Product
      </Link>
    </div>
  );
}