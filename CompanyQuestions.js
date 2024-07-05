// function display() {
//   var a = b = 10;
// }
// display();
// console.log('b', b);
// console.log('a', a);

// const length = 4; const numbers = []; var i;
// for(i=0; i<length; i++);{
//   numbers.push(i+1);}
// console.log(numbers);

// let arr = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
// let arr1 = arr.sort();
// console.log(arr);
// console.log(arr1);

// var arr = [1,2,5,0,8,7,5,0,85,5,4,8,9,2,5]

// var arrWithout5 = [];
// var arrWith5 = [];

// for(var i = 0 ; i<arr.length ; i++){
//     if(arr[i]%5 == 0 && arr[i] != 0){
//         // arr.splice(i , 1);
//         arrWith5.push(arr[i]);
//     }else{
//         arrWithout5.push(arr[i])
//     }
// }

// arr = [...arrWithout5 , ...arrWith5];

// console.log(arr);


// function isPalindrome(str){
//     var reversedStr = str.split('').reverse().join('');

//     if(reversedStr == str){
//         return true;
//     }

//     return false;
// }


// console.log(isPalindrome('baab123'));


// modify thsi fuction so that the output is 1 2 3 4
function sloppyTime() {
    setTimeout(() => console.log(1), 2000);
    console.log(2);
    setTimeout(() => console.log(3), 0);
    console.log(4);
};

sloppyTime();
