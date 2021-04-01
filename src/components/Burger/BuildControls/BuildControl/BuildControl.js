import React from 'react';
import PropTypes from "prop-types";

import classes from './BuildControl.css';

function BuildControl(props) {
        let {added, disabled, label, removed} = props;
        return (
            <div className={classes.BuildControl}>
                    <div className={classes.Label}>{label}</div>
                    <button
                        onClick={removed}
                        className={classes.Less}
                        disabled={disabled}
                    >Less
                    </button>
                    <button
                        onClick={added}
                        className={classes.More}>More
                    </button>
            </div>
        );
}

BuildControl.propTypes = {
        added: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        removed: PropTypes.func.isRequired,
}

export default BuildControl;

