import { connect } from 'react-redux';
import './TodoFilter.scss';
import { todosSelectors, filterTodos } from '../../redux/todos';

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

const mapStateToProps = state => ({
  value: todosSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onFilterTodos: event => dispatch(filterTodos(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
