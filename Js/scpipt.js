// const numbers = [3, 5,6,2];
// let min = numbers[0];
// for (let number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }
// console.log(min);

// let arr = [];



// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//       return arr.push(i)
//     }
// }
// console.log(fillArray(10, 100));


// function getExtremeElements(array) {
//   let newArr = array.concat(array[0], array[array.length - 1]);
//   console.log(newArr.slice(newArr.length-2, newArr.length));
// }

// getExtremeElements([1, 2, 3, 4, 5]);

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//    words= message.split(delimiter);
//   // Change code above this line
//   console.log(words);
// }
// splitMessage("Mango hurries to the train", " ");


//


// function slugify(title) {
//   title = title.toLowerCase();
//   title = title.split(' ');
//   let slug = title.join("-");
//   return slug;

// }
// slugify("Arrays for begginers");


// function makeArray(firstArray, secondArray, maxLength) {
//   let newArr = firstArray.concat(secondArray);
// if (newArr.length >= maxLength){
//   return newArr.slice(0 , maxLength);
// } else {
//   return newArr;
// }
// }
  
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);



// function findLongestWord(string) {
//   string = string.split(' ');
//   console.log(string);
//   let max = string[0];
//   for (let i = 0; i < string.length; i += 1){
//     if (string[i].length > max.length) {
//       max = string[i];
//     }
//   }
//   return max;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog")


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   console.log(numbers);
// for (let i = 0; i <= max-min ; i+=1){
// numbers.push(min+i);
// }

//   console.log(numbers);
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);


// function filterArray(numbers, value) {
  
// for(let i = 0 ; i < numbers.length; i+=1 ){
//   if (numbers[i] > value) {
//     numbers.push(numbers[i]);
//   }
// }
//   console.log(numbers);
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function filterArray(numbers, value) {
//     let n = numbers.length;
//     let number = [];
//     for (let i = 0; i < n; i += 1) {
//         if (numbers[i] > value) {
//             number.push(numbers[i]);
//         }
//     }
//     console.log(number);
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);



// function getCommonElements(array1, array2) {
//     let newarr = [];
//     for (let i = 0; i < array1.length || i < array2.length ; i += 1) {
//         if (array2.includes(array1[i]) === true) {
//             newarr.push(array1[i]);
//         }
        
//     }
//     return newarr;
// }


// console.log ( getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));



// function getEvenNumbers(start, end) {
//    // Change code below this line
//     let array = [];
//     for (let i = start ; i<= end ; i+=1){
    
//         array.push(i);
    
//     }
    
//     let newArr = [];
// for (let i = 0 ; i<= array.length ; i+=1){
//     if (array[i] % 2 === 0) {
//         newArr.push(array[i]);
//     }
//     }
//     return newArr;


//     // Change code above this line
// }
// getEvenNumbers(3, 11);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);



// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0 ; i < array.length ; i+=1){
//       if (array[i] === value ) {
//           return true
//       }
      
          
      
//   }return false
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3))


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (let apart in apartment){
//   keys.push(apart);
//   values.push(apartment[apart]);
// }

// console.log(values);



// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (let obj in object){
//   if (object.hasOwnProperty(obj)){
//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }


// function countProps(object) {
//   // Change code below this line
 

//   let key = Object.keys(object);
//   return key.length
// }

//  console.log(countProps({ name: 'Mango', age: 2 }))


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (let product of products) {

//     if (product['name'] == productName) {
//       return product['price'] * product['quantity'];
//    }
   
    
//   }return 0;
// }

// console.log(calculateTotalPrice('Scanner'));


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     lowTomorrow: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {  today: {
//     low : lowToday,
//     high : highToday,
//     icon,
//   tomorrow: {
//      lowTomorrow,
//     high : highTomorrow,
//     todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" ,
//   tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   }
//   }} = forecast;



// function add(...args) {
//   // Change code above this line
//   const arr = [args];
//   let total = 0;
//   for (let ar of arr) {
//      total += ar;
//   }
//   return total;
// }
// add(12, 4, 11, 48);

// function findMatches(args, ...argstwo) {
//   const matches = []; // Don't change this line
  
//   for (let i = 0; i < args.length || i < argstwo.length; i += 1) {
//     console.log(args[i]);
//     if ( argstwo.includes(args[i])) {
      
//       matches.push(args[i]);
//     }
//   }
  
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
 
  // addPotion(newPotion) {

  //   for (let i = 0; i < this.potions.length; i+=1) {
  //     if (this.potions[i].name === newPotion.name) {
  //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //     }
  //   }
    
  //   this.potions.push(newPotion);
  //   return atTheOldToad.potions;
  // }

  // }

//  removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//    for (let i = 0; i<this.potions.length; i += 1){
//      if (this.potions[i].name === potionName) {
//        console.log('djkd')
//        const potionIndex = this.potions.indexOf(this.potions[i]);
//        console.log(potionIndex);
//        this.potions.splice(potionIndex, 1);
//        return this.potions;
//      }
//    }
   
    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1);
  // },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return this.potions;
//       }

//     }
//   }

// }

   
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.removePotion("Speed potion"))


// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (let pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(pizzaName);
//   },
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `'Error! There is no pizza with a name ${error} in the assortment.`;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function changeEven(numbers, value) {
//   // Change code below this line

//   //  for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }

//   let arr = [];
//    for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] % 2 === 0) {
//        arr.push(numbers[i] + value);
//      } else {
//        arr.push(numbers[i]);
//      }
//   }
  
//   return arr;
//   // Change code above this line
// }
// console.log(changeEven([17, 24, 68, 31, 42], 100));


// const getUserNames = users => {
//     return users.map(user => user.name)
// };
  
// console.log(getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]))


// const getUsersWithFriend = (users) => {
//   let user = [];
//   for (let use of users) {
//   user.push(...use.friends);
//   // console.log(user);
//   }
  
//  return user.filter((user,index,array) =>
//    array.indexOf(user)===index)
// };

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) =>
//      acc += player.playtime / player.gamesPlayed, 0
// );
// console.log(totalAveragePlaytimePerGame);

// const getTotalFriendCount = users => {
//    return users.reduce((acc,user) => acc + user.friends.length,0)
// };

// const getSortedFriends = users => {
//    .flatMap(friend => friend.friends)
//    .filter((friend,index,array)=> array.indexOf(friend)===index)
// .sort((fir,sec)=> fir.localeCompare(sec))
// };


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];
// // console.log(getUsersWithFriend(users));
// // console.log(getTotalFriendCount(users));
// console.log((users));

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   {
// //     title: "The Dreams in the Witch House",
// //     author: "Howard Lovecraft",
// //     rating: 8.67,
// //   },
// // ];
// // const MIN_BOOK_RATING = 8;
// // // Change code below this line

// // const names = [...books]
// //   .filter((a) => a.rating > MIN_BOOK_RATING)
  
// //   .sort((a, b) => a.author.localeCompare(b.author))
// //   .map(book => book.author)
// //   ;

// // console.log(names);


// class Storage{

//   constructor(items){
//    this.items = items
//   }

//   getItems(){
//     return this.items;
//   }
// addItem(newItem){
//  this.items.push(newItem);
//   return this.items;
// }
// removeItem(itemToRemove){
//   const itemRemove = this.items.indexOf(itemToRemove);
//   this.items.splice(itemRemove, 1);
//   return this.items;
// }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems());
// console.log(storage.addItem('Droid'));
// console.log(storage.removeItem("Prolonger"));


// class StringBuilder{
//   constructor(value){
//     this.value=value
//   }
//   getValue(){
//     return this.value
//   }

//   padEnd(str) {
//     return this.value.padEnd(this.value.length+str.length, str);
//   }
//   padStart(str){
//      return this.value.padStart(this.value.length+str.length, str);
//   }

//   padBoth(str) {
//     return str + this.value + str;
//   }
// }

// const builder = new StringBuilder("kssushas");
// console.log(builder.padBoth(" jcjkk"));

// class StringBuilder{
//   constructor(initialVal){
//     this.value = initialVal;
//   }
  
// getValue(){
//     return this.value;
//   }
//   padEnd(str) {
//      this.value=this.value.padEnd(this.value.length+str.length, str);
//   }
//   padStart(str){
//     this.value=this.value.padStart(this.value.length+str.length, str);
//   }

//   padBoth(str) {
//     this.value= str + this.value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

class Car {
  // Change code below this line
  #price;
static Price = {
  MAX_PRICE: 50000
};
  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= MAX_PRICE)
    {
    this.#price = newPrice;
    } 
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price);