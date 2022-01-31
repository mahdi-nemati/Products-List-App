import { useEffect, useState } from "react";

const FilterProducts = ({ productsDetail, group }) => {
  const [selectCategory, setSelectCategory] = useState([]);
  const [showCatg, setShowCatg] = useState([]);
  useEffect(() => {
    // const lastValue = productsDetail[productsDetail.length - 1]
    //  console.log(lastValue)

    if (selectCategory === "All" || selectCategory.length === 0) {
      setShowCatg(
        productsDetail.filter((p) => p.name && p.group !== "All" && p.group)
      );
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
      return (
        <p class="flex justify-center text-base text-orange-600 mt-6 sm:text-lg md:text-xl lg:text-2xl">there is no product here</p>
      );
    else {
      return (
        <ul class="w-full mt-3 p-6 text-base sm:text-lg sm:w-10/12 md:text-xl md:w-9/12">
          {showCatg.map((s) => (
            <li key={s.name}
             class="flex justify-between items-center bg-orange-300 
             rounded-md w-full p-2 mt-3"
             >
              <p class="text-orange-800">{s.name}</p>
              <span class="bg-orange-500 rounded-md p-1 text-white">{s.group}</span>
            </li>
          ))}
        </ul>
      );
    }
  };
  return (
    <section class="flex flex-col items-center w-full">
      <h2 class="text-base text-orange-600 mb-2 sm:text-lg md:text-xl lg:text-2xl" >Added Products</h2>
      <div class="flex flex-col items-center w-full">
        <select class="sm:text-lg md:text-xl lg:text-2xl outline-none border border-orange-400 bg-gray-50 rounded-md" 
        onChange={(e) => setSelectCategory(e.target.value)}>
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
