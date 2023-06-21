const PaintWorkingTodo = ({
  item,
  StTodoCard,
  deleteBtnHandler,
  finishBtnHandler,
}) => {
  return (
    <StTodoCard key={item.id}>
      <p>{item.title}</p>
      <p>{item.content}</p>
      <p>상세보기</p>
      <button onClick={() => finishBtnHandler(item.id)}>완료</button>
      <button onClick={() => deleteBtnHandler(item.id)}>삭제하기</button>
    </StTodoCard>
  );
};

export default PaintWorkingTodo;
