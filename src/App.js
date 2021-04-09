import { Switch, Route, Link } from 'react-router-dom';
import TodosPage from './pages/TodosPage';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/todos">Заметки</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/todos">
        <TodosPage />
      </Route>
    </Switch>
  </>
);

export default App;
