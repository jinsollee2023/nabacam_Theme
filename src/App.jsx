import { useEffect, useState } from "react";
import "./reset.css";
import { styled } from "styled-components";
import AddTodo from "./components/AddTodo";
import PaintWorkingTodo from "./components/PaintWorkingTodo";
import PaintDoneTodo from "./components/PaintDoneTodo";

const App = () => {
  const StTodoCard = styled.div`
    width: 300px;
    height: 300px;
    border: 3px solid grey;
    margin: 5px;
  `;

  const [todos, setTodos] = useState([]);

  // 삭제하기
  const deleteBtnHandler = (id) => {
    const deletedTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodoList);
  };

  // 완료하기
  const finishBtnHandler = (id) => {
    const deletedTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      } else return todo;
    });
    setTodos(deletedTodoList);
  };

  //취소하기
  const cancelBtnHandler = (id) => {
    const canceledTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: false };
      } else return todo;
    });
    setTodos(canceledTodoList);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <header>
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <AddTodo todos={todos} setTodos={setTodos} />
      <div>
        <p>Working</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <PaintWorkingTodo
                  item={item}
                  StTodoCard={StTodoCard}
                  finishBtnHandler={finishBtnHandler}
                  deleteBtnHandler={deleteBtnHandler}
                />
              );
            })}
        </div>
      </div>
      <div>
        <p>Done</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <PaintDoneTodo
                  item={item}
                  StTodoCard={StTodoCard}
                  cancelBtnHandler={cancelBtnHandler}
                  deleteBtnHandler={deleteBtnHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
