import { FC, useEffect, useReducer } from "react";
import { productsState } from "./store/productsState";
import productsReducer from "./store/productsReducer";
import Navbar from "./components/Navbar";
import "./App.css";

const App: FC = () => {
  const [state, dispatch] = useReducer(productsReducer, productsState);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH" });
    fetch(`https://dummyjson.com/products/search?q=${state.searchInputValue}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.total === 0) {
          dispatch({ type: "FETCH_EMPTY" });
        } else {
          dispatch({ type: "FETCH_SUCCESS", payload: res.products });
        }
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  };

  useEffect(() => {
    dispatch({ type: "FETCH" });
    fetch(`https://dummyjson.com/products/search?q=${state.searchInputValue}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.total === 0) {
          dispatch({ type: "FETCH_EMPTY" });
        } else {
          dispatch({ type: "FETCH_SUCCESS", payload: res.products });
        }
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  }, []);

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSearch}>
        <input
          value={state.searchInputValue}
          onChange={(e) => dispatch({ type: "CHANGE_INPUT", payload: e.target.value })}
          disabled={state.tag === "loading"}
        />
        <button type="submit">Search</button>
      </form>
      {state.tag === "loading" && <p>Loading...</p>}
      {state.tag === "empty" && <p>Product not found</p>}
      {state.tag === "loaded" &&
        state.products.map((product, i: number) => {
          return (
            <div key={i} className="">
              <h4>{product.title}</h4>
            </div>
          );
        })}
      {state.tag === "error" && <p>{state.errorMsg}</p>}
    </div>
  );
};

export default App;
