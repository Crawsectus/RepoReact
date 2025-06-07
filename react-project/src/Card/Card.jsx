import reactsvg from "../assets/react.svg"
import styles from "./Card.module.css"
function Card(){
    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={reactsvg} alt="react logo image" />
            <h2 className={styles.cardTitle}>React</h2>
            <p className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
}
export default Card;