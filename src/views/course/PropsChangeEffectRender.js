import React, {useState, useEffect} from 'react';

function EffectRender({list}) {
  const [selection, setSelection] = useState(null);

  /*
  * list 发生改变, 导致重新渲染, 然后执行 effect
  * 这里先输出之前的 selection;
  * 然后再输出 null
  * 由于严格模式下会执行两次, 所以会输出四次。
  * */

  /*
  * 验证步骤:
  * 1. 点击 li
  * 2. 点击“改变 list” 按钮, 更改 list
  * 3. 查看 console 输出:
  *   先输出之前的选择,
  *   然后输出 null。
  * */
  console.info(selection);

  useEffect(() => {
    setSelection(null);
  }, [list]);

  return (
    <div>
      {selection}
      <ul>
        {
          list.map((val, i) => <li key={i} onClick={() => setSelection(val)}>{val}</li>)
        }
      </ul>
    </div>
  )
}

export default function PropsChangeEffectRender() {
  /* 理论:
  * 依赖的 state 发生变化会导致组件的重新渲染,
  * 这个案例中依赖的 list 发生变化, 组件及其子组件重新渲染,
  * 子组件会先用旧的 selection 值进行渲染,
  * 然后 React 绘制并更新 DOM,
  * 再然后执行 Effect 中的逻辑, 调用 setSelection(null),
  * 最后子组件再次重新渲染并更新屏幕。
  * */
  /* 验证:
  * list 改变, 重置 selection;
  * 查看页面是否会闪烁。
  * */

  const [list, setList] = useState(['1', '2', '3', '4']);

  function handleClick() {
    setList([
      'changed 1',
      'changed 2',
      'changed 3',
      'changed 4',
    ]);
  }

  return (
    <div>
      <button onClick={handleClick}>改变 list</button>
      <EffectRender list={list} />
    </div>
  );
}
