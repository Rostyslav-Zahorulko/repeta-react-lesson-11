import { createSelector } from 'reselect';

const getAllTodos = state => state.todos.items;

export const getFilter = state => state.todos.filter;

export const getIsLoading = state => state.todos.loading;

// Обычная функция
// export const getFilteredTodos = state => {
//   const todos = getAllTodos(state);
//   const filter = getFilter(state);
//   const lowercasedFilter = filter.toLowerCase();

//   return todos.filter(({ text }) =>
//     text.toLowerCase().includes(lowercasedFilter),
//   );
// };

// Мемоизированная функция
export const getFilteredTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const lowercasedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(lowercasedFilter),
    );
  },
);

export const getAllTodosCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

// Обычная функция
// export const getCompletedTodosCount = state => {
//   const todos = getAllTodos(state);

//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// };

// Мемоизированная функция
export const getCompletedTodosCount = createSelector([getAllTodos], todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0),
);

const todosSelectors = {
  getFilter,
  getIsLoading,
  getFilteredTodos,
  getAllTodosCount,
  getCompletedTodosCount,
};

export default todosSelectors;
