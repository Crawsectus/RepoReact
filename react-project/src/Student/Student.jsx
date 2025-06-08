import styles from "./Student.module.css"
import PropTypes from "prop-types"
function Student(props){
    return(
        <div>
                <p>Nombre: {props.name} </p>
                <p>Edad: {props.age} </p>
                <p>Estudiante: { props.isStudent? "Si" : "No"} </p>
        </div>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
export default Student