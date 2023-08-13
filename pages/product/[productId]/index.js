import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <h1>Product id: {productId}</h1>;
};

export default Product;
