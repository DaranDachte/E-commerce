const ProductsList = ({ products }) => {
  // if products array is empty display <h1>Loading</h1>
  // else display product titles.

  return (
    <div>
      {!!products.length ? (
        products.map((product) => {
          return <h2 key={product.id}>{product.title}</h2>;
        })
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default ProductsList;
