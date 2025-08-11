export const Button = ({ name, onClick, className }) => {
  return (
    <a
      data-cy="Category"
      className={className}
      href="#/"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {name}
    </a>
  );
};
