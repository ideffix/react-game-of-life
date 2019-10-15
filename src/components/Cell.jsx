import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Cell = ({ isAlive }) => (
    <td className={classNames("cell", { alive: isAlive })} />
);

Cell.propTypes = {
    isAlive: PropTypes.bool.isRequired
};

export default Cell;
