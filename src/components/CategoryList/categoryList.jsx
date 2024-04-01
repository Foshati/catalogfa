import { useEffect, useState } from "react";
import axios from "../../axios";

import "./categoryList.css";
import { CiSearch } from "react-icons/ci";

import Loading from "../Loading/loading";
// FoodCategory/categories =>ENDPOINT_API
const CategoryList = ({ filterItems, searchItems }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <ul className="flex flex-row-reverse justify-around ">
        <a onClick={() => filterItems()} href="">
          Catalogfa
        </a>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              filterItems(category.id);
            }}
          >
            <a>{category.name}</a>
          </li>
        ))}
      </ul>
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchItems(value);
  };

  return (
    <main>
      <div className="mx-8 mb-4 ">
        <nav className="max-w-6xl p-4 mx-auto -mt-8 bg-red-300 rounded-xl ">
          <div>{renderContent()}</div>
          <CiSearch
            className="text-xl antialiased text-black cursor-pointer hover:text-red-700"
            onClick={() => {
              setShow(!show);
            }}
          />
        </nav>
      </div>
      {show ? (
        <form onSubmit={onSubmit} className="m-2 form-control">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="جستجو ..."
            className="w-24 input input-bordered md:w-auto input__rtl"
          />
        </form>
      ) : (
        ""
      )}
    </main>
  );
};

export default CategoryList;
