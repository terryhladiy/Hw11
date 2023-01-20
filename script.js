const arr = +prompt('write a length');
const newArray = new Array(arr);
const count = [];
for (let i = 0; i < newArray.length; i += 1) {
  const num = +prompt('Введите число');
  count[i] = num;
}

console.log(count);
console.log(count.sort((a, b) => a - b));
count.splice(1, 3);
console.log(count);
