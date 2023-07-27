// Task: 1
function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}
const originalString = 'programming hero';
const reversedString = reverseString(originalString);
console.log(reversedString);

// Task: 2
function getSumOfPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            sum += numbersArray[i];
        }
    }
    return sum;
}
const numbersArray = [3, 4, -5, 5, 7, -9, 8, -1];
const positiveSum = getSumOfPositiveNumbers(numbersArray);
console.log(positiveSum);

// Task: 3
function findMostFrequentElement(arr) {
    const elementFrequency = {};
    let maxFrequencyCount = 0;
    let mostFrequentElement;

    for (const item of arr) {
        elementFrequency[item] = (elementFrequency[item] || 0) + 1;
        if (elementFrequency[item] > maxFrequencyCount) {
            maxFrequencyCount = elementFrequency[item];
            mostFrequentElement = item;
        }
    }
    return mostFrequentElement;
}
const numbers = [77, 85, 77, 47, 41, 51, 77];
const mostFrequent = findMostFrequentElement(numbers);
console.log(mostFrequent);

// Task: 4
function findIndicesOfTwoNumbersWithSum(sortedArray, target) {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex < rightIndex) {
        const currentSum = sortedArray[leftIndex] + sortedArray[rightIndex];

        if (currentSum === target) {
            return [leftIndex, rightIndex];
        } else if (currentSum < target) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }
    return [];
}
const sortedNumbers = [1, 3, 6, 8, 11, 15];
const targetSum = 9;
const indices = findIndicesOfTwoNumbersWithSum(sortedNumbers, targetSum);
console.log(indices);

// Task: 5
function calculateResult(number1, operator, number2) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            if (number2 === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return number1 / number2;
        default:
            throw new Error("Invalid operator");
    }
}
try {
    const num1 = 10;
    const operator = '+';
    const num2 = 5;
    const result = calculateResult(num1, operator, num2);
    console.log(result);
} catch (error) {
    console.error(error.message);
}

// Task: 7
function romanToInteger(romanNumeralString) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let integerValue = 0;

    for (let i = 0; i < romanNumeralString.length; i++) {
        const currentSymbolValue = romanNumerals[romanNumeralString[i]];
        const nextSymbolValue = romanNumerals[romanNumeralString[i + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            integerValue += nextSymbolValue - currentSymbolValue;
            i++;
        } else {
            integerValue += currentSymbolValue;
        }
    }
    return integerValue;
}
const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";
console.log(romanToInteger(romanNumeral1));
console.log(romanToInteger(romanNumeral2));

// Task: 8
function findSecondSmallestElement(numbersArray) {
    if (numbersArray.length < 2) {
        throw new Error("The array must contain at least two elements.");
    }
    let smallestElement = Infinity;
    let secondSmallestElement = Infinity;

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < smallestElement) {
            secondSmallestElement = smallestElement;
            smallestElement = numbersArray[i];
        } else if (numbersArray[i] < secondSmallestElement && numbersArray[i] !== smallestElement) {
            secondSmallestElement = numbersArray[i];
        }
    }
    if (secondSmallestElement === Infinity) {
        throw new Error("There is no second smallest element in the array.");
    }
    return secondSmallestElement;
}
const numbersArrayTask8 = [5, 2, 8, 1, 6, 3];
console.log(findSecondSmallestElement(numbersArrayTask8));