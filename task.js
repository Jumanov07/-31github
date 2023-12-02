//22
const interpret = (command) => {
  return command.split("()").join("o").split("(al)").join("al");
};

interpret("G()(al)");
