import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/manageSlice";

import Layout from "./layout/Layout";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="App box-border">
      <Layout />
    </div>
  );
}

export default App;
