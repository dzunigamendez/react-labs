import React, { Component } from 'react';
import './sign-in.scss';
import Panel, { PanelHeader, PanelBody, PanelFooter } from '../ui/panel';
import Field from '../ui/field';
import Button from '../ui/button';
import RouterLink from '../ui/router-link';
import Input from '../ui/input';
import axios from 'axios';

const URL = 'http://localhost:1337/auth/local';

class SignIn extends Component {
    usernameRef = React.createRef();

    state = {
        hasError: false,
        identifier: '',
        password: ''
    };

    handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post(URL, {
                identifier: this.state.identifier,
                password: this.state.password
            });
            this.props.onSuccess(res);
        } catch (error) {
            console.error(error);
            this.setState({ hasError: true });

            if (this.usernameRef.current) {
                this.usernameRef.current.focus();
            }
        }
    };

    handleChange = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    };

    renderError() {
        const { hasError } = this.state;
        if (hasError) {
            return (
                <div className="sign-in__error">
                    Invalid username or password
                </div>
            );
        }
    }

    render() {
        const { signUpPath } = this.props;
        const { identifier, password } = this.state;
        const error = this.renderError();
        return (
            <div className="sign-in">
                <form onSubmit={this.handleSubmit}>
                    <Panel>
                        <PanelHeader>
                            <h2 className="sign-in__title">Sign In</h2>
                        </PanelHeader>
                        <PanelBody>
                            {error}
                            <Field id="sign-in_identifier" label="Username">
                                <Input
                                    id="sign-in_identifer"
                                    name="identifier"
                                    value={identifier}
                                    onChange={this.handleChange}
                                    ref={this.usernameRef}
                                    required
                                />
                            </Field>
                            <Field id="sign-in_password" label="Password">
                                <Input
                                    id="sign-up_password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Field>
                        </PanelBody>
                        <PanelFooter>
                            <Button className="sign-in__submit">Sign In</Button>
                            <RouterLink
                                className="sign-in__sign-up"
                                to={signUpPath}
                            >
                                Create an account
                            </RouterLink>
                        </PanelFooter>
                    </Panel>
                </form>
            </div>
        );
    }
}

export default SignIn;
