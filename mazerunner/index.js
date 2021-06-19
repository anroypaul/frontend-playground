var maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

function mazeRunner(maze, directions) {
  // Code here
  let startingPoint = [];
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        startingPoint = [i, j];
      }
    }
  }

  console.log(startingPoint);

  //if () {
  //  return "Dead";
  //}

  while (directions.length > 0) {
    let move = directions.shift();

    console.log(startingPoint[0]);
    console.log(startingPoint[1]);

    if (
      startingPoint[0] >= 0 &&
      startingPoint[0] < maze.length &&
      startingPoint[1] >= 0 &&
      startingPoint[1] < maze[0].length

      // maze[startingPoint[0]][startingPoint[1]] === 0
    ) {
      console.log(move);
      if (move === "N") {
        startingPoint[0] = startingPoint[0]--;
      }
      if (move === "E") {
        startingPoint[1] = startingPoint[1]--;
      }
      if (move === "W") {
        startingPoint[1] = startingPoint[1]++;
      }
      if (move === "S") {
        startingPoint[0] = startingPoint[0]++;
      }
      console.log(startingPoint);
    } else {
      return "Dead";
    }
  }

  if (maze[(startingPoint.i, startingPoint.j)] === 3) {
    return "Finish";
  }

  return "Lost";
}

console.log(
  mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"])
);
