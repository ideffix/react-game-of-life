export const resolveNewBoardState = currentBoardState =>
    currentBoardState.map((slice, i) =>
        slice.map((row, j) =>
            row.map((cell, k) => countNewCellState(currentBoardState, i, j, k))
        )
    );

const countNewCellState = (board, i, j, k) => {
    let sum = 0;
    for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
            for (let z = -1; z < 2; z++) {
                if (x === 0 && y === 0 && z === 0) {
                    continue;
                } else {
                    sum += getCellValue(board, i + x, j + y, k + z);
                }
            }
        }
    }
    if (board[i][j][k] === 0) {
        return (sum === 4 || sum === 5) ? 1 : 0;
    } else {
        return (sum === 4 || sum === 5 || sum === 6) ? 1 : 0;
    }
};

const getCellValue = (board, i, j, k) => {
    const width = board.length;
    const height = board[0].length;
    const depth = board[0][0].length;
    if (i < 0) {
        i = width - 1;
    }
    if (j < 0) {
        j = height - 1;
    }
    if (k < 0) {
        k = depth - 1;
    }
    if (i >= width) {
        i = 0;
    }
    if (j >= height) {
        j = 0;
    }
    if (k >= depth) {
        k = 0;
    }
    return board[i][j][k];
}
