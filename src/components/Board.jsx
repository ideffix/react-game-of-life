import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import { resolveNewBoardState } from "../rules/rules";
import { useInterval } from "react-use";

const Board = ({ initialData, refreshTime }) => {
    const [started, setStarted] = useState(false);
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
                    {currentBoardState.map(row => (
                        <tr>
                            {row.map(cell => (
                                <Cell isAlive={cell === 1} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setStarted(true)}>Start!</button>
        </>
    );
};

Board.propTypes = {
    initialData: PropTypes.array.isRequired,
    refreshTime: PropTypes.number.isRequired
};

export default Board;
