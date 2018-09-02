import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';
import './App.css';

class App extends Component {
  auth2;

  state = {
    userID: null,
  };

  handleLogin = ({ userID }) => {
    console.log(userID);
    this.setState({ userID });
  };

  handleLogout = () => this.setState({ userID: null });

  render() {
    return (
      <Fragment>
        <NavBar
          userID={this.state.userID}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
