import { FC, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <span className="count">{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default App;
