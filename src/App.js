import Login from "./components/login";
import Order from "./components/order";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/order/:id">
          <Order />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      {/* <Login /> */}
    </Router>
  );
}

export default App;
