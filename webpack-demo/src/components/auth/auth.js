import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import bgImage from '../../images/background.jpg';
import logoImage from '../../images/react.svg';
import './auth.scss';
import SignIn from './sign-in';
import SignUp from './sign-up';

function Auth(props) {
    let {
        match: { path },
        onSignInSuccess,
        onSignUpSuccess
    } = props;

    const signInPath = `${path}/signin`;
    const signUpPath = `${path}/signup`;

    return (
        <div className="auth" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="auth__container">
                <img src={logoImage} alt="React" className="auth__logo" />
                <Switch>
                    <Route exact path={path}>
                        <Redirect to={signInPath} />
                    </Route>
                    <Route path={signInPath}>
                        <SignIn
                            signUpPath={signUpPath}
                            onSuccess={onSignInSuccess}
                        />
                    </Route>
                    <Route path={signUpPath}>
                        <SignUp
                            signInPath={signInPath}
                            onSuccess={onSignUpSuccess}
                        />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default withRouter(Auth);
