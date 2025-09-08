import { Star } from "lucide-react";

interface Product {
  name: string;
  price: string;
  rating: number;
  image: string;
}

interface FeaturedProductsSectionProps {
  products: Product[];
}

export default function FeaturedProductsSection({
  products,
}: FeaturedProductsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">สินค้าแนะนำ</h2>
          <p className="text-gray-600">สินค้าคุณภาพสูงที่ลูกค้าชื่นชอบ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
            >
              <div className="text-4xl mb-4 text-center">{product.image}</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "fill-current" : ""
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  ({product.rating})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                  {product.price}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  เพิ่มในตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
