function FormInputs({ divClass, inputClass, type, id, placeholder, name }) {
  return (
    <>
      <div className={divClass}>
        <input
          type={type}
          className={inputClass}
          id={id}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </>
  );
}

export default FormInputs;
