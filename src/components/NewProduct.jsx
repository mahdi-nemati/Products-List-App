const NewProduct = ({
  submitHandler,
  nameHandler,
  input,
  group,
  groupHandler,
  errorHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={nameHandler} value={input} />
      <select onChange={groupHandler}>
        {group.map((g) => (
          <option key={g.title}>{g.title}</option>
        ))}
      </select>
      <button type="submit" onClick={errorHandler}>
        Add
      </button>
    </form>
  );
};

export default NewProduct;
