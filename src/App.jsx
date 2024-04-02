import "./App.css";
import Header from "../src/components/Header/header";
import CategoryList from "./components/CategoryList/categoryList";
import { useEffect, useState } from "react";
// import axios from "./axios";
import axiosApi from "./Services/Axios/configs";

import FastFoodLists from "./components/FastFoodList/fastFoodList";
import Loading from "./components/Loading/loading";
import notFound from "./assets/images/404.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);
  // fetchData
  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axiosApi.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axiosApi.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (fastFoodItems.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center m-4 text-center">
          <div className="m-4 mx-4 alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-info shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span style={{ margin: "auto" }}>
              متاسفانه برای کلید واژه مورد نظر چیزی یافت نشد
            </span>
          </div>
          <img src={notFound} />
        </div>
      );
    }

    return <FastFoodLists fastFoodItems={fastFoodItems} />;
  };

  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  return (
    <main className="font-sans font-Noto">
      <Header />
      <CategoryList filterItems={filterItems} searchItems={searchItems} />
      <div>{renderContent()}</div>
    </main>
  );
}

export default App;
