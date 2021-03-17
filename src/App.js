import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Netflix from "./components/NetflixAPI/Netflix.component";
import SingleMovie from "./components/NetflixAPI/SingleMovie/SingleMovie.component";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Netflix" component={Netflix}/>
          <Route exact path="/SingleMovie/:id" component={SingleMovie}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
