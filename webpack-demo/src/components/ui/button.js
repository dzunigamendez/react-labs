import React from 'react';
import './button.scss';
import classnames from 'classnames';

function Button(props) {
    const { className, children, ...rest } = props;
    const classes = classnames('button', { [className]: !!className });
    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

export default Button;
