import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../../store/todoReducer";
import { styled } from "styled-components";

export const TodoForm = () => {
  const todos = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  console.log(todos);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: inputValue,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setInputValue("");
  };
  return (
    <form>
      <StyledInput
        placeholder="Add your new task"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <StyledAddButton onClick={addTodoHandler}>+</StyledAddButton>
    </form>
  );
};

const StyledInput = styled.input({
  padding: "10px",
  width: "300px",
});

const StyledAddButton = styled.button({
  padding: "11px 15px",
  display: "inline",
  backgroundColor: "#8D4CE8",
  border: "none",
  borderRadius: "2px",
  fontSize: "15px",
  color: "white",
  cursor: "pointer",
});
