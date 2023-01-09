import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import hotelImage from "../assets/hotel_picture.jpeg";
import styles from "../styles/Home.module.css";
import AliceCarousel, { DotsItem } from "react-alice-carousel";

export default function Card() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Image
      src={hotelImage}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <Image
      src={hotelImage}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <Image
      src={hotelImage}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  return (
    <div className={styles.card}>
      <div className={styles.imageHolder}>
        {/* <Image src={hotelImage} alt="hotel_picture" /> */}
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          // renderDotsItem={(e: DotsItem) => (
          //   <div className={styles.carouselDot}>
          //     <BsDot />
          //   </div>
          // )}
        />
      </div>
      <div className={styles.descriptions}>
        <div>
          <p className={styles.name}>Cape town, South Africa</p>
          <p className={styles.descriptionText}>Hosted by Louise</p>
          <p className={styles.descriptionText}>Jan 10-15</p>
          <p className={styles.price}>
            <span>$49</span> night
          </p>
        </div>
        <div className={styles.rating}>
          <AiFillStar size="1rem" />
          <p>5.0</p>
        </div>
      </div>
    </div>
  );
}
