import styles from "./Button.module.css"
function Button(){
    const handleClick=(e)=>{e.target.textContent="Ouch!"};
    return(
        <button className={styles.button} onClick={(e)=>handleClick(e)}>Click me!</button>
    );
}
export default Button