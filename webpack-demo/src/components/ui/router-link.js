import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function RouterLink(props) {
    const { className, children, ...rest } = props;
    const classes = classnames('link', { [className]: !!className });
    return (
        <Link className={classes} {...rest}>
            {children}
        </Link>
    );
}

export default RouterLink;
