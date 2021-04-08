import { Component } from 'react';
import { connect } from 'react-redux';
import * as todosOperations from '../../redux/todos/todos-operations';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    const { message } = this.state;
    const { onAddTodo, onSave } = this.props;

    event.preventDefault();

    if (message !== '') {
      onAddTodo(message);
      onSave();

      this.setState({ message: '' });
    }
  };

  render() {
    const { message } = this.state;

    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Добавить
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(todosOperations.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
