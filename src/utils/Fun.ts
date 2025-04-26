export const generateList = (value: number) => {
  var list = [];
  for (let index = 0; index < value; index++) {
    list.push(index);
  }
  return list;
};
