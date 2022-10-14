import { useEffect, useReducer } from 'react';
import { useStore, actions } from './store';
import './App.css';
function App() {
  const [state, dispatch] = useStore();
  const onchangeInput = (e) => {
    dispatch(actions.setToDoInput(e.target.value));
  };
  const onCLickAdd = () => {
    dispatch(actions.addToList());
  };
  const onCLickDone = (index) => {
    dispatch(actions.check(index));
  };
  const onClickRemove = (index) => {
    dispatch(actions.remove(index));
  };

  return (
    <div>
      <input
        value={state.todoInput}
        placeholder='Enter Todo'
        onChange={(e) => onchangeInput(e)}
      />
      <button onClick={onCLickAdd}>thêm</button>
      {state.todos.map((el, index) => (
        <div
          key={index}
          style={el.status ? { textDecoration: 'line-through' } : {}}
        >
          {el.name} <button onClick={() => onCLickDone(index)}>Xong</button>
          <button onClick={() => onClickRemove(index)}>Xoá</button>
        </div>
      ))}
    </div>
  );
}

export default App;
