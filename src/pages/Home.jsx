import React from 'react';
import AddTodo from '../components/AddTodo';
import PaintTodo from '../components/PaintTodo';
import { useDispatch, useSelector } from 'react-redux';
import S from '../globalStyle';
import { toggleThemeee } from '../redux/modules/themeReducer';

const Home = ({ theme, setTheme }) => {
  const { todos } = useSelector((state) => {
    return state.todoReducer;
  });
  const dispatch = useDispatch();
  const test = useSelector((state) => {
    return state.themeReducer.darkmode;
  });
  return (
    <div>
      <S.Header>
        <S.HeaderSpan>My Todo List</S.HeaderSpan>
        <div>
          <select name="" id="">
            <option value="1">작게</option>
            <option value="2">중간</option>
            <option value="3">크게</option>
          </select>
          <button
            onClick={() => {
              dispatch(toggleThemeee(test));
            }}
          >
            {theme === 'light' ? 'dark' : 'light'}
          </button>
        </div>
      </S.Header>
      <AddTodo />
      <S.PaintDiv>
        <S.PaintDivH1>Working🔥</S.PaintDivH1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return <PaintTodo todo={todo} />;
            })}
        </div>
      </S.PaintDiv>
      <S.PaintDiv>
        <S.PaintDivH1>Done🎉</S.PaintDivH1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return <PaintTodo todo={todo} />;
            })}
        </div>
      </S.PaintDiv>
    </div>
  );
};

export default Home;
