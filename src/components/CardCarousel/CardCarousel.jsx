import { Carousel } from "@mantine/carousel";

import { useStyles } from "./CardCarousel.style";
import aus1 from "../../assets/img/aus1.jpg";
import aus2 from "../../assets/img/aus2.jpg";
import aus3 from "../../assets/img/aus3.jpg";
import aus4 from "../../assets/img/aus4.jpg";
const CardCarousel = () => {
  const { classes } = useStyles();

  return (
    <Carousel maw={1000} mx="auto" height={300}>
      <Carousel.Slide>
        <img src={aus1} alt="" className={classes.slide} />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={aus2} alt="" className={classes.slide} />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={aus3} alt="" className={classes.slide} />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={aus4} alt="" className={classes.slide} />
      </Carousel.Slide>
    </Carousel>
  );
};

export default CardCarousel;
