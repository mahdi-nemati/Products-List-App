const NewProduct = ({
  submitHandler,
  nameHandler,
  input,
  group,
  groupHandler,
  errorHandler,
}) => {
  return (
    <section class="flex flex-col mb-6 items-center w-full md:w-11/12">
      <h3 class="text-base text-orange-600 mb-2 sm:text-lg md:text-xl lg:text-2xl">
        Add new product
      </h3>
      <form
        onSubmit={submitHandler}
        class="flex flex-col text-base sm:text-lg md:text-xl lg:text-2xl items-center w-full"
      >
        <div class="w-4/5 ">
          <input
            type="text"
            onChange={nameHandler}
            value={input}
            placeholder="Product Name"
            class="outline-none border border-orange-500 rounded-md pl-1 
            caret-orange-600  focus:border-2 w-9/12 sm:w-10/12 sm:mr-2 lg:w-8/12"
          />
          <select
            onChange={groupHandler}
            class="outline-none border border-orange-400 bg-gray-50 rounded-md"
          >
            {group.map((g) => (
              <option key={g.title}>{g.title}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          onClick={errorHandler}
          class="mt-2 bg-orange-400 text-white w-4/5 rounded-md md:pt-1 md:pl-1 flex justify-center"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
