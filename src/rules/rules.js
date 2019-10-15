export const resolveNewBoardState = currentBoardState =>
    currentBoardState.map((row, i) =>
        row.map((cell, j) => countNewCellState(currentBoardState, i, j))
    );

const countNewCellState = (board, i, j) => {
    let sum = 0;
    for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
            if (i === j) {
                continue;
            } else {
                sum += getCellValue(board, i + k, j + l)
            }
        }
    }
    if (board[i][j] === 0) {
        return sum === 3 ? 1 : 0;
    } else {
        return (sum === 2 || sum === 3) ? 1 : 0;
    }
};

const getCellValue = (board, i, j) => {
    const rows = board.length;
    const cols = board[0].length;
    if (
        i < 0 ||
        j < 0 ||
        i >= rows ||
        j >= cols
    ) {
        return 0;
    } else {
        return board[i][j];
    }
}
