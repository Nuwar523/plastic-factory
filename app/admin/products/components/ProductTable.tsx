type ProductTableProps = {
  products: any[];
};

export default function ProductTable({
  products,
}: ProductTableProps) {
  return (
    <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
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
    {products.map((product) => (
  <tr key={product.id}>
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
  RM {product.price}
</td>
<td className="p-4 text-center text-gray-600 truncate">
  {product.description}
</td>
  </tr>
))}

</tbody>
</table>
    </div>
  );
}