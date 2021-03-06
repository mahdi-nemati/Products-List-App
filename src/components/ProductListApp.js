import { useEffect, useState } from "react";
import FilterProducts from "./FilterProducts";
import NewGroup from "./NewGroup";
import NewProduct from "./NewProduct";
import Swal from "sweetalert2";
import { useToasts } from "react-toast-notifications";
const ProdutListApp = () => {
  // product info state
  const [productsDetail, setProductsDetail] = useState([{}]);
  //    group state
  const [group, setGroup] = useState([
    { title: "All" },
    { title: "خشکبار" },
    { title: "لبنیات" },
    { title: "شوینده" },
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
    } else if (lastValue.group === "All" || lastValue.group === "") {
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
  const { addToast } = useToasts();
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
      addToast(`added to groups`, {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };
  return (
    <main class="flex flex-col items-cent items-center ">
      <h1 class="mb-14 mt-3 text-lg text-orange-800 sm:text-xl md:text-2xl lg:text-3xl lg:mt-5">
        Product List App
      </h1>
      <section class="w-full lg:flex">
        <section class="mb-8 w-full flex flex-col items-center">
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
        </section>
        <section class="flex justify-center w-full">
          <FilterProducts productsDetail={productsDetail} group={group} />
        </section>
      </section>
    </main>
  );
};

export default ProdutListApp;
