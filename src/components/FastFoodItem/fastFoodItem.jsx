import { CiShoppingTag } from "react-icons/ci";
import "./fastFoodItem.css";
export const FastFoodItem = ({ name, price, ingredients, imageUrl }) => {
  return (
    <div className="flex flex-col shadow-xl card card-compact w-96 bg-base-100">
      <figure className="card__placeholder">
        <img src={imageUrl} alt="img" />
      </figure>
      <div className="flex flex-col items-center justify-between text-center card-body">
        <h2 className="card-title">{name}</h2>
        <p className="mb-4">{ingredients}</p>
        <div className="mt-auto">
          <button className="bottom-auto btn btn-primary">
            <CiShoppingTag className="text-xl" />
            {price} T
          </button>
        </div>
      </div>
    </div>
  );
};
