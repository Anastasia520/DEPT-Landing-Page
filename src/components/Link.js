export function Link({ path, label, children, ...rest }) {
  return (
    <a {...rest} href={path}>
      {children || label}
    </a>
  );
}
