const NewProduct = ({
  submitHandler,
  nameHandler,
  input,
  group,
  groupHandler,
  errorHandler,
}) => {
  return (
    <section className="container">
      <h3 className="title">Add new product</h3>
      <form onSubmit={submitHandler} className="addProForm">
        <div>
          <input
            type="text"
            onChange={nameHandler}
            value={input}
            placeholder="Add Product..."
          />
          <select onChange={groupHandler}>
            {group.map((g) => (
              <option key={g.title}>{g.title}</option>
            ))}
          </select>
        </div>
        <button type="submit" onClick={errorHandler}>
          Add
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
