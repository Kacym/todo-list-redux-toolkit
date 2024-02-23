import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../store/todoReducer";
import { styled } from "styled-components";

export const TodoItem = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleTaskHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteTaskHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      {todos.map((task) => (
        <StyledTodoItem key={task.id}>
          <TaskCompleteCheckbox
            type="checkbox"
            value={task.completed}
            onChange={() => toggleTaskHandler(task.id)}
          />
          <TaskTitle
            style={
              task.completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {task.title}
          </TaskTitle>

          <RemoveTaskButton onClick={() => deleteTaskHandler(task.id)}>
            delete
          </RemoveTaskButton>
        </StyledTodoItem>
      ))}
    </>
  );
};

const StyledTodoItem = styled.li({
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2px 10px",
  minWidth: "350px",
  backgroundColor: "#F3F1F4",
});

const TaskCompleteCheckbox = styled.input({
  transform: "scale(2)",
});

const TaskTitle = styled.p({
  fontSize: "18px",
  display: "inline-block",
});

const RemoveTaskButton = styled.button({
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "4px",
});
