import { useEffect, useState } from "react";
import axiosApi from "../../Services/Axios/configs";

import "./categoryList.css";
import { IoSearch } from "react-icons/io5";

import Loading from "../Loading/loading";
// FoodCategory/categories =>ENDPOINT_API
const CategoryList = ({ filterItems, searchItems }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axiosApi.get("/FoodCategory/categories");
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
        <nav className="flex items-center justify-between max-w-6xl p-4 mx-auto -mt-8 bg-red-300 rounded-xl">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="h-10 text-black fill-current w-7 swap-off"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="w-6 h-10 text-black fill-current swap-on"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <span>
            {" "}
            {/* search */}
            <IoSearch
              className="text-2xl text-black cursor-pointer hover:text-red-700 "
              onClick={() => {
                setShow(!show);
              }}
            />
          </span>

          <div className="flex-grow">{renderContent()}</div>
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
