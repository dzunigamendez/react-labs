import React, { useState } from 'react';

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

//- custom hook!
function useField(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [value, handleChange, setValue];
}

export default function LoginWithHooks() {
    const [username, setUsername] = useField('');
    const [password, setPassword] = useField('');

    return (
        <form>
            <PreCode value={{ username, password }} />
            <FieldSet legend="Login">
                <Field id="login-username" label="Username">
                    <input
                        id="login-username"
                        name="username"
                        value={username}
                        onChange={setUsername}
                    />
                </Field>
                <Field id="login-password" label="Password">
                    <input
                        id="login-password"
                        name="password"
                        value={password}
                        onChange={setPassword}
                    />
                </Field>
            </FieldSet>
            <button type="submit">Submit</button>
        </form>
    );
}
