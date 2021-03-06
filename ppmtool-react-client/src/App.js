import "./App.css";
import Dashboard from "./components/Dashboard";
import UpdateProject from "./components/Project/UpdateProject";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addProject" component={AddProject} />
            <Route
              path="/updateProject/:projectIdentifier"
              component={UpdateProject}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
