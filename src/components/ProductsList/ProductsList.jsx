import Loader from "../Loader";
import ProductCard from "../ProductCard";
import { useStyles } from "./ProductsList.style";

const ProductsList = ({ products }) => {
  // if products array is empty display <h1>Loading</h1>
  // else display product titles.
  const { classes } = useStyles();
  return (
    <div>
      {!!products.length ? (
        <div className={classes.list}>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductsList;
