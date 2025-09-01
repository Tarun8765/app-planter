function Inputs({ divClass, inputClass, Type, id, placeholder, name }) {
  return (
    <>
      <div className={divClass}>
        <input
          type={Type}
          className={inputClass}
          id={id}
          placeholder={placeholder}
          name={name}
        ></input>
      </div>
    </>
  );
}

export default Inputs;
