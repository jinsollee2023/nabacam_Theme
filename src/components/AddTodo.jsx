import { nanoid } from "nanoid";
import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
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

  return (
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
  );
};

export default AddTodo;
