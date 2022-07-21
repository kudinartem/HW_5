//Task No1

let flattenArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let combineArr = flattenArr.reduce(function(a, b) {
   return a.concat(b);
});
console.log(combineArr);

//Task No2

function findPalindrome(str) {
   return str.split('').reverse().join('') == str;
};
console.log(findPalindrome('banana'));
console.log(findPalindrome('madam'));

//Task No3

let addNumber = function (...params) {
   let result = 0;
   for(let i = 0; i < params.length; i++) {
      result += params[i];
   }
   return result;
};
console.log(addNumber(2,4,5));
console.log(addNumber(10,45,34,130));

//Task No4

function genRandom(min, max) {
   let random = min + Math.random() * (max + 1 - min);
   return Math.floor(random);
};
console.log(genRandom(1,10));

//Task No5

let arr = [23,56,4,78,5,63,45,210,56];
function deleteElement(array, item) {
   let i = array.length;
   while (i--) {
      if (array[i] === item) {
         array.splice(array.indexOf(item), 1);
      }
   }
}
deleteElement(arr, 56);
console.log(arr);

//Task No6

function romanNumber(num) {
   if (isNaN(num))
      return NaN;
   let digits = String(+num).split(''),
      key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
      '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
      '','I','II','III','IV','V','VI','VII','VIII','IX'],
      roman = '',
      i = 3;
   while (i--)
      roman = (key[+digits.pop() + (i * 10)] || '') + roman;
   return Array(+digits.join('') + 1).join('M') + roman;
}
console.log(romanNumber(1989));