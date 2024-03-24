import { useEffect, useState } from "react";
import axios from "../../axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <nav className="max-w-6xl p-4 mx-auto -mt-8 bg-red-200 navbar rounded-xl">
      <div>
        <ul className="flex flex-row-reverse justify-around">
          <a href="">همه محصولات</a>

          {categories.map((category) => (
            <li key={category.id}>
              <a>{category.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryList;
