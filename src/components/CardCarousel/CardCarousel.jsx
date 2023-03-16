import { Carousel } from "@mantine/carousel";

import { useStyles } from "./CardCarousel.style";
import aus1 from "../../assets/img/aus1.jpg";
import aus2 from "../../assets/img/aus2.jpg";
import aus3 from "../../assets/img/aus3.jpg";
import aus4 from "../../assets/img/aus4.jpg";
import Logo from "../Logo";
const CardCarousel = () => {
  const { classes } = useStyles();

  return (
    <Carousel width="100%" mx="auto" height={400}>
      <Carousel.Slide>
        <div className={classes.card}>
          <div className={classes.werbung}>
            <h2>
              Здесь будет слоган. Его будет очень много, он заполнит все
              пространство. И не понятно, что здесь писать, потому что места еще
              больше.
              <Logo />
            </h2>
          </div>
          <div className={classes.imageWrapper}>
            <img src={aus1} alt="" className={classes.image} />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className={classes.card}>
          <div className={classes.werbung}>
            <h2>
              Здесь будет слоган. Его будет очень много, он заполнит все
              пространство. И не понятно, что здесь писать, потому что места еще
              больше.
            </h2>
          </div>
          <div className={classes.imageWrapper}>
            <img src={aus2} alt="" className={classes.image} />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className={classes.card}>
          <div className={classes.werbung}>
            <h2>
              Здесь будет слоган. Его будет очень много, он заполнит все
              пространство. И не понятно, что здесь писать, потому что места еще
              больше.
            </h2>
          </div>
          <div className={classes.imageWrapper}>
            <img src={aus3} alt="" className={classes.image} />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className={classes.card}>
          <div className={classes.werbung}>
            <h2>
              Здесь будет слоган. Его будет очень много он заполнит все
              пространство. И не понятно, что здесь писать, потому что места еще
              больше.
            </h2>
          </div>
          <div className={classes.imageWrapper}>
            <img src={aus4} alt="" className={classes.image} />
          </div>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default CardCarousel;
