import "./App.css";
import Header from "../src/components/Header/header";
import CategoryList from "./components/CategoryList/categoryList";

function App() {
  return (
    <main className="font-sans font-custom">
      <Header />
      <CategoryList />
    </main>
  );
}

export default App;
