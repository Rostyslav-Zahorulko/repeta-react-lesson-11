import { connect } from 'react-redux';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';
import { todosSelectors, todosOperations } from '../../redux/todos';

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

const mapStateToProps = state => ({
  todos: todosSelectors.getFilteredTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onUpdateTodo: params => dispatch(todosOperations.updateTodo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
