import React from "react";
import "./App.css";
import { chunk } from "./tasks/second";

const App = () => {
  const arr = [1, 2, 3, 4, 5];
  const size = 3;

  chunk(arr, size);
  return <h1>#31github</h1>;
};

export default App;
