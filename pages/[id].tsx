import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Things from "../components/Product";
import Navbar from "../components/Navbar";

interface Product{
  id: string;
  category: string;
}

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response: any) => {
        setData(response);
        setIsLoading(false);
        console.log(response);
        const matchedProducts = response.filter((item: any)=>item.category === id || item.id.toString() === id);

        // this matchedProducts will repeat the product because of the || operator in the filter method above to avoid that we will use the Set method to remove the duplicates

        setProduct(Array.from(new Set(matchedProducts)));
      });
  }, [id]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Navbar />
      {product.map((item: any) => (
        <Things key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Product;
