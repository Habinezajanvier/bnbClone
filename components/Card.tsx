import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import hotel_image from "../assets/hotel_picture.jpeg";
import styles from "../styles/Home.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imageHolder}>
        <Image src={hotel_image} alt="hotel_picture" />
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
