import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Things from "../components/Product";
import Navbar from "../components/Navbar";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({ id: "0" });
  const [product, setProduct] = useState({ id: "0" });

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoaded(false);
        console.log(response);
        response.map((item: any) => {
          if (item.id.toString() === id) {
            setProduct(item);
          }
        });
      });
  }, [id]);

  if (isLoaded) return <h1>Loading...</h1>;

  return (
    <div>
      <Navbar />
      <Things product={product} />
    </div>
  );
};

export default Product;
