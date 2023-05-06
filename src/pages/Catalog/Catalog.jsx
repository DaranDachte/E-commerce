import CardCarousel from "../../components/CardCarousel";
import CatalogBody from "../../components/CatalogBody";
import { useStyles } from "./Catalog.style";

const Catalog = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <CardCarousel />
      <CatalogBody />
    </div>
  );
};

export default Catalog;
