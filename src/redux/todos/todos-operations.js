import axios from 'axios';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoError,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:3001';

// const fetchTodos = () => async dispatch => {
//   dispatch(fetchTodosRequest());

//   try {
//     const { data } = await axios.get('/todos');

//     dispatch(fetchTodosSuccess(data));
//   } catch (error) {
//     dispatch(fetchTodosError(error));
//   }
// };

const fetchTodos = () => dispatch => {
  dispatch(fetchTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(fetchTodosSuccess(data)))
    .catch(error => dispatch(fetchTodosError(error)));
};

const addTodo = text => dispatch => {
  const todo = {
    text,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = id => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const updateTodo = ({ id, completed }) => dispatch => {
  const update = { completed };

  dispatch(updateTodoRequest());

  axios
    .patch(`/todos/${id}`, update)
    .then(({ data }) => dispatch(updateTodoSuccess(data)))
    .catch(error => dispatch(updateTodoError(error)));
};

const todosOperations = {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};

export default todosOperations;
