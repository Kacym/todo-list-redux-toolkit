import { TodoMain } from "./components/Todo/TodoMain";
import { styled } from "styled-components";

function App() {
  return (
    <TodoContainer>
      <HeadingText>Todo App</HeadingText>
      <TodoMain />
    </TodoContainer>
  );
}

const TodoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const HeadingText = styled.h2({
  textAlign: "center",
});

export default App;
