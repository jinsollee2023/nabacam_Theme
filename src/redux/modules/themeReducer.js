const initialState = { darkmode: false, fontsize: '' };

const TOGGLE = 'asdf';

export const toggleThemeee = (payload) => {
  return {
    type: TOGGLE,
    payload,
  };
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case TOGGLE: {
      return { darkmode: !action.payload };
    }
  }
};

export default themeReducer;
