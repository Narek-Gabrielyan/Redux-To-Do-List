// Action Type
const ADD_TODO = "add-todo";
const INPUT_VALUE = "input-value";
const REMOVE_TODO = "remove-todo";
const ALL_REMOVE = "all-remove";
const CLICK_BUTTON = "add-things-to-do";
const UPDATE_CHECKBOX = "update-checkbox";
const TEXT_REPLACEMENT = "text-replacement";
const CANCEL_UPDATE = "cancel-update";
const ADD_UPDATE = "add-update";

// todoReducer InitialState
const initialState = {
  text: "",
  toDo: [
    { id: 1, title: "do React homework on time", completed: true },
    { id: 2, title: "great mastery of the Redux library", completed: false },
  ],
  storage_id: null,
};

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,
        text: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        toDo: [
          ...state.toDo,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
        text: "",
      };
    case REMOVE_TODO:
      const filteredTodos = state.toDo.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        toDo: filteredTodos,
      };
    case ALL_REMOVE:
      return Object.assign({}, state, { toDo: new Array() });
    case CLICK_BUTTON:
      return Object.assign({}, state, {
        toDo: [
          ...state.toDo,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
        text: "",
      });
    case UPDATE_CHECKBOX:
      const todoArray = [];
      state.toDo.map((item) => {
        item.id === action.payload ? (item.completed = !item.completed) : false;
        todoArray.push(item);
      });
      return {
        ...state,
        toDo: todoArray,
      };
    case TEXT_REPLACEMENT:
      return {
        ...state,
        text: action.payload,
        storage_id: action.id,
      };
    case CANCEL_UPDATE:
      return {
        ...state,
        text: "",
        storage_id: null
      };
    case ADD_UPDATE:
      const replacementArray = [];
      state.toDo.map((element) => {
        element.id === state.storage_id ? (element.title = state.text) : false;
        replacementArray.push(element);
      })
      return {
        ...state,
        toDo: replacementArray,
        text: "",
        storage_id: null
      };

    default:
      return state;
  }
};

// Action Creator
const addTodo_AC = (payload) => ({ type: ADD_TODO, payload });

const inputValue_AC = (text) => ({
  type: INPUT_VALUE,
  payload: text,
});

const removeTodo_AC = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

const allRemove_AC = () => ({ type: ALL_REMOVE });

const clickButton_AC = (payload) => ({ type: CLICK_BUTTON, payload });

const handleCheckbox_AC = (payload) => ({ type: UPDATE_CHECKBOX, payload });

const textReplacement_AC = (text, id) => ({
  type: TEXT_REPLACEMENT,
  payload: text,
  id,
});

const cancelUpdate_AC = () => ({ type: CANCEL_UPDATE });

const addUpdate_AC = () => ({ type: ADD_UPDATE });

// Export Files
export {
  inputValue_AC,
  addTodo_AC,
  removeTodo_AC,
  allRemove_AC,
  clickButton_AC,
  handleCheckbox_AC,
  textReplacement_AC,
  cancelUpdate_AC,
  addUpdate_AC,
};
export default todoReducer;
