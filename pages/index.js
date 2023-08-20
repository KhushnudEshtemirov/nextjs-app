import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>
        <Link href="/product/1">Products 1</Link>
      </h2>
      <h2>
        <Link href="/product/2">Products 2</Link>
      </h2>
      <h2>
        <Link href="/product/3">Products 3</Link>
      </h2>
    </>
  );
}
