
// function reverse_string(str){
//     let reverse = "";
//     for(let i=str.length-1;i>=0;i--){
//         reverse += str[i];
//     }
//     return reverse;
// }
// console.log(reverse_string("hello"));

// +++++ Second Approach ++++++++
// function reverse_string(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverse_string("hello"));

// const str = "hello";
// console.log(str.length);

// function check_palindrome(str){
//     let copy = str;
//     let rev = str.split("").reverse().join("");
//     if(copy===rev) return true;
//     else return false;
// }
// console.log(check_palindrome("madam"));

// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("Fizzbuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("Fizzbuzz");
//     }
//     else{
//         if(i%3==0){
//             console.log("Fizz");
//         }
//         else{
//             if(i%5==0){
//                 console.log("buzz");
//             }
//             else{
//                 console.log(i);
//             }
//         }
//     }
// }

// function find_largest(arr){
//     let maxVal = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(maxVal<arr[i]){
//             maxVal=arr[i];
//         }
//     }
//     return maxVal;
// }

// console.log(find_largest([1,5,3,9]));

// Remove Duplicates from an array
// function remove_Duplicates(arr){
//     let newArr = [];
//     arr = sort_Array(arr);
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==arr[i+1]){
//             i++;
//         }
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(remove_Duplicates([1,4,2,2,3,4,6,5,5,6]));

// function sort_Array(arr){
//     let length = arr.length;
//     for(i=1;i<=length;i++){
//         for(j=0;j<length-1;j++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//             }
//         }
//     }
//     return arr;
// }

// let arr = [10,12,5,2,8];

// Sum of digits
// function sumOfDigits(num){
//     let sum = 0;
//     while(num>0){
//         sum += num%10;
//         num = Math.floor(num/10);
//     }
//     return sum;
// }

// console.log(sumOfDigits(123456789));

// function isAnagramString(str1,str2){
//     let count=0;
//     if(str1.length !== str2.length || str1.length <=0 || str2.length <=0){
//         return false;
//     }
//     for(let i=0;i<str1.length;i++){
//         for(let j=0;j<str2.length;j++){
//             if(str1[i]===str2[j]){
//                 count++;
//                 break;
//             }
//         }
//     }
//     if(str1.length === count)
//         return true;
//     else
//         return false;
// }

// console.log(isAnagramString("listen","silent"));
// console.log(isAnagramString("saved","vase"));
// console.log(isAnagramString("elbow","below"));
// console.log(isAnagramString("",""));

// Check vowel count 
// function check_vowel(str){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(check_vowel("hello world"));

// 9.	Two Sum Problem
// Given an array of integers and a target number, return indices of the two numbers that add up to the target.
// Example: [2, 7, 11, 15], target 9 → [0, 1]

function two_sum(arr,target){
    let temp = null;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;i<=arr.length;j++){
            if(arr[i]+arr[j]===target){
                temp=[i,j];
                break;
            }
        }
        if(temp)
            break;
    }
    return temp;
}

console.log(two_sum([2, 7, 11, 15],13));

// 10.	Flatten a Nested Array
// Write a function to flatten a deeply nested array into a single array.
// Example: [1, [2, [3, [4]]]] → [1, 2, 3, 4]

function flat_array(arr){
   let newArr = arr.flat(Infinity);
   return newArr;
}

console.log(flat_array([1,2,[1,2,3,[1,2,3]]]));