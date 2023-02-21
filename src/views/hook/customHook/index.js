import React, { useEffect } from "react";
import useCustomReducer from './useCustomReducer';

function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, {
        text: action.text,
        completed: false,
      }];
    default:
      return state;
  }
}

export default function Index () {
  const [todos, dispatch] = useCustomReducer(todosReducer, []);
  const handleAddClick = (params) => (event) => {
    console.info(params);
    console.info(event);

    dispatch({type: 'add', text: params});
  };

  useEffect(() => {
    console.info(todos);
  });

  return (
    <div className="box" style={{marginTop: '10px'}}>
      <h4>CUSTOM HOOK</h4>
      <div className="maxHeight">
        <p>This is custom hook class</p>
        <p>
          自定义 Hook 是一个函数, 以 "use" 开头, 内部可以调用其他 Hook。
        </p>
        <button onClick={handleAddClick('text')}>add in store</button>
      </div>
    </div>
  )
}
