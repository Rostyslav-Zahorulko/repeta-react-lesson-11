import { Switch, Route, Link } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import TodosPage from './pages/TodosPage';
import Container from './components/Container';

const App = () => (
  <Container>
    <ul>
      <li>
        <Link to="/counter">Счётчик</Link>
      </li>
      <li>
        <Link to="/todos">Заметки</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/counter">
        <CounterPage />
      </Route>

      <Route path="/todos">
        <TodosPage />
      </Route>
    </Switch>
  </Container>
);

export default App;
