import { ITodo } from '../types/types';

interface ITodoProps extends ITodo {
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
}

export const TodoItem: React.FC<ITodoProps> = ({
    id,
    text,
    isComplete,
    toggleTodo,
    removeTodo,
}) => {
    return (
        <div className="d-flex align-items-center gap-5 alert alert-warning">
            <input
                type="checkbox"
                checked={isComplete}
                onChange={() => toggleTodo(id)}
            />
            <p className='flex-grow-1 m-0'>{text}</p>
            <button onClick={() => removeTodo(id)} className="btn-close" />
        </div>
    );
};
