import { createAction } from '@reduxjs/toolkit';

export const fetchTodosRequest = createAction('todos/fetchRequest');
export const fetchTodosSuccess = createAction('todos/fetchSuccess');
export const fetchTodosError = createAction('todos/fetchError');

export const addTodoRequest = createAction('todos/addRequest');
export const addTodoSuccess = createAction('todos/addSuccess');
export const addTodoError = createAction('todos/addError');

export const deleteTodoRequest = createAction('todos/deleteRequest');
export const deleteTodoSuccess = createAction('todos/deleteSuccess');
export const deleteTodoError = createAction('todos/deleteError');

export const updateTodoRequest = createAction('todos/updateRequest');
export const updateTodoSuccess = createAction('todos/updateSuccess');
export const updateTodoError = createAction('todos/updateError');

export const filterTodos = createAction('todos/filter');
