import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './app.scss';
import Auth from './components/auth/auth';
import Home from './components/home';

class App extends Component {
    state = { isAuthenticated: false };

    handleSignInSuccess = () => {
        this.setState({ isAuthenticated: true });
    };

    handleSignUpSuccess = () => {
        this.props.history.push('/auth/signin');
    };

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    {this.state.isAuthenticated ? (
                        <Home />
                    ) : (
                        <Redirect to="/auth" />
                    )}
                </Route>
                <Route path="/auth">
                    {this.state.isAuthenticated ? (
                        <Redirect to="/" />
                    ) : (
                        <Auth
                            onSignInSuccess={this.handleSignInSuccess}
                            onSignUpSuccess={this.handleSignUpSuccess}
                        />
                    )}
                </Route>
            </Switch>
        );
    }
}

export default withRouter(App);
