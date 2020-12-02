/*1. What is the Big O for this?
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
A: O(1) Constant Time
R: it's performing one operation
2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
A: O(n) Liner Time
R: it's performing one operation for each person you talk to in the room 
2. Even or odd
What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
A: O(1) Constant Time 
R: it only takes in a single value for one operation.
3. Are you here?
What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
A: O(n^2) Polynomial time
R: due to nested for loop.
4. Doubler
What is the Big O of the following algorithm? Explain your answer
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
A: O(n) Linear time
R: its one operation for one element
5. Naive search
What is the Big O of the following algorithm? Explain your answer
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
A: O(n) Linear time
R: its one operation for each array element 
6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
A: O(n^2) Polynomial time
R: due to nested for loop
7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
A: O(n) Linear Time 
R: only iterates through the array once
8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];
        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
A: O(log n) Log
R: divisability, and also has an array of remainders
/*
9. Random element
What is the Big O of the following algorithm? Explain your answer
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
A: O(1) Constant Time
R: it will always return a output of a random index 
10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
A: O(n) Linear time
R: prime number proportional to the size (n)
*/
function TOH (n, source, dest, temp) {
    if (n === 1) {
      print(source, dest);
    } else {
      TOH(n-1, source, temp, dest); // TOH(1, A, B, C)
      TOH(1, source, dest, temp);
      TOH(n-1, temp, dest, source);
    }
}
  function print(a, b) {
    console.log(`moving ${a} to ${b}`);
  }
  const A = [1, 2, 3];
  const B = [1, 2, 3, 4, 5];
  const C = [1, 2, 3, 4, 5, 6, 7];
  TOH(2, A, C, B);


  /*1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left. */
function countSheep(sheep){
    for (let i = sheep; sheep > 0; sheep--) {
       console.log(`${sheep}: Another sheep jumps over the fence`)
    }
    console.log('All sheep jumped over the fence')
  }
  countSheep(3)
  countSheep(10)
  /*2. Power Calculator
  Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)*/
  function powerCalc(num, int) {
  if (int < 0){
  console.log('exponent should be >= 0')
  }
  else {
    let answer = Math.pow(num, int)
    return answer
  }
  }
  powerCalc(10, 2) // 100
  powerCalc(10, -2) // 100
  powerCalc(5, 4) // 100
  /**3. Reverse String
  Write a function that reverses a string. Take a string as input, reverse the string, and return the new string. **/
  function reverse(string) {
  return string.split('').reverse().join('')
  }
  reverse('hello')