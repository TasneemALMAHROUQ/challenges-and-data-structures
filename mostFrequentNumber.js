function mostFrequentNumber(arr) {

  let originArray = arr.sort((a, b) => a - b);

  let maxCount = 1; 
  let currentCount = 1; 
  let mostFrequent = originArray[0]; 


  for (let i = 1; i < originArray.length; i++) {
   
    if (originArray[i] === originArray[i - 1]) {
      currentCount++; 
    } else {
      currentCount = 1; 
    }


    if (currentCount > maxCount) {
      maxCount = currentCount; 
      mostFrequent = originArray[i]; 
    }
  }

  return mostFrequent;
}


const input = [1, 1, 2, 2, 3, 3, 3, 1, 1, 5, 5, 6, 7, 8, 2, 1, 1];
console.log(mostFrequentNumber(input)); 
 