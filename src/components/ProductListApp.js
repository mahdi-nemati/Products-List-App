import { useState } from "react";
import FilterProducts from "./FilterProducts";
import NewGroup from "./NewGroup";
import NewProduct from "./NewProduct";

const ProdutListApp = () => {
  // product info state
  const [productsDetail, setProductsDetail] = useState([]);
  //    group state
  const [group, setGroup] = useState([
    { title: "خوشکبار" },
    { title: "لبنیات" },
    { title: "پروتیین" },
  ]);
  // help state :)
  const [input, setInput] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  // new group state
  const [newGroup, setNewGroup] = useState("");
  // Actions
  const nameHandler = (e) => {
    setInput(e.target.value);
  };
  const groupHandler = (e) => {
    setSelectedGroup(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      name: input,
      group: selectedGroup,
    };
    setInput("");
    setProductsDetail([...productsDetail, newProduct]);
  };

  const updateGroupHandler = (e) => {
    setNewGroup(e.target.value);
  };
  const submitUpdateGroup = (e) => {
    e.preventDefault();
    setGroup([...group, { title: newGroup }]);
    setNewGroup("");
  };
  return (
    <section>
      <NewProduct
        submitHandler={submitHandler}
        groupHandler={groupHandler}
        nameHandler={nameHandler}
        group={group}
        input={input}
      />
      <NewGroup
        submitUpdateGroup={submitUpdateGroup}
        updateGroupHandler={updateGroupHandler}
        newGroup={newGroup}
      />
      <FilterProducts productsDetail={productsDetail} group={group} />
    </section>
  );
};

export default ProdutListApp;
