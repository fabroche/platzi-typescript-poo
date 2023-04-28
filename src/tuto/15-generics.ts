// function getValue(value: unknown) {
//   return value;
// }

function getValue<myType>(value: myType) {
  return value;
}

getValue<number>(12);
