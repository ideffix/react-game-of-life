import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Cell = ({ isAlive, onClick }) => (
    <td className={classNames("cell", { alive: isAlive })} onClick={onClick} />
);

Cell.propTypes = {
    isAlive: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

export default Cell;
