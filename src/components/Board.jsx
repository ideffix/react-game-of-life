import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import { resolveNewBoardState } from "../rules/rules";
import { useInterval } from "react-use";

const Board = ({ initialData, refreshTime, onCellClick, started }) => {
    const [currentBoardState, setCurrentBoardState] = useState([[]]);
    useEffect(() => {
        setCurrentBoardState(initialData);
    }, [initialData]);

    useInterval(
        () => {
            setCurrentBoardState(
                resolveNewBoardState(currentBoardState)
            )
        },
        started ? refreshTime : null
    );

    return (
        <>
            <table>
                <tbody>
                    {currentBoardState.map((row, i) => (
                        <tr>
                            {row.map((cell, j) => (
                                <Cell
                                    isAlive={cell === 1}
                                    onClick={() => onCellClick(i, j)}/>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

Board.propTypes = {
    started: PropTypes.bool,
    initialData: PropTypes.array.isRequired,
    refreshTime: PropTypes.number.isRequired,
    onCellClick: PropTypes.func
};

export default Board;
