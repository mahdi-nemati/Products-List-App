import { useEffect, useState } from "react";

const FilterProducts = ({ productsDetail, group }) => {
  const [selectCategory, setSelectCategory] = useState([]);
  const [showCatg, setShowCatg] = useState([]);
  useEffect(() => {
    // const lastValue = productsDetail[productsDetail.length - 1]
    //  console.log(lastValue)

    if (selectCategory === "All" || selectCategory.length === 0) {
      setShowCatg(productsDetail.filter((p) => p.name && p.group !== "All" && p.group));
    } else {
      setShowCatg(
        productsDetail.filter(
          (p) =>
            p.group === selectCategory && p.group !== "All" && p.name !== ""
        )
      );
    }
  }, [selectCategory, productsDetail]);

  const renderProducts = () => {
    // const lastValue = productsDetail[productsDetail.length - 1];
    if (showCatg.length === 0)
      return <p className="remain">there is no product here</p>;
    else {
      return (
        <ul className="container list">
          {showCatg.map((s) => (
            <li key={s.name}>
              <p>{s.name}</p>
              <span>{s.group}</span>
            </li>
          ))}
        </ul>
      );
    }
  };
  return (
    <section className="container">
      <h2 className="title">Added Products</h2>
      <div className="showProCon">
        <select onChange={(e) => setSelectCategory(e.target.value)}>
          {group.map((g) => (
            <option key={g.title}>{g.title}</option>
          ))}
        </select>
        {renderProducts()}
      </div>
    </section>
  );
};

export default FilterProducts;
