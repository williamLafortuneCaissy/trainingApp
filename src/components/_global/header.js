import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Header = (props) => {
    return (
        <header className="header layout-header">
            <div className="header-left">
                {props.backHref &&
                    <Link className="header-btn" to={props.backHref}>
                        <i className="mdi mdi-chevron-left"></i>
                        {props.back}
                    </Link>
                }
            </div>
            <div className="header-center">
                <h1 className="h4 text-truncate mb-0 py-2">{props.title}</h1>
            </div>
            <div className="header-right">
                {props.nextHref &&
                    <Link className="header-btn" to={props.nextHref}>
                        {props.next}
                        <i className="mdi mdi-chevron-right"></i>
                    </Link>
                }
            </div>
        </header>
    );
}

export default Header;

Header.propTypes = {
    back: PropTypes.string,
    backHref: PropTypes.string,
    title: PropTypes.string.isRequired,
    next: PropTypes.string,
    nextHref: PropTypes.string,
};

Header.defaultProps = {
    back: "Back",
    title: "",
    next: "Next",
};