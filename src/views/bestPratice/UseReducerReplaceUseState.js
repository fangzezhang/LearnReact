import React, {useState, useReducer} from 'react';

const initialState = () => {
  return {
    text: 'text',
    error: 'error',
    touched: false,
  }
};

const UPDATE_TEXT_ACTION = 'UPDATE_TEXT_ACTION';

const formReducer = (state, action) => {
  switch (action) {
    case UPDATE_TEXT_ACTION:
      return {
        text: 'text666',
        error: 'error',
        touched: false,
      };
    default:
      return state;
  }
};

export default function UseReducerReplaceUseState() {
  /*
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [touched, setTouched] = useState(false);
  */
  const [state, dispatch] = useReducer(formReducer, initialState());
  const { text, error, touched } = state;

  return (
    <>
      {text}, {error}, {touched + ''}
      <button onClick={() => dispatch(UPDATE_TEXT_ACTION)}>dispatch</button>
      <div>
        多个 state 时使用 useReducer 替代 useState, 让逻辑更清晰。<br/>
        useReducer 使用函数创建初始状态, 避免可变性。
      </div>
    </>
  );
}
