import { useEffect, useState } from "react";
import axios from "../../axios";

import Loading from "../Loading/loading";
// FoodCategory/categories =>ENDPOINT_API
const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
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
      <ul className="flex flex-row-reverse justify-around">
        <a href="">همه محصولات</a>
        {categories.map((category) => (
          <li key={category.id}>
            <a>{category.name}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mx-8 mb-4">
      <nav className="max-w-6xl p-4 mx-auto -mt-8 bg-red-300 rounded-xl ">
        <div>{renderContent()}</div>
      </nav>
    </div>
  );
};

export default CategoryList;
