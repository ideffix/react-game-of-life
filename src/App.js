import React, { useState, useEffect } from "react";
import Board from "./components/Board";

const App = () => {
    const [initialState, setInitialState] = useState([[]]);
    useEffect(() => {
        setInitialState(generateRandomState(30, 30));
    }, []);

    return <Board refreshTime={500} initialData={initialState} />;
};

function* binaryGenerator() {
    while (true) {
        yield Math.round(Math.random());
    }
}

const generateRandomState = (width, height) => {
    const it = binaryGenerator();
    return Array(width)
        .fill(Array(height).fill(0))
        .map(i => i.map(j => it.next().value));
};

export default App;
