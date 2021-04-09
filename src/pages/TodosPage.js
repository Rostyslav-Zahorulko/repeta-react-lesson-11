// Вебинар № 11 - Асинхронный Redux

// https://youtu.be/4V0mgp6r2ps?t=314  - Прослойка (middleware), стек прослоек
// https://youtu.be/4V0mgp6r2ps?t=1070 - Сохранение заметок в db.json
// https://youtu.be/4V0mgp6r2ps?t=3693 - errorReducer
// https://youtu.be/4V0mgp6r2ps?t=3741 - Переписывание операции fetchTodos() на async/await
// https://youtu.be/4V0mgp6r2ps?t=3852 - Резюме

// Вебинар № 12 - Селекторы и библиотека Reselect

// https://youtu.be/IR5C1CwF8ZI?t=10   - Что такое селекторы
// https://youtu.be/IR5C1CwF8ZI?t=480  - Рефакторинг коллекции заметок
// https://youtu.be/IR5C1CwF8ZI?t=2080 - Библиотека Reselect
// https://youtu.be/IR5C1CwF8ZI?t=2638 - Фабрики селекторов
// https://youtu.be/IR5C1CwF8ZI?t=2762 - Рефакторинг путей

import { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import TodoFilter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { todosOperations, todosSelectors } from '../redux/todos';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosPage extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { isLoadingTodos } = this.props;

    return (
      <Container>
        <div style={barStyles}>
          <TodoFilter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="32" height="32" fill="#fff" />
          </IconButton>
          {isLoadingTodos && <h1>Loading...</h1>}
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
