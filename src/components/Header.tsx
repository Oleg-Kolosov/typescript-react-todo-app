interface IHeaderProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    value: string;
    inputRef: React.LegacyRef<HTMLInputElement>;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<IHeaderProps> = ({
    value,
    onAdd,
    handleChange,
    inputRef,
    handleKeyDown,
}) => {
    return (
        <header className='d-flex gap-3 my-5'>
            <input
                type="text"
                className='form-control'
                onChange={e => handleChange(e)}
                placeholder="add new todo ..."
                value={value}
                ref={inputRef}
                onKeyDown={e => handleKeyDown(e)}
            />
            <button onClick={onAdd} className='btn btn-primary'>Add</button>
        </header>
    );
};
