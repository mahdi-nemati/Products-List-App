import { useEffect, useState } from "react";
import FilterProducts from "./FilterProducts";
import NewGroup from "./NewGroup";
import NewProduct from "./NewProduct";
import Swal from "sweetalert2";
const ProdutListApp = () => {
  // product info state
  const [productsDetail, setProductsDetail] = useState([{}]);
  //    group state
  const [group, setGroup] = useState([
    { title: "select" },
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
  useEffect(() => {
    const lastValue = productsDetail[productsDetail.length - 1];
    if (lastValue.name === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "please enter something",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (lastValue.group === "select" || lastValue.group === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "please select group",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      localStorage.setItem(lastValue.group, lastValue.name);
    }
  }, [productsDetail]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
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
    if (newGroup === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "please enter something",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setGroup([...group, { title: newGroup }]);
      setNewGroup("");
    }
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
