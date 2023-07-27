import { useEffect, useState } from "react";
import FeatureCard from "~/components/FeatureCard";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const respone = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await respone.json();
      setCategories(data);
    };
    fetchProducts();
  }, []);
  if (categories.length === 0) return <div>Loading.....</div>;
  return <FeatureCard cards={categories} />;
}

export default Categories;
