//1. Write a function to find the area of a triangle where lengths of the three of its sides are given.

function creatTriangle(s1, s2, s3) {
    var s=(s1+s2+s3)/2;
    var area=Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
    return area;

};

const tr1 = creatTriangle(10, 5 ,6);
console.log("area is ", tr1);

// 2. Write a function to return the absolute difference between 2 numbers.

function difference(v1,v2){
    return Math.abs(v1 - v2);
}

const dif=difference(5,8.2)
console.log("the value is ",dif)

// 3. Write a function to determine whether a given year is a leap year or not.\

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

var inputYear = 2023;

if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
} else {
    console.log(inputYear + " is not a leap year.");
}

// 4. Write a function to return the sum of all the elements in the array.

function isSum(arr){
    var s=0;
    for(let i=0;i<arr.length;i++){
        s+=arr[i];
    }
    return s;
}

const arr1=[1,2,4,6,4,6,9];
console.log("sum is ",isSum(arr1))

// 5. Write a function to swap pairs of adjacent digits of a given integer of even length.

function swapAdjacentDigits(num) {
    var numStr = num.toString();
    var result = '';

    for (var i = 0; i < numStr.length; i += 2) {
        if (i + 1 < numStr.length) {
            result += numStr[i + 1] + numStr[i];
        } else {
            result += numStr[i];
        }
    }

    return parseInt(result, 10);
}

var inputNumber = 123456;

var swappedNumber = swapAdjacentDigits(inputNumber);
console.log("The number with swapped adjacent digits is: " + swappedNumber);

// 6. Write a function to get the largest even number from an array of integers.

function largestEvenNumber(arr) {
    var largestEven = null;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (largestEven === null || arr[i] > largestEven) {
                largestEven = arr[i];
            }
        }
    }

    return largestEven;
}

var numbers = [13, 9, 22, 55, 108, 90, 924];

var result = largestEvenNumber(numbers);
console.log("The largest even number is: " + result);

// 7. Write a function to delete the rollno property from the following
// object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "John Doe",
// class : "VI",
// rollno : 12
// };

function deleteRollNo(studentObject) {
    console.log("Object before deleting rollno property:");
    console.log(studentObject);
    delete studentObject.rollno;
    console.log("\nObject after deleting rollno property:");
    console.log(studentObject);
}

var student = {
    name: "John Doe",
    class: "VI",
    rollno: 12
};
deleteRollNo(student);