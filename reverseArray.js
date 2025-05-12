function reverseArray(arr) {
  const reversedArray = new Array(arr.length); 

  for (let i = 0; i < arr.length; i++) {
    reversedArray[arr.length - 1 - i] = arr[i];

  return reversedArray;
}


const result = reverseArray([10, 20, 30, 40, 50]);
console.log("Reversed Array:", result);
