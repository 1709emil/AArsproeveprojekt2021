class gameLogic {
  constructor() {
    this.currentPlayer = "X";
    this.board= [null,null,null,null,null,null,null,null,null];
}

nextTurn(){
    this.currentPlayer = this.currentPlayer ==="X" ? "O": "X";
};
 makeMove(i){
  if(!this.isTheGameInProgress()){
    return;
  };

  if (this.board[i]) {return}

  this.board[i] =this.currentPlayer;
    if(!this.winningLogic()){
      this.nextTurn()
    }
};

winningLogic(){
const winPatterns=
[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
for (const combination of winPatterns) {
  const [a,b,c] = combination;

  if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
    return combination}}
return null;
};

isTheGameInProgress(){
  return ! this.winningLogic() && this.board.includes(null);
}
};

let game = new gameLogic();

// Da jeg ikke kunne finde ud af at lave det så man kan se det på selve spillePlade, så er der et eksemple på, at grund logiken for spillet virker. Men det er bare lave i consolen
console.log(game.board);
game.makeMove(0);
console.log(game.board,game.isTheGameInProgress(),game.winningLogic());
game.makeMove(5);
console.log(game.board,game.isTheGameInProgress(),game.winningLogic());
game.makeMove(1);
console.log(game.board,game.isTheGameInProgress(),game.winningLogic());
game.makeMove(2);
console.log(game.board,game.isTheGameInProgress(),game.winningLogic());
game.makeMove(3);
console.log(game.board,game.isTheGameInProgress(),game.winningLogic());
game.makeMove(4)
console.log(game.board,game.isTheGameInProgress(),game.winningLogic());
game.makeMove(6)
console.log(game.board,game.isTheGameInProgress(),game.winningLogic());
