import React from 'react';
import './link.scss';
import classnames from 'classnames';

function Link(props) {
    const { className, children, ...rest } = props;
    const classes = classnames('link', { [className]: !!className });
    return (
        <a className={classes} {...rest}>
            {children}
        </a>
    );
}

export default Link;
