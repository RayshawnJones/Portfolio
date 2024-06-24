export default function Anchor({ children, link, classes = "button" }) {
  return (
    <a className={classes} href={link}>
      <span>{children}</span>
    </a>
  );
}
