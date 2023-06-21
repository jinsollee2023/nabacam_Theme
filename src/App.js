import "./reset.css";
import { styled } from "styled-components";

function App() {
  const StTodoCard = styled.div`
    width: 300px;
    height: 300px;
    border: 3px solid grey;
    margin: 5px;
  `;
  return (
    <div>
      <header>
        <span>My Todo List</span>
        <span>React</span>
      </header>
      <form>
        제목
        <input />
        내용
        <input />
        <button>추가하기</button>
      </form>
      <div>
        <p>Working</p>
        <StTodoCard>
          <p>제목</p>
          <p>내용</p>
          <p>상세보기</p>
          <button>완료</button>
          <button>삭제하기</button>
        </StTodoCard>
      </div>
      <div>
        <p>Done</p>
        <StTodoCard>
          <p>제목</p>
          <p>내용</p>
          <p>상세보기</p>
          <button>취소</button>
          <button>삭제하기</button>
        </StTodoCard>
      </div>
    </div>
  );
}

export default App;
