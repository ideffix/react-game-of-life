
import { countNewCellState } from "./rules";

describe("countNewCellState", () => {
  it("should revive a dead cell with 4 live neighbors", () => {
    const board = [
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ];
    const newState = countNewCellState(board, 1, 1, 1);
    expect(newState).toBe(1);
  });

  it('should kill a live cell with 3 neighbors', () => {
    const board = [
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ];
    const newState = countNewCellState(board, 1, 1, 1);
    expect(newState).toBe(0);
  });
  });
});
