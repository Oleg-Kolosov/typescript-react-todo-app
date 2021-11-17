import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { nanoid } from 'nanoid';
import { ITodo } from './types/types';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();

        const savedTodos = localStorage.getItem('typesript-react-todolist-app');
        if (savedTodos) setTodos(JSON.parse(savedTodos));
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'typesript-react-todolist-app',
            JSON.stringify(todos)
        );
    }, [todos]);

    const addTodo = () => {
        if (value.trim()) {
            setTodos([
                ...todos,
                {
                    id: nanoid(),
                    text: value,
                    isComplete: false,
                },
            ]);
            setValue('');
        }
    };

    const removeTodo = (id: string) => {
        setTodos(todos.filter((todo: ITodo) => todo.id !== id));
    };

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo: ITodo) => {
                if (todo.id !== id) return todo;
                return {
                    ...todo,
                    isComplete: !todo.isComplete,
                };
            })
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTodo();
    };

    return (
        <div className='container' style={{maxWidth:'960px'}}>
            <Header
                value={value}
                onAdd={addTodo}
                handleChange={handleChange}
                inputRef={inputRef}
                handleKeyDown={handleKeyDown}
            />

            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default App;
