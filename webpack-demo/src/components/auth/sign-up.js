import React, { Component } from 'react';
import './sign-up.scss';
import Panel, { PanelHeader, PanelBody, PanelFooter } from '../ui/panel';
import Field from '../ui/field';
import Button from '../ui/button';
import RouterLink from '../ui/router-link';
import Input from '../ui/input';
import axios from 'axios';

const URL = 'http://localhost:1337/auth/local/register';

class SignUp extends Component {
    state = {
        hasError: false,
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    };

    handleSubmit = async e => {
        try {
            e.preventDefault();
            await axios.post(URL, {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            });
            this.props.onSuccess();
        } catch (error) {
            console.log(error);
            this.setState({ hasError: true });
        }
    };

    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };

    render() {
        const { signInPath } = this.props;

        return (
            <div className="sign-up">
                <form onSubmit={this.handleSubmit}>
                    <Panel>
                        <PanelHeader>
                            <h2 className="sign-up__title">Sign Up</h2>
                        </PanelHeader>
                        <PanelBody>
                            <Field id="sign-up_firstname" label="First Name">
                                <Input
                                    id="sign-up_firstname"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Field>
                            <Field id="sign-up_lastname" label="Last Name">
                                <Input
                                    id="sign-up_lastname"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Field>
                            <Field id="sign-up_email" label="Email">
                                <Input
                                    id="sign-up_email"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Field>
                            <Field id="sign-up_username" label="Username">
                                <Input
                                    id="sign-up_username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Field>
                            <Field id="sign-up_password" label="Password">
                                <Input
                                    id="sign-up_password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Field>
                            <Field
                                id="sign-up_password2"
                                label="Confirm Password"
                            >
                                <Input
                                    id="sign-up_password2"
                                    name="confirmPassword"
                                    type="password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Field>
                        </PanelBody>
                        <PanelFooter>
                            <Button className="sign-up__submit">Sign Up</Button>
                            <p className="sign-up__sign-in">
                                <span>Already a member? </span>
                                <RouterLink to={signInPath}>Sign In</RouterLink>
                            </p>
                        </PanelFooter>
                    </Panel>
                </form>
            </div>
        );
    }
}

export default SignUp;
