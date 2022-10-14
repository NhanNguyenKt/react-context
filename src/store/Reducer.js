export const initState = {
  todos: [],
  todoInput: '',
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'change-input':
      return { ...state, todoInput: action.payload };
    case 'addToList':
      return {
        todos: state.todoInput
          ? [...state.todos, { name: state.todoInput, status: 0 }]
          : state.todos,
        todoInput: '',
      };
    case 'check':
      return {
        ...state,
        todos: state.todos.map((el, index) =>
          index == action.payload ? { ...el, status: !el.status } : el
        ),
      };
    case 'remove':
      return {
        ...state,
        todos: state.todos.filter((el, index) =>
          index == action.payload ? false : true
        ),
      };
  }
}
