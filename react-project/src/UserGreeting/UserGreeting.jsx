import PropTypes from "prop-types"
function UserGreeting(props){
    const Welcome= <h2>Welcome {props.username} </h2>;
    const loginPrompt=  <h2>Please log in</h2>
    return(props.isLogged ? Welcome:loginPrompt);
}
UserGreeting.propTypes={
    usernamename: PropTypes.string,
    isLogged: PropTypes.bool
}
export default UserGreeting;
