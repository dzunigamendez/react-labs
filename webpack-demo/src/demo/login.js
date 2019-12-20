import React, { Component } from 'react';

function FieldSet(props) {
  return (
    <fieldset>
      <legend>{props.legend}</legend>
      {props.children}
    </fieldset>
  );
}

function Field(props) {
  let label;
  if (props.id && props.label) {
    label = <label htmlFor={props.id}>{props.label}</label>;
  }
  return (
    <div>
      {label}
      {props.children}
    </div>
  );
}

function PreCode(props) {
  return (
    <pre>
      <code>{JSON.stringify(props.value, null, 2)}</code>
    </pre>
  );
}

class Login extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: true
  };

  handleFieldChange = e => {
    const input = e.target;
    const type = input.type || 'text';
    const name = input.name;
    const value = type === 'checkbox' ? input.checked : input.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <PreCode value={this.state} />
        <FieldSet legend="Login">
          <Field id="login-username" label="Username">
            <input
              id="login-username"
              name="username"
              value={this.state.username}
              onChange={this.handleFieldChange}
            />
          </Field>
          <Field id="login-password" label="Password">
            <input
              id="login-password"
              name="password"
              value={this.state.password}
              onChange={this.handleFieldChange}
            />
          </Field>
          <Field>
            <label>
              <input
                id="login-remember-me"
                name="rememberMe"
                type="checkbox"
                value={this.state.rememberMe}
                checked={this.state.rememberMe}
                onChange={this.handleFieldChange}
              />
              Remember me
            </label>
          </Field>
        </FieldSet>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
