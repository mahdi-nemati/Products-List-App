const NewGroup = ({ submitUpdateGroup, updateGroupHandler, newGroup }) => {
  return (
    <form onSubmit={submitUpdateGroup}>
      <h2>Add group</h2>
      <input type="text" onChange={updateGroupHandler} value={newGroup} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewGroup;
