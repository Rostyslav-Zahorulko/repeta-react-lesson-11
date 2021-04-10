import { createSelector } from 'reselect';

const getAllTodos = state => state.todos.items;

const getFilter = state => state.todos.filter;

const getLoading = state => state.todos.loading;

// Обычная функция
// const getFilteredTodos = state => {
//   const todos = getAllTodos(state);
//   const filter = getFilter(state);
//   const lowercasedFilter = filter.toLowerCase();

//   return todos.filter(({ text }) =>
//     text.toLowerCase().includes(lowercasedFilter),
//   );
// };

// Мемоизированная функция
const getFilteredTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const lowercasedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(lowercasedFilter),
    );
  },
);

const getAllTodosCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

// Обычная функция
// const getCompletedTodosCount = state => {
//   const todos = getAllTodos(state);

//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// };

// Мемоизированная функция
const getCompletedTodosCount = createSelector([getAllTodos], todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0),
);

const todosSelectors = {
  getFilter,
  getLoading,
  getFilteredTodos,
  getAllTodosCount,
  getCompletedTodosCount,
};

export default todosSelectors;
