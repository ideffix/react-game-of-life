import React, { useState, useEffect } from "react";
import Board from "./components/Board";

const App = () => {
    const [initialState, setInitialState] = useState([[]]);

    const cellClickHandler = (i, j) => {
        let copy = JSON.parse(JSON.stringify(initialState));
        copy[i][j] = initialState[i][j] === 0 ? 1 : 0;
        setInitialState(copy);
    };

    useEffect(() => {
        setInitialState(generateZeroState(30, 30));
    }, []);

    return (
        <Board
            refreshTime={500}
            initialData={initialState}
            onCellClick={cellClickHandler}
        />
    );
};

const generateZeroState = (width, height) =>
    Array(width).fill(Array(height).fill(0));

export default App;
