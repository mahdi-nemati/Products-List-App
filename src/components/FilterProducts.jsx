const FilterProducts = ({ productsDetail, group }) => {
    const selectCategoryHandler =()=>{
        
    }
  return <section>
      <h2>Filter Products</h2>
      <select onChange={selectCategoryHandler}>
        {group.map((g) => (
          <option key={g.title}>{g.title}</option>
        ))}
      </select>
  </section>;
};

export default FilterProducts;
