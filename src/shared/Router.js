import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Todo from '../pages/Todo';
import { ThemeProvider } from 'styled-components';
import { darkTheme, fontSmall, lightTheme } from '../styles/theme.js';
import GlobalStyles from '../styles/GlobalStyles.js';
import { useSelector } from 'react-redux';

const Router = () => {
  const toggle = useSelector((state) => {
    return state.themeReducer.darkmode;
  });

  const fontsizeToggle = useSelector((state) => {
    return state.themeReducer.fontsize;
  });

  return (
    <ThemeProvider
      theme={toggle === false ? lightTheme : darkTheme}
      FONTSIZE={fontsizeToggle === 1 ? fontSmall : null}
    >
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
