import React from 'react';

const TimerStatus = {
    RUNNING: 1,
    TIMEOUT: 2,
    DONE: 3
};

//- types.js
const Types = {
    UPDATE: 'UPDATE',
    NOTIFY: 'NOTIFY',
    SNOOZE: 'SNOOZE',
    DISMISS: 'DISMISS'
};

//- reducer.js
function initState(seconds) {
    return { value: seconds, status: TimerStatus.RUNNING };
}

function reducer(state, action) {
    switch (action.type) {
        case Types.UPDATE:
            return { status: state.status, value: action.payload };
        case Types.NOTIFY:
            return { status: TimerStatus.TIMEOUT, value: 0 };
        case Types.SNOOZE:
            return { status: TimerStatus.RUNNING, value: action.payload };
        case Types.DISMISS:
            return { status: TimerStatus.DONE, value: 0 };
    }
    return state;
}

//- actions.js
function notify() {
    return { type: Types.NOTIFY };
}

function update(value) {
    return { type: Types.UPDATE, payload: value };
}

function snooze(value) {
    return { type: Types.SNOOZE, payload: value };
}

function dismiss() {
    return { type: Types.DISMISS };
}

export default function TimerWithHooks(props) {
    const [{ value, status }, dispatch] = React.useReducer(
        reducer,
        props.seconds,
        initState
    );

    React.useEffect(() => {
        if (status === TimerStatus.RUNNING) {
            setTimeout(() => {
                const nextValue = value - 1;
                if (nextValue <= 0) {
                    dispatch(notify());
                } else {
                    dispatch(update(nextValue));
                }
            }, 1000);
        }
    }, [value, status]);

    function renderSnapshot() {
        switch (status) {
            case TimerStatus.RUNNING:
                return <div>{value}</div>;
            case TimerStatus.TIMEOUT:
                return (
                    <div>
                        <span>{props.name} ⏰</span>
                        <hr />
                        <button onClick={() => dispatch(snooze())}>
                            Snooze
                        </button>
                        <button onClick={() => dispatch(dismiss())}>
                            Dismiss
                        </button>
                    </div>
                );
            case TimerStatus.DONE:
                return '--';
        }
    }

    return (
        <div
            style={{
                fontSize: 24,
                margin: '20px 0',
                padding: 20,
                border: '1px solid black'
            }}
        >
            {renderSnapshot()}
        </div>
    );
}
