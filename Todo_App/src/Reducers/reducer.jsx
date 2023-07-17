import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../Actions/action";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            task: action.payload.task,
            edit:action.payload.edit 
             
          },
        ],
      };

    case REMOVE_TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };

      case EDIT_TODO:
  return {
    todos: state.todos.map(todo =>
      todo.id === action.payload.id
        ? { ...todo, text: action.payload.updatedText,edit:action.payload.edit }
        : todo
    ),
  };

    default:
      return state;
  }
};

export default reducer;