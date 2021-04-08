// Вебинар № 11 - Асинхронный Redux

// https://youtu.be/4V0mgp6r2ps?t=314  - Прослойка (middleware), стек прослоек
// https://youtu.be/4V0mgp6r2ps?t=1070 - Сохранение заметок в db.json
// https://youtu.be/4V0mgp6r2ps?t=3693 - errorReducer
// https://youtu.be/4V0mgp6r2ps?t=3741 - Переписывание операции fetchTodos() на async/await
// https://youtu.be/4V0mgp6r2ps?t=3852 - Резюме

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
