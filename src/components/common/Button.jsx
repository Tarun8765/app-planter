function Button({ text, divClass, className, type }) {
  return (
    <>
      <div className={divClass}>
        <button type={type} className={className}>
          {text}
        </button>
      </div>
    </>
  );
}

export default Button;
