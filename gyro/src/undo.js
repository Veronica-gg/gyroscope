const commands = [];
const input = document.getElementsByClassName("textf");

export function saveCommand(e) {
  commands.push({
    // the action is also saved for implementing redo, which
    // is not implemented in this example.
    action: { type: "add", key: e.key, index: input.selectionStart },
    inverse: { type: "remove", index: input.selectionStart },
  });
  console.log(e.key);
}

export function undoFun() {
  let value = input[0].value.split("");
  const lastCommand = commands.pop();

  if (!lastCommand) return;

  switch (lastCommand.inverse.type) {
    case "remove":
      value.splice(lastCommand.inverse.index, 1);
      break;
    default:
      break;
  }

  input[0].value = value.join("");
}
