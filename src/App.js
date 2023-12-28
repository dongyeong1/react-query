import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Planets from "./components/Planets";

import People from "./components/People";
import Pagenate from "./components/Pagenate";
import Dragdrop from "./components/Dragdrop";
import Input from "./components/Input";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
      <div className="App">
        <Navbar setPage={setPage} />
        <div className="content">
          {/* {page === "planets" ? <Planets /> : <People />} */}
        </div>
        {/* <Pagenate></Pagenate> */}
        {/* <Dragdrop></Dragdrop> */}
        {/* <Input></Input> */}
        <InfiniteScroll></InfiniteScroll>
      </div>
    </>
  );
}

export default App;
