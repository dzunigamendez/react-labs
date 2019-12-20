import React from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

export default function DateFieldWithHooks() {
    const el = React.useRef();

    React.useEffect(() => {
        const node = el.current;
        if (node) {
            flatpickr(node, {});
        }
    }, []);

    return <input ref={el} />;
}
