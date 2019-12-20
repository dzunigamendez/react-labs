import React from 'react';

export default function CounterWithHooks() {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <button onClick={() => setValue(value - 1)}>-</button>
            <span>{value}</span>
            <button onClick={() => setValue(value + 1)}>+</button>
        </div>
    );
}
