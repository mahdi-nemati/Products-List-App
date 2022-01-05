import { useEffect, useState } from "react";

const FilterProducts = ({ productsDetail, group }) => {
  const [selectCategory, setSelectCategory] = useState([]);
  const [showCatg, setShowCatg] = useState([]);
  useEffect(() => {
    setShowCatg(
      productsDetail.filter(
        (p) =>
          p.group === selectCategory && p.group !== "select" && p.name !== ""
      )
    );
  }, [selectCategory, productsDetail]);

  const renderProducts = () => {
    if (showCatg.length === 0) return <p>there is no product here</p>;
    else {
      return (
        <ul>
          {showCatg.map((s) => (
            <li key={s.name}>{s.name}</li>
          ))}
        </ul>
      );
    }
  };
  return (
    <section>
      <h2>Filter Products</h2>
      <select onChange={(e) => setSelectCategory(e.target.value)}>
        {group.map((g) => (
          <option key={g.title}>{g.title}</option>
        ))}
      </select>
      {renderProducts()}
    </section>
  );
};

export default FilterProducts;
