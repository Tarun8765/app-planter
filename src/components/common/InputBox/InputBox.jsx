function InputBox({
  labelClass,
  labelFor,
  labelValue,
  labelStatus,
  handleInputChange,
  type,
  value,
  name,
  placeholder,
  maxLength,
  minLength,
  readOnly,
  id,
}) {
  return (
    <>
      {labelStatus ?? (
        <label className={labelClass} htmlFor={labelFor}>
          {labelValue}
        </label>
      )}
      <input
        type={type ? type : ""}
        onChange={handleInputChange}
        defaultValue={value ? value : ""}
        id={id ? id : ""}
        name={name ? name : ""}
        readOnly={readOnly ? readOnly : ""}
        placeholder={placeholder ? placeholder : ""}
        maxLength={maxLength ? maxLength : ""}
        minLength={minLength ? maxLength : ""}
      />
    </>
  );
}
export default InputBox;
