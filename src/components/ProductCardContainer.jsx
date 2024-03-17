import ProductCard from "./ProductCard.1";


export default function ProductCardContainer({ products }) {
  const productsJsx = products.map((product) => (
    // eslint-disable-next-line react/jsx-key
    <ProductCard product={product} />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
