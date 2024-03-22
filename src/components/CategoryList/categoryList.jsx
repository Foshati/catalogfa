import { useEffect } from "react";
import axios from "../../axios";

const CategoryList = () => {
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      console.log(response.data);
    };
    fetchCategories();
  }, []);

  return <div> ali</div>;
};

export default CategoryList;
