import PropTypes from "prop-types";
import "./Button.css"; // Import external CSS for styling

const Button = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {label}
    </button>
  );
};

// Prop types validation
Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Default props
Button.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button;
