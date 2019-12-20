import React from 'react';
import './input.scss';
import classnames from 'classnames';

function Input(props, ref) {
    const { className, ...rest } = props;
    const classes = classnames('input', { [className]: !!className });
    return <input className={classes} ref={ref} {...rest} />;
}

export default React.forwardRef(Input);
