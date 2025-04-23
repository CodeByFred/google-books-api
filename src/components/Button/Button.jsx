import classes from "../Button/Button.module.scss";

const Button = ({ handleClick }) => {
  return (
    <button className={classes.button} onClick={handleClick}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <span>Search</span>
    </button>
  );
};

export default Button;
