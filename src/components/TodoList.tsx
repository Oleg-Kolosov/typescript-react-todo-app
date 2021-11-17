import { TodoItem } from './TodoItem';
import { ITodo } from '../types/types';

interface ITodoListProps {
    todos: ITodo[];
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
    todos,
    toggleTodo,
    removeTodo,
}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    {...todo}
                />
            ))}
        </div>
    );
};
