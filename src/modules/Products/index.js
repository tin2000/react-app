import { useEffect, useState } from "react";
import Categories from "~/components/Categories";
import ProductCard from "~/components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //hàm async hàm bất đồng bộ dùng từ khóa await
      //await Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
      const respone = await fetch("https://fakestoreapi.com/products");
      const data = await respone.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Products;
