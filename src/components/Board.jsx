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
            <div> {currentBoardState.map((slice, k) => (<><h3 style={{margin: '0.5rem'}}>Slice {k}</h3><table>
                <tbody>
                    {slice.map((row, i) => (
                        <tr>
                            {row.map((cell, j) => (
                                <Cell
                                    isAlive={cell === 1}
                                    onClick={() => onCellClick(i, j, k)}/>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table></></> ))}</div>
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
