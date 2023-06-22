import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import S from "../globalStyle";

const Todo = () => {
  const params = useParams();

  const { todos } = useSelector((state) => state.todoReducer);
  const navigate = useNavigate();

  const foundData = todos.find((todo) => {
    return todo.id === params.id;
  });

  return (
    <S.DetailContainer>
      <S.DetailCard>
        <S.DetailP>id: {foundData.id}</S.DetailP>
        <S.DetailH1>{foundData.title}</S.DetailH1>
        <S.DetailH2>{foundData.content}</S.DetailH2>
        <S.DetailBtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </S.DetailBtn>
      </S.DetailCard>
    </S.DetailContainer>
  );
};

export default Todo;
