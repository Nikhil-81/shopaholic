import * as types from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, actionObj) => {
  const { type, payload } = actionObj;
  switch (type) {
    case types.GET_TODOS_REQUEST:
      return { ...oldState, isLoading: true };
    case types.GET_TODOS_SUCCESS:
      return { ...oldState, isLoading: false, todos: payload };
    case types.GET_TODOS_ERROR:
      return { ...oldState, isLoading: false, isError: true };

    case types.ADD_TODO_REQUEST:
      return { ...oldState, isLoading: true };
    case types.ADD_TODO_SUCCESS:
      //  const newTodos = [...oldState.todos, payload];

      return { ...oldState, isLoading: false };
    case types.ADD_TODO_ERROR:
      return { ...oldState, isLoading: false, isError: true };
    default:
      return oldState;
  }
};
export { reducer };

//PUT - {id: 4, title: 'New Todo', status: true} - replace
//const newTodos = oldState.todos.map(item => item.id === payload.id ? payload : item)

//DELETE - {id: 5}
//const newTodos = oldState.todos.filter(item => item.id !== payload.id)

//PATCH - {id: 3, title: 'New Title'}
//const newTodos = oldState.todos.map(item => item.id === payload.id ? {...item, payload} : item )
