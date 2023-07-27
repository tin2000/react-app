import { useEffect, useState } from "react";
import Categories from "~/components/Categories";

import Hero from "~/components/Hero";
import ProductCard from "~/components/ProductCard";
import Stats from "~/components/StatCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //hàm async hàm bất đồng bộ dùng từ khóa await
      //await Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
      const respone = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await respone.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          SẢN PHẨM
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          SẢN PHẨM PHỔ BIẾN
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading...</div>
      )}
      <ProductCard />
      <Stats />
    </>
  );
}

export default Home;
