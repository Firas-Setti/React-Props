import "./profile.css";
import PropTypes from "prop-types";

function Profile(props){
    return(
        <div className="profile">
        {props.children}
        <h1>{props.fullName}</h1>
        <h2>{props.bio}</h2>
        <h2>{props.profession}</h2>
        <h2>
        <button onClick={() => props.handleName(`My name is Firas Setti`)}>
        Check Me Out
        </button>
        </h2>
        </div>
    );

}

Profile.defaultProps = {
 fullName: "It's always Firas Setti",
 bio: "Well I'm just a student for the time being",
 profession: "A professional sleeper",
};

Profile.propTypes = {
 fullName: PropTypes.string,
 bio: PropTypes.string,
 profession: PropTypes.string,
 handleName: PropTypes.func
};

export default Profile;