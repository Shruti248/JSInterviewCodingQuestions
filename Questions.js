// 1) ------- Given a string - reverse each word in the sentence

var str = "Hello World !";

// To capture all words based on spaces -- split(' ');
// console.log(str.split(' '));

var reversedWords = str.split(" ").map((word) => {
    // To get all the characters from word -- split on basis of nothing
    return word.split('').reverse().join('');
})

var reversedStr = reversedWords.join(' ');

console.log(reversedStr);

// Given a word - reverse it
var reversedWord = str.split('').reverse().join('');
console.log(reversedWord);


// 2) How to check if an object is an array or not

var arr = [];
var obj = {};

// type of cannot be used -- bcoz both returns an object
// console.log(typeof arr); //-- object
// console.log(typeof obj); //-- object

function checkArray(elem) {
    return Array.isArray(elem);
}

console.log(checkArray(arr))
console.log(checkArray(obj))

// 3) How to empty an array in JS

var arr = [1, 2, 3];
// arr = []; //-- simply reseting to empty array - sometimes not allowed

// Modifying the Length Property: When you set arr.length to 0, you are effectively telling the JavaScript engine to truncate the array to zero elements.
// Automatic Element Removal: The JavaScript engine then removes all elements from the array, reducing its length to zero.

// The JavaScript engine removes all elements from the array to match the new length
arr.length = 0;
// console.log(arr);

arr.splice(0, arr.length);
// console.log(arr);

while (arr.length > 0) {
    arr.pop();
}
// console.log(arr);

// 3) How would you check if the number is an integer
// console.log(Number.isInteger(1));

// integer/1 = remainder 0 -- use %

function checkInt(val) {
    if (val % 1 == 0) {
        return true;
    }

    return false;
}

// console.log(checkInt(1));
// console.log(checkInt('cnjdnscj'));
// console.log(checkInt(1.1));

// 4) Make thsi work : duplicate([1 , 2 , 3 , 4, 5]);
// Output : [1 , 2 , 3  , 4 , 5 , 1 , 2 , 3 , 4 , 5]

var arr = [1, 2, 3, 4, 5];

// Spread operator
arr.push(...arr);
// console.log([...arr , ...arr]);

// Concat
arr.concat(arr);

console.log(arr)

// 6) Reverse a number

function reverseNumber(num) {

    // Method 1 - convert to string & reverse
    // return Number(num.toString().split('').reverse().join(''));

    // Method 2 -- getting each digit form last -- &10 & /10

    var reversedNum = 0;

    while (num > 0) {

        var rem = num % 10;
        reversedNum = reversedNum * 10 + rem;
        num = Math.floor(num / 10);

    }

    return reversedNum;
}


console.log(reverseNumber(12));

// 7) Check string is plaindrome or not

function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');

    if (str == reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('baaab'));

// 8) write a function that returns teh passed string with letters in the alphabetical order

var str = 'shruti';
str.split('').sort().join('');

// console.log(str.split('').sort().join(''));

// Output based
// console.log([...[...'...']]);

// 9) COnvert first letter of each word to upper case

function convertFirstLetterToUppercase(str) {
    var ans = str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.substr(1, str.length);
    })

    return ans.join(' ');
}

console.log(convertFirstLetterToUppercase('hello world'))

// 10) Js function to get the occurences of each letter in teh specified string

function getOccurencesOfEachChar(str) {
    var ans = {};

    for (var i = 0; i < str.length; i++) {
        // if(ans[str[i]] > 0){
        //     ans[str[i]]++;
        // }else{
        //     ans[str[i]] = 1;
        // }

        // Another way to check that obj contains that property
        if (ans.hasOwnProperty(str[i]) == false) {
            ans[str[i]] = 1;
        } else {
            ans[str[i]]++;
        }
    }


    return ans;
}

console.log(getOccurencesOfEachChar('shrutishruti'))

// ----------------------- LOOPS -----------------------------

// 11) Loop an array and add all numbers in it

var arr = [1, 2, 3, 4, 5];

var ans = arr.reduce((sum, curr) => {
    sum += curr;

    return sum;
}, 0);

console.log(ans);

// 12 ) in an array of numbers & strings -- only add numbers

var arr = [1, , 'nxjsncjsnc', 2, 'mckjsdncjkc', 4, 5];

var ans = arr.reduce((sum, curr) => {

    if (typeof (curr) == 'number') {
        sum += curr;
    }


    return sum;
}, 0);

console.log(ans);

// 13 ) Loop an array of objects and rmeove all objects which don't have gender's value male

var arrOfObjects = [
    { name: 'Shruti', gender: 'male' },
    { name: 'Shruti', gender: 'female' },
    { name: 'Shruti', gender: 'male' },
    { name: 'Shruti', gender: 'female' },
]

var ans13 = arrOfObjects.filter((ele) => {
    return ele['gender'] != 'male';
})

console.log(ans13);

//-------------------- Arraysss
// 14)clone an array -- Spread operator , push by iterating , Map

var arrOriginal = [1, 2]
var clonedArr = [...arrOriginal];
console.log(clonedArr);

// 15) Js function to get the first n ele of an array -- passing a parameter 'n' will return the first 'n' elements of the array

function firstNElements(arr , n){
    return arr.splice(0 , n);
}

console.log(firstNElements([1 , 2 , 3 ] , 12))

// 16) Last n elements

function lastNElements(arr , n){
      // Use slice to get the last n elements
      return arr.slice(arr.length - n);
}

console.log(lastNElements([1 , 2 , 3 ] , 2))

// 17) JS program to find most frequent ele of the array

var freq = {};

var arr17 = [1 , 2 , 2, 2 , 2, 2 , 6 , 7];

for(let i = 0 ; i<arr17.length ; i++){
    if(freq.hasOwnProperty(arr17[i])){
        freq[arr17[i]]++;
    }else{
        freq[arr17[i]] = 1;
    }
}

console.log(freq);

var mxFreq = Number.MIN_SAFE_INTEGER;

for(let key in freq){
    mxFreq = Math.max(mxFreq , freq[key]);
}

console.log(mxFreq);

// 18) UNion of two Arrays
function union(arr1 , arr2){
    return [...new Set(arr1.concat(arr2))];
}

console.log(union([1 , 2 ] , [3 , 4 , 2]));
