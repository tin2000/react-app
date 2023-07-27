import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "~/components/ProductCard";

function CategoryProducts() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //hàm async hàm bất đồng bộ dùng từ khóa await
      //await Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
      const respone = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await respone.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) return <div>Loading.....</div>;

  return <ProductCard products={products} />;
}

export default CategoryProducts;
