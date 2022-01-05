const NewGroup = ({ submitUpdateGroup, updateGroupHandler, newGroup }) => {
  return (
    <section>
      <h2 className="title">Add new group</h2>
      <form onSubmit={submitUpdateGroup} className="addGForm">
        <input
          type="text"
          onChange={updateGroupHandler}
          value={newGroup}
          placeholder="Add group..."
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default NewGroup;
