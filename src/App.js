import { useEffect, useState } from "react";
import "./reset.css";
import { styled } from "styled-components";
import { nanoid } from "nanoid";

function App() {
  const StTodoCard = styled.div`
    width: 300px;
    height: 300px;
    border: 3px solid grey;
    margin: 5px;
  `;

  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  // 추가하기
  const addBtnHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title: title,
        content: content,
        isDone: false,
      },
    ]);
    setTitle("");
    setContent("");
  };

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
      <form onSubmit={addBtnHandler}>
        제목
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        내용
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        <p>Working</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <StTodoCard key={item.id}>
                  <p>{item.title}</p>
                  <p>{item.content}</p>
                  <p>상세보기</p>
                  <button onClick={() => finishBtnHandler(item.id)}>
                    완료
                  </button>
                  <button onClick={() => deleteBtnHandler(item.id)}>
                    삭제하기
                  </button>
                </StTodoCard>
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
                <StTodoCard key={item.id}>
                  <p>{item.title}</p>
                  <p>{item.content}</p>
                  <p>상세보기</p>
                  <button onClick={() => cancelBtnHandler(item.id)}>
                    취소
                  </button>
                  <button onClick={() => deleteBtnHandler(item.id)}>
                    삭제하기
                  </button>
                </StTodoCard>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
