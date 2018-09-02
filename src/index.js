const array1 = [0, 1, 2, 3, 4];

const newArray1 = array1.filter((output, index) => {
  return output > 3
});

console.log(newArray1);

const array2 = ['アムロ', 'ハヤト', 'カイ', 'リュウ', 'ブライト'];

const newArray2 = array2.filter((output, index) => {
  return output === 'アムロ';
});

console.log(newArray2);

const newArray3 = array2.filter((output, index) => {
  return output.length > 3;
});

console.log(newArray3);
