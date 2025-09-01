function Textarea({ divClass, taClass, id, name, plaseholder, row }) {
  return (
    <>
      <div className={divClass}>
        <textarea
          className={taClass}
          rows={row}
          id={id}
          name={name}
          placeholder={plaseholder}
        ></textarea>
      </div>
    </>
  );
}

export default Textarea;
