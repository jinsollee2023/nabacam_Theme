const PaintDoneTodo = ({
  StTodoCard,
  item,
  cancelBtnHandler,
  deleteBtnHandler,
}) => {
  return (
    <StTodoCard key={item.id}>
      <p>{item.title}</p>
      <p>{item.content}</p>
      <p>상세보기</p>
      <button onClick={() => cancelBtnHandler(item.id)}>취소</button>
      <button onClick={() => deleteBtnHandler(item.id)}>삭제하기</button>
    </StTodoCard>
  );
};

export default PaintDoneTodo;
