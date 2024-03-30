import { FastFoodItem } from "../FastFoodItem/fastFoodItem";

const FastFoodLists = ({ fastFoodItems }) => (
  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
    {fastFoodItems.map((fastFoodItem) => (
      <div key={fastFoodItem.id} className="flex justify-center">
        <FastFoodItem {...fastFoodItem} />
      </div>
    ))}
  </div>
);

export default FastFoodLists;
