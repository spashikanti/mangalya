import React from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

const TextFieldGroup = ({name, value, label, error, type, onChange}) => {
    return(
        <div className={classnames('form-group', { 'has-error': error})}>
            <label className="control-label">{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className="form-control"
            />
            {error && <span className="alert alert-danger">{error}</span>}
        </div>
    );
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;