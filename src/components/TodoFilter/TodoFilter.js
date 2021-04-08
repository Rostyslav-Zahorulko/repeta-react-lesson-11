import { connect } from 'react-redux';
import * as todosActions from '../../redux/todos/todos-actions';

import './TodoFilter.scss';

const TodoFilter = ({ value, onFilterTodos }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onFilterTodos}
    />
  </div>
);

const mapStateToProps = ({ todos }) => ({
  value: todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterTodos: event =>
    dispatch(todosActions.filterTodos(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
