import { useEffect, useState } from "react";

const FilterProducts = ({ productsDetail, group }) => {
  const [selectCategory, setSelectCategory] = useState([]);
  const [showCatg, setShowCatg] = useState([]);
  useEffect(() => {
    setShowCatg(productsDetail.filter((p) => p.group === selectCategory));
  }, [selectCategory]);
  useEffect(() => {
    console.log(showCatg);
  }, [showCatg]);
  return (
    <section>
      <h2>Filter Products</h2>
      <select onChange={(e) => setSelectCategory(e.target.value)}>
        {group.map((g) => (
          <option key={g.title}>{g.title}</option>
        ))}
      </select>
      <ul>
        {showCatg ? (
          showCatg.map((s) => <li key={s.name}>{s.name}</li>)
        ) : (
          <p>در این دسته بندی محصولی وجد ندارد</p>
        )}
      </ul>
    </section>
  );
};

export default FilterProducts;
