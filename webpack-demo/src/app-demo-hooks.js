import React from 'react';
import Counter from './demo-hooks/counter';
import DateField from './demo-hooks/date-field';
import Timer from './demo-hooks/timer';
import Login from './demo-hooks/login';

export default function AppDemoHooks() {
    return (
        <div>
            <Counter />
            <DateField />
            <Timer name="Wakeup" seconds={5} />
            <Login />
        </div>
    );
}
