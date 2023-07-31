import React, {useState} from 'react';
import {useImmer} from "use-immer";

const Todo = props => {
  return (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input />
      </td>
      <td>
        <label>{props.createAt.toDateString()}</label>
      </td>
    </tr>
  )
};

export default function UseIndexAsKey() {
  const [todoCounter, setTodoCounter] = useState(1);
  const [list, setList] = useImmer([{
    id: todoCounter,
    createAt: new Date(),
  }]);

  function addToStart() {
    const date = new Date();
    const nextId = todoCounter + 1;

    setTodoCounter(nextId);
    setList(draft => {
      draft.unshift({id: nextId, createAt: date});
    });
  }

  function addToEnd() {
    const date = new Date();
    const nextId = todoCounter + 1;

    setTodoCounter(nextId);
    setList(draft => {
      draft.push({id: nextId, createAt: date})
    })
  }

  function sortByEarliest() {
    setList(draft => {
      draft.sort((a, b) => {
        return a.createAt - b.createAt;
      })
    });
  }

  function sortByLatest() {
    setList(draft => {
      draft.sort((a, b) => {
        return b.createAt - a.createAt;
      })
    });
  }

  return (
    <div>
      <p>使用 index 作为 key, 在数组中插入或删除元素时, 索引发生变化</p>
      <button onClick={() => addToStart()}>
        Add New to Start
      </button>
      <button onClick={() => addToEnd()}>
        Add New to End
      </button>
      <button onClick={() => sortByEarliest()}>
        Sort by Earliest
      </button>
      <button onClick={() => sortByLatest()}>
        Sort by Latest
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th />
            <th>created at</th>
          </tr>
        </thead>
        <tbody>
          {list.map((todo, index) => (
            <Todo key={index} {...todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
