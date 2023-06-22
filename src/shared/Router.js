import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Todo from "../pages/Todo";

const Router = (props) => {
  console.log(props.children);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
