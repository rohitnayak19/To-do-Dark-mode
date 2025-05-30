// const amount = Number(prompt("What is the final amount?"));

// Validate input
// if (isNaN(amount) || amount <= 0) {
//     console.log('Invalid amount');
// } else {
//     // Define discount tiers in DESCENDING order for efficiency
//     const discountTiers = [
//         { min: 9001, discount: 20 },
//         { min: 7001, discount: 10 },
//         { min: 5001, discount: 5 },
//         { min: 0,    discount: 0 }
//     ];

//     // Find the first tier where amount >= min (using find())
//     const applicableTier = discountTiers.find(tier => amount >= tier.min);
//     const finalAmount = amount - Math.floor((amount * applicableTier.discount) / 100);

//     console.log(`Final amount after discount: ${finalAmount}`);
// }
// let amount = 5233;
// const  denominations = [
//     {value : 500, name : "500 ke Note"},
//     {value : 200, name : "200 ke Note"},
//     {value : 100, name : "100 ke Note"},
//     {value : 50, name : "50 ke Note"},
//     {value : 20, name : "20 ke Note"},
//     {value : 10, name : "10 ke Note"},
//     {value : 5, name : "5 ke Note"},
//     {value : 2, name : "2 ke Note"},
//     {value : 1, name : "1 ke Note"},
// ];

// for(let {value, name} of denominations){
//     if(amount>= value){
//         const count = Math.floor(amount/value)
//         console.log(`${name} : ${count}`);
//         amount = amount %  value
//     }
// }

// const pr = prompt('add factorial number');

// if(pr === null){
//     console.log('prompt is canelled')
// } else{
//     const n = Number(pr);

//     if(isNaN(n)){
//         console.log('Please enter valid number')
//     } 
//     else{

//         if(n>0){
//             let fact=1;
//             for(let i =1; i <= n; i++){
//                 fact = fact * i
//             }
//             console.log(fact)
//         } else{
//             console.log('should be positive+ and more than 0')
//         }
//     }
// }


// const pr = prompt("Enter digits");

// if(pr===null){
//     console.log('Prompt is canelled');
// } else{
//     let n = Number(pr);

//     if(isNaN(n)){
//         console.log('please enter valid number')
//     } else{
//         if(n>0){
//             let rev=0;
//             while(n>0){
//                  let rem=n%10
//                  rev= rev*10 + rem
//                  n = Math.floor(n/10)
//             }
//             console.log(rev);

//         }
//     }
// }

// let random = Math.floor(Math.random()*100)+1
// let attempts=5
// let guess = -1;

// while(attempts > 0){
//     guess = Number(prompt('Guess the number'))
//     if(isNaN(guess)){
//         console.log('Please enter valid number');
//         continue
//     }
//     if(guess < 1 || guess > 100){
//         console.log('Please enter a valid number between 1 to 100')
//         continue
//     }
//     if(guess === random){
//         console.log("Congrats you guess the correct number", random);
//     } else if(guess > random){
//         console.log('Too high');
//     } else{
//         console.log('Too low');
//     }
//     attempts--
//     console.log("Attempts left: " + attempts);
// }

// function sum(numbers){
//     if(!Array.isArray(numbers)){
//         throw new Error("Input must be an array of numbers")
//     }

//     let total=0;
//     for(let num of numbers){
//         if(typeof num !== "number"){
//             throw new Error("All elements must be an number")
//         }
//         total += num
//     }
//     return total
// }

// let arr = [1,2,3,4,5,100]
// console.log(sum(arr));

// let arr = [11,29,9,32,14,15,100,101,99]


//for Min
// let min = arr[0]

// for(let i =1; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }

// console.log(min)

//for Max
// let max = arr[0]

// for(let i =1; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max);


// function reverseArr(arr){
//     if(!arr || arr.length===0) return arr;
//     for(let start=0, end=arr.length-1; start < end; start++, end--){
//         [arr[start], arr[end]]= [arr[end], arr[start]]
//     }
//     return arr
// }

// console.log(reverseArr([1,2,3,4,5]));


// const arr = [1,0,0,1,0,1,1,0,0,1,0,0,1]

// let i =0
// let j =0;
// while(i < arr.length){
//     if(arr[i]===0){
//         let temp=arr[i];
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }

// console.log(arr);

// const zero = arr.filter((x) => x==0);
// const one = arr.filter((x) => x==1);
// const result = [...zero, ...one]
// console.log(result);

//Right rotation by 1
// const arr =[1,2,3,4,5];
// let copy=arr[0]
// for(let i  =0; i < arr.length; i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1] = copy
// console.log(arr);


//Left rotation by 1
// const arr =[1,2,3,4,5];
// let copy=arr[arr.length-1]
// for(let i = arr.length-1; i > 0; i--){
//     arr[i]=arr[i-1]
// }

// arr[0]=copy
// console.log(arr);


// function moveArr(arr, stp) {
//     stp = stp % arr.length;
//     for (let j = 0; j < stp; j++) {
//         let copy = arr[0];
//         for (let i = 0; i < arr.length - 1; i++) {
//             arr[i] = arr[i + 1]
//         }
//         arr[arr.length - 1] = copy;
//     }

//     return arr
// }

// console.log(moveArr([1, 2, 3, 4, 5], 3))


// function rightR(arr, stp){
//     stp = stp % arr.length;
//     for(let j = 0; j < stp;j++){
//         let copy=arr[arr.length-1];
//         for(let i = arr.length-1; i > 0; i--){
//             arr[i] =arr[i-1]
//         }
//         arr[0]=copy
//     }
//     return arr;
// }
// console.log(rightR([1,2,3,4,5],6))



//More afficient way

// let arr=[1,2,3,4,5];
// let temp= new Array(arr.length);
// let k = Number(prompt("Enter k steps"));
// k= k % arr.length;

// for(let i =0; i < arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length]
// }
// console.log(temp);

// let removeDuplicates = function(nums) {
//     let j = 1;
//     for(let i=0; i < nums.length-1;i++){
//         if(nums[i]!=nums[i+1]){
//             nums[j]=nums[i+1]
//             j++
//         }
//     }
//     return j
// };

// console.log(removeDuplicates([1,2,0,1,2,3,0,0,0]));




// function mergeSortedArrays(arr1, arr2) {
//    let merged =[];
//    let i = 0, j= 0

//    while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//         merged.push(arr1[i])
//         i++
//     }else{
//         merged.push(arr2[j])
//         j++
//     }
//    }
//    return [...merged, ...arr1.slice(i), ...arr2.slice(j)] 
//   }

//   const arr1 = [1, 3, 5,7];
//   const arr2 = [2, 4, 6];
//   console.log(mergeSortedArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]


// function stock(prices){
//   let maxProfit=0;
//   let minval = prices[0]
//   for(let i =0; i < prices.length; i++){
//     if(prices[i]<minval) minval=prices[i];
//     let profit = prices[i]-minval;
//     maxProfit = Math.max(maxProfit, profit)
//   }

//   return maxProfit;
// }

// console.log(stock([7,1,5,3,6,4,5,2]));


// const grocery = [
//     {text:'Bread', cost:20, need:true},
//     {text:'milk', cost:10, need:true},
//     {text:'eggs', cost:5, need:false},
//     {text:'apple', cost:3, need:false},
//     {text:'butter', cost:15, need:true},
// ];

// let total = 0;
// let html = "";

// for(let [i, {text, cost, need}] of grocery.entries()){
//     if(need){
//         html += `<li><span>${i}</span> ${text}</li>`
//         total += cost;
//     }
// }


// grocery.forEach(({text,cost,need}) =>{
//     if(need){
//         html += `<li>${text}</li>`
//         total += cost  
//     }
// })

// let total = 0;
// let html = "";
// for(let i = 0;i < grocery.length; i++){
//     const {text,cost,need}= grocery[i]
//     if(need){
//      html += `<li>${text}</li>`
//     total += cost
//     }
// }
// document.querySelector("#cost").innerHTML = `${total}$`
// document.querySelector("#list").innerHTML = html


// const list = [
//     "bacon",
//     "butter",
//     "milk",
//     "eggs",
//     "bread",
// ];

// // console.log(list.indexOf('bacon'));
// // console.log(list.findIndex(item =>item.text === 'apple'));

// const result = list.find((item => item.startsWith('m')));
// console.log(result);


// const even = [2,4,6,8,10,12]
// const newEven = even.slice()
// console.log(even);
// newEven.push(15)
// console.log(newEven);


// const odd = [1,3,5,7,9,13,11]

// const mergeArr = [...even,...odd].sort((a,b) => a-b)
// console.log(mergeArr);











