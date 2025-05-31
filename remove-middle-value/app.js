function RemoveMiddleValue(arr) {
if (!arr.length) return arr;

const middleIndex = Math.floor(arr.length / 2);
const newArray = [];

for (let i = 0; i < arr.length; i++) {
if (i !== middleIndex) {
newArray.push(arr[i]);
}
}

return newArray;
}

// اختبارات
console.log(RemoveMiddleValue([1, 2, 3, 4, 5]));
console.log(RemoveMiddleValue([27, 8, 15, 73, 27]));
console.log(RemoveMiddleValue([7, 9, 13, 25, 5, 17]));