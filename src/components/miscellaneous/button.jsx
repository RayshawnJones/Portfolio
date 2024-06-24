export default function Button({ children, onClick, classes = "button" }) {
  return (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
