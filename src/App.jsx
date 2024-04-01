import "./App.css";
import Header from "../src/components/Header/header";
import CategoryList from "./components/CategoryList/categoryList";
import { useEffect, useState } from "react";
import axios from "./axios";

import FastFoodLists from "./components/FastFoodList/fastFoodList";
import Loading from "./components/Loading/loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);
  // fetchData
  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
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
