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

arr.splice(0 , arr.length);
// console.log(arr);

while(arr.length > 0){
    arr.pop();
}
// console.log(arr);

// 3) How would you check if the number is an integer
// console.log(Number.isInteger(1));

// integer/1 = remainder 0 -- use %

function checkInt(val){
    if(val%1 == 0){
        return true;
    }

    return false;
}

// console.log(checkInt(1));
// console.log(checkInt('cnjdnscj'));
// console.log(checkInt(1.1));

// 4) Make thsi work : duplicate([1 , 2 , 3 , 4, 5]);
// Output : [1 , 2 , 3  , 4 , 5 , 1 , 2 , 3 , 4 , 5]

var arr = [1 , 2, 3 , 4 , 5];

// Spread operator
arr.push(...arr);
// console.log([...arr , ...arr]);

// Concat
arr.concat(arr);

console.log(arr)

// 6) Reverse a number

function reverseNumber(num){

    // Method 1 - convert to string & reverse
    // return Number(num.toString().split('').reverse().join(''));

    // Method 2 -- getting each digit form last -- &10 & /10

    var reversedNum = 0;

    while(num > 0){

        var rem = num%10;
        reversedNum = reversedNum*10 + rem;
        num = Math.floor(num/10);

    }

    return reversedNum;
}


console.log(reverseNumber(12));

// 7) Check string is plaindrome or not

function isPalindrome(str){
    var reversedStr = str.split('').reverse().join('');

    if(str == reversedStr){
        return true;
    }else{
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

function convertFirstLetterToUppercase(str){
    var ans = str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.substr(1,str.length);
    })

    return ans.join(' ');
}

console.log(convertFirstLetterToUppercase('hello world'))

// 10) Js function to get the occurences of each letter in teh specified string

function getOccurencesOfEachChar(str){
    var ans  = {};

    for(var i = 0 ; i<str.length ; i++){
        // if(ans[str[i]] > 0){
        //     ans[str[i]]++;
        // }else{
        //     ans[str[i]] = 1;
        // }

        // Another way to check that obj contains that property
        if(ans.hasOwnProperty(str[i]) == false){
            ans[str[i]]  = 1;
        }else{
            ans[str[i]]++;
        }
    }


    return ans;
}

console.log(getOccurencesOfEachChar('shrutishruti'))
