import { useParams } from "react-router-dom";
import TodoListItem from "./TodoListItem";
import "./hiddenScroll.css";

function TodoList({ todos, onRemove, onToggle }) {
  const { day } = useParams();
  const filterWeek = todos.filter(days => {
    if (days.week == day) return true;
  });

  return (
    <div className="m-[30px] h-[450px] overflow-y-scroll no-scrollbar">
      {filterWeek.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default TodoList;
