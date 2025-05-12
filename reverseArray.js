function reverseArray(arr) {
  const reversedArray = new Array(arr.length); // مصفوفة جديدة

  for (let i = 0; i < arr.length; i++) {
    reversedArray[arr.length - 1 - i] = arr[i]; // نعكس العناصر
  }

  return reversedArray;
}

// تجربة الدالة
const result = reverseArray([10, 20, 30, 40, 50]);
console.log("Reversed Array:", result);
