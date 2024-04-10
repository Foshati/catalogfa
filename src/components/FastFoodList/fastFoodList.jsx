import { motion } from "framer-motion";
import { FastFoodItem } from "../FastFoodItem/fastFoodItem";

const FastFoodLists = ({ fastFoodItems }) => (
  <div
    className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
    style={{ direction: "rtl" }}
  >
    {fastFoodItems.map((fastFoodItem, index) => (
      <motion.div
        key={fastFoodItem.id}
        className="flex justify-center "
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.12, type: "linear", duration: 0.8 }}
      >
        <FastFoodItem {...fastFoodItem} />
      </motion.div>
    ))}
  </div>
);

export default FastFoodLists;
