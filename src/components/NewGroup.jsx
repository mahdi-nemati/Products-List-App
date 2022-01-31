const NewGroup = ({ submitUpdateGroup, updateGroupHandler, newGroup }) => {
  return (
    <section class="flex flex-col mb-6 items-center w-full md:w-11/12">
      <h2 class="text-base text-orange-600 mb-2 sm:text-lg md:text-xl lg:text-2xl">
        Add new group
      </h2>
      <form
        onSubmit={submitUpdateGroup}
        class=" flex justify-center items-center text-base sm:text-lg md:text-xl lg:text-2xl  w-full"
      >
        <input
          type="text"
          onChange={updateGroupHandler}
          value={newGroup}
          placeholder="Group Name"
          class="outline-none border border-orange-500 rounded-md pl-1 
          caret-orange-600  focus:border-2 sm:mr-2 w-3/5 md:p-1"
        />
        <button
          type="submit"
          class=" bg-orange-400 text-white rounded-md w-1/5
          md:p-1 flex justify-center items-center"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default NewGroup;
