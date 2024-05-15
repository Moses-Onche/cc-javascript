let chessboard = "";

for (let count = 1; count <= 8; count++){
  if (count % 2 === 0){
    chessboard = chessboard + "# # # #\n";
  } else {
    chessboard = chessboard + " # # # #\n";
  }
}

console.log(chessboard)