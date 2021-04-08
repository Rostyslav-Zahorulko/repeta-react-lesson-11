import { connect } from 'react-redux';
import * as todosOperations from '../../redux/todos/todos-operations';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onDelete={() => onDeleteTodo(id)}
          onUpdate={() => onUpdateTodo({ id, completed: !completed })}
        />
      </li>
    ))}
  </ul>
);

const getFilteredTodos = (filter, allTodos) => {
  const lowercasedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(lowercasedFilter),
  );
};

const mapStateToProps = ({ todos: { filter, items } }) => ({
  todos: getFilteredTodos(filter, items),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onUpdateTodo: params => dispatch(todosOperations.updateTodo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
