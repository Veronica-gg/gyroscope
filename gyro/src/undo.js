const undo = [];
const redo = [];
var currentWord = "";

export function saveCommand(e) {
  currentWord = e.target.value;
  undo.push(e.target.value);
}

export function emptyRedo() {
  redo.length = 0;
}

export function undoFun() {
  var word;
  if (undo.length > 0) {
    if (currentWord === undo[undo.length - 1]) {
      redo.push(undo.pop());
      if (undo.length === 0) {
        // console.log("undoFunFinal");
        // console.log("undo: " + undo);
        // console.log("redo: " + redo);
        // console.log(currentWord);
        currentWord = "";
        return "";
      }
    }
    word = undo[undo.length - 1];
    currentWord = word;
    // console.log("undoFun");
    // console.log("undo: " + undo);
    // console.log("redo: " + redo);
    // console.log(currentWord);
  } else {
    word = "";
  }
  return word;
}

export function redoFun() {
  var word;
  if (redo.length > 0) {
    if (currentWord === redo[redo.length - 1]) {
      undo.push(redo.pop());
    }
    word = redo.pop();
    undo.push(word);
    currentWord = word;
    // console.log("redoFun");
    // console.log("undo: " + undo);
    // console.log("redo: " + redo);
    // console.log(currentWord);
  } else {
    word = currentWord;
  }
  return word;
}

export function availableMoves(isUndo) {
  return isUndo ? undo.length === 0 : redo.length === 0;
}
