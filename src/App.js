import React, { useState, useEffect } from "react";
import Board from "./components/Board";

const App = () => {
    const [initialState, setInitialState] = useState([[]]);
    const [refreshTime, setRefreshTime] = useState(100);
    const [started, setStarted] = useState(false);

    const cellClickHandler = (i, j, k) => {
        let copy = JSON.parse(JSON.stringify(initialState));
        copy[i][j][k] = initialState[i][j][k] === 0 ? 1 : 0;
        setInitialState(copy);
    };

    useEffect(() => {
        setInitialState(generateZeroState(30, 50, 30));
    }, []);

    return (
        <>
            <Board
                refreshTime={refreshTime}
                initialData={initialState}
                onCellClick={cellClickHandler}
                started={started}
            />
            <button onClick={() => setStarted(true)}>Start!</button>
            Refresh time [ms]:
            <input
                type={"number"}
                onChange={e => setRefreshTime(Number(e.target.value))}
                value={refreshTime}
            />
        </>
    );
};

const generateZeroState = (width, height, depth) =>
    Array(width).fill(0).map(() => Array(height).fill(0).map(() => Array(depth).fill(0)));

export default App;
