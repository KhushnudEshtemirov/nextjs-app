import { useRouter } from "next/router";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <>
      <h1>Product id: {productId}</h1>
      <h3>
        <Link href="/">Go to Home</Link>
      </h3>
    </>
  );
};

export default Product;
