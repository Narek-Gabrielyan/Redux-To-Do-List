// Libraries
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Action Creator
import {
  inputValue_AC,
  addTodo_AC,
  removeTodo_AC,
  allRemove_AC,
  clickButton_AC,
  handleCheckbox_AC,
  textReplacement_AC,
  cancelUpdate_AC,
  addUpdate_AC,
} from "../../Slices/todoListReducers";

// CSS
import "./Home.css";

export const Home = function () {
  const [task, setTask] = useState(true);

  const dispatch = useDispatch();
  const { text, toDo, storage_id } = useSelector((state) => state.todo);

  // onKeyDown Enter
  const onKeyDown = (e) =>
    e.keyCode === 13 && e.target.value !== ""
      ? dispatch(addTodo_AC(e.target.value))
      : "";

  // Add Task
  const addTask = () => {
    if (text !== "") {
      return dispatch(clickButton_AC(text));
    }
  };

  // Update Task
  const updateTask = (title, id) => {
    setTask(!task);
    dispatch(textReplacement_AC(title, id));
  };

  // Cancel Update
  const cancelUpdate = () => {
    setTask(!task);
    dispatch(cancelUpdate_AC());
  };

  // Add Update Task
  const addUpdateTask = () => {
    dispatch(addUpdate_AC());
    setTask(!task);
  };

  return (
    <div className="Home">
      {task ? (
        <div>
          <input
            className="newTaskForm"
            placeholder="Add to-do list"
            value={text}
            onChange={(e) => dispatch(inputValue_AC(e.target.value))}
            onKeyDown={(e) => onKeyDown(e)}
          />
          {text.length > 10 ? (
            <button
              className="del_text"
              onClick={() => dispatch(cancelUpdate_AC())}
            >
              X
            </button>
          ) : (
            false
          )}
          <button className="add_task" onClick={() => addTask()}>
            Add
          </button>
          {toDo.length > 5 ? (
            <button
              className="allRemove"
              onClick={() => dispatch(allRemove_AC())}
            >
              Clear All
            </button>
          ) : (
            false
          )}
        </div>
      ) : (
        <div>
            <input
              className="input_update"
            value={text}
            onChange={(e) => dispatch(inputValue_AC(e.target.value))}
          />
            <button
              className="btn_update"
              onClick={() => addUpdateTask()}>Update</button>
            <button
              className="cancel_update"
              onClick={() => cancelUpdate()}>Cancel</button>
        </div>
      )}
      <hr />
      <div className="do_information">
        <span>
          {toDo.length ? "Created tasks: ".concat(toDo.length) : "no tasks..."}
        </span>
        <span>
          {toDo.length
            ? "Completed tasks: ".concat(
                toDo.filter((task) => task.completed).length,
                " of ",
                toDo.length
              )
            : false}
        </span>
      </div>

      {toDo?.map((el, ind) => (
        <div className="to_do_box" key={"todo" + (ind + 1)}>
          <span className="item_num">{ind + 1}</span>
          {task ? (
            <input
              type="checkbox"
              checked={el.completed}
              onChange={() => dispatch(handleCheckbox_AC(el.id))}
            />
          ) : (
            false
          )}

          <span
            style={
              el.completed === true
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {el.title}
          </span>
          {task ? (
            <>
              <button
                onClick={() => updateTask(el.title, el.id)}
                style={
                  el.completed === true
                    ? { display: "none" }
                    : { display: "inline" }
                }
                className="update"
              >
                Update
              </button>
              <button
                className="delete_item"
                onClick={() => dispatch(removeTodo_AC(el.id))}
              >
                X
              </button>
            </>
          ) : (
            false
          )}
        </div>
      ))}
    </div>
  );
};
