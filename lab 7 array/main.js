main();

function main() {
    
    // exe1();
    // let array = [1, 'a', 'aba'];
    // let array2 = doubleArray(array);
    //  console.log(array2);
    // //output: [1,1,2,2,3,3,4,4,5,5]
    //  array2 = reverseArray(array);
    // console.log(array2);
    // //output: [5,4,3,2,1]
    // exe4();
    //exe5();
    // let array = [1,2,3,4,5];
    //  var array2 = pow2(array);
    // console.log(array2);
     //output: [1,4,9,16,25]
    //  let array = ["Pencil", "TV", "Laptop", "Dog Food", "Orange Juice", "Headphones", "Notebook", "Dog", "Cat", "Mouse"];
    //  let  array2 = sortCard(array,false);
    //  console.log(array2);
//     let array = [1,2,3,4,5];
//      let array2 = lastN(array,2); 
//     console.log(array2);
//     //output: [4,5]
//     array2 = lastN_2(array,2); 
//    console.log(array2);
//    //output: [4,5]
//     let array = ["Avi", "Dani", "shuki", "mOshe", "arik"];
//     let array2 = noCapital(array);
//     console.log(array2);
    let string = "Hello World";
    let string2 = reverseString(string);
    console.log(string2);
    //output: "dlroW olleH"
    let array = ["Avi", "Dani", "shuki", "mOshe", "arik","AvA", "ADA", "boob", "alla", "mom", "dad", "wow"];
    let array2 = palindromes(array);
    console.log(array2);

    array = ["cat", "dog", "mouse", "horse", "cow", "pig", "sheep", "fish", "bird", "duck", "goose", "chicken", "duck", "goose", "chicken"];
    array2 = delAnimals(array, ["Cow", "Sheep"]);
    console.log(array2);
    userInput_to_sort_array();
    gameRandom();
    userInput_to_sort_array() ;

    duplicate(array);
    _3_ways_to_duplicate_array(array);
}
    
        



//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//exe1
/**
 * @description This function get a num from the user and crate a array with the num of elements
 */
function exe1() {
    var num = +prompt("Enter a number");
    var array = (new Array(num));
   console.log(array);
}
//---------------------------------------------------------------------------------------------------------------------
/**
 * @description This function get a array and return new array with each element show twise
 * @param {array} array
 * @returns {array}
 * @example
 * var array = [1,2,3,4,5];
    * var array2 = doubleArray(array);
    * console.log(array2);
    * //output: [1,1,2,2,3,3,4,4,5,5]
    */
function doubleArray(array) {
    let array2 = [];
    for (let i = 0,j= 0; i < array.length; i++) {
        array2[j++] = array[i];
        array2[j++] = array[i];
    }
    return array2;
}
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
/**
 * @description This function get a array and return the array with the elements in reverse order
 * @param {array} array
 * @returns {array}
 * @example
 * var array = [1,2,3,4,5];
 * var array2 = reverseArray(array);
 * console.log(array2);
 * //output: [5,4,3,2,1]
 */
function reverseArray(array) {
    let array2 = [];
    for (let i = array.length - 1; i >= 0; i--) {
        array2.push(array[i]);
    }   
        
    return array2;
}
//---------------------------------------------------------------------------------------------------------------------
/**
 * @description this function make a new array  with 10 call , and each call will be biger than the previous one , the first call will be user input
 * @returns {array}
 */
function exe4 () {
    let array = [];
    let num = +prompt("Enter a number");
    array.push(num);
    for (let i = 0; i < 9; i++) {
        array.push(array[i] +1);
    }
    console.log(array);
    return array;
}

/**
 * @description this function make an array of 10 dogs , each dog is an object with the properties name , age , weight , breed , color
 * each dog  properties is user inpur 
 * @returns {array}
 * @example
 * var array = exe5();
 * console.log(array);
 */
function exe5 () {
    let dogs  = [];
    for (let i = 0; i < 10; i++) {
        dogs.push({
            name: prompt("Enter the name of the dog"),
            age: +prompt("Enter the age of the dog"),
            weight: +prompt("Enter the weight of the dog"),
            breed: prompt("Enter the breed of the dog"),
            color: prompt("Enter the color of the dog")
        });
    }
    console.log(dogs);
    return dogs;
}

//---------------------------------------------------------------------------------------------------------------------
//exe7
/**
 * @description this function get an array and return new array each element pow 2
 * @param {array} array integer
 * @returns {array}
 * @example
 * 
*/  
function pow2 (array) {
    let array2 = array.map(x=>x*x);
    return array2;
}
//---------------------------------------------------------------------------------------------------------------------
//exe8
/**
 * @description this function get an array of soping card and return the array  sorted 
 * @param {array} array string soping items
 * @returns {array}
 * @example
 * lrt array = ["Pencil", "TV", "Laptop", "Dog Food", "Orange Juice", "Headphones", "Notebook", "Dog", "Cat", "Mouse"];
 * let  array2 = sortCard(array,true);
 * console.log(array2);    
 * //output: ["Cat", "Dog", "Dog Food", "Headphones", "Laptop", "Mouse", "Notebook", "Orange Juice", "Pencil", "TV"]
 * @example
 * let array = ["Pencil", "TV", "Laptop", "Dog Food", "Orange Juice", "Headphones", "Notebook", "Dog", "Cat", "Mouse"];
 * let  array2 = sortCard(array,false);
 * console.log(array2);
 * //output: ["TV", "Laptop", "Mouse", "Notebook", "Orange Juice", "Pencil", "Headphones", "Dog Food", "Cat", "Dog"]
    */
function sortCard(array,asc) {
    if (asc) {
        return array.sort();
    } else {
        return array.sort().reverse();
    }   
}
//---------------------------------------------------------------------------------------------------------------------
//exe9
/**
 * @description this function get an array and int and return new array with n elements from the end of the array
 * @param {array} array
 * @param {int} n
 * @returns {array}
 * @example
 * let array = [1,2,3,4,5];
 * let array2 = lastN(array,2); 
 * console.log(array2);
 * //output: [4,5]
    */
function lastN(array,n) {
    if (n===array.length) {
        return array;
    }
    let array2 = [];
    for (let i = array.length - n; i < array.length; i++) {
        array2.push(array[i]);
    }
    return array2;
}
//---------------------------------------------------------------------------------------------------------------------
function lastN_2(array,n) {
    return array.slice(- n);
}

/**
 * @param {array} array
 * @returns {array} <== each element of the array thay have no capital letter
 * @example
 * let array = ["Avi", "Dani", "shuki", "mOshe", "arik"];
 * let array2 = noCapital(array);
 * console.log(array2);
 * //output: ["shuki", "arik"]
 */
function noCapital(array) {
    let array2 = array.filter(x=>{
        for (let i = 0; i < x.length; i++) {
            if (x[i] === x[i].toUpperCase()) {
                return false;
            }
        }
        return true;
    });
    return array2;
}
//---------------------------------------------------------------------------------------------------------------------
//exe10
/**
 * @description this function get an string and return the struing in reverse order using the reverse method
 * @param {string} string
 * @returns {string}
 * @example
 * let string = "Hello World";
 * let string2 = reverseString(string);
 * console.log(string2);
 * //output: "dlroW olleH"
    */
function reverseString(string) {
    return string.split("").reverse().join("");
}
//---------------------------------------------------------------------------------------------------------------------
//exe11
/**
 * @description this function get an array of strings and return an array of strings thet eche are palindromes using the reverseString method
 * @param {array} array
 * @returns {array}
 * @example
 * let array = ["Avi", "Dani", "shuki", "mOshe", "arik","AvA", "ADA", "boob", "alla", "mom", "dad", "wow"];
 * let array2 = palindromes(array);
 * console.log(array2);
 * //output: ["AvA", "ADA", "boob", "alla", "mom", "dad", "wow"]
    */
function palindromes(array) {
    let array2 = array.filter(Str=>{
        let reversStr= reverseString(Str);
        return (Str === reversStr);
    }) ;
    return array2;
}

//---------------------------------------------------------------------------------------------------------------------
//exe12
/**
 *@description this function get an array of animals and array pf delAnimals and return an array of animals
  that are not in the delAnimals array  using the filter method
    @param {array} array
    @param {array} delAnimals
    @returns {array}
    @example
    let array = ["cat", "dog", "mouse", "horse", "cow", "pig", "sheep", "fish", "bird", "duck", "goose", "chicken", "duck", "goose", "chicken"];
    let array2 = delAnimals(array, ["Cow", "Sheep"]);
    console.log(array2);
    //output: ["cat", "dog", "mouse", "horse", "pig", "fish", "bird", "duck", "goose", "chicken", "duck", "goose", "chicken"]
    */
   function delAnimals(array, delAnimals) {
       let Animals_not_4_slaughter = array.filter(animals=>{
           return !delAnimals.includes(animals);
       });
         return Animals_not_4_slaughter;
    }
//---------------------------------------------------------------------------------------------------------------------
//exe13
/**
 * @description this function rndomly cose a number between 1 to 6 in eche time and get a user input number between 1 to 6
 *              while the user input number is not the same as the random number 
 *             the function will push the user input to an array  and ask the user for a new number
 *              when the user input number is the same as the random number the
 *              function will print the array and the number of times the user input number is the same as the random number
 */
function gameRandom() { 
    
    let array = [];
    let count = 0;
    while (true) {
        let userInput = Number(prompt("Enter a number between 1 to 6"));
        let random = Math.floor(Math.random() * 6) + 1;
        if (userInput === random) {
            alert("You won!");
            break;
        } else {
            let string;
            if (count===0) {
                string = userInput;
            } else {
                string = " , " + userInput;
            }   
            array.push(string);
            count++;
        }
    }
    alert(array);
    alert(`You won ${count} times`);
}
//---------------------------------------------------------------------------------------------------------------------
//exe14
/**
 * @description this function get from the user a string and 5 numbers 
 *              and push the numbers to an array
 *           if the string is ״עולה״ the function will retun the array sorted from small to big
 *          if the string is ״יורד״ the function will retun the array sorted from big to small
 */
function userInput_to_sort_array() {
    let array = [];
    let string="";
    while ((string === "עולה") || (string === "יורד")) {
        string = prompt("Enter a string (עולה or יורד)");
    }
    for (let i = 0; i < 5; i++) { 
        let number = Number(prompt("Enter a number"));
        array.push(number);
    }
    if (string === "עולה") {
        array.sort((a,b)=>{
            return a-b;
        }
        );
    } else {
        array.sort((a,b)=>{
            return b-a;
        }
        );
    }
    return array;
}

//---------------------------------------------------------------------------------------------------------------------
//exe15
/**
 * @description this function get an array and show 3 way to duplicate the array
 *             1. using the spread operator
 *            2. using the concat method
 *           3. using the for loop
 * @param {*} array 
 */
function duplicate(array) {
    let array2 = [...array, ...array, ...array];
    let array3 = [];
    for (let i = 0; i < array.length; i++) {
        array3.push(array[i]);
    }
    array3.push(...array);
}

function _3_ways_to_duplicate_array(array) {
    let array2 = [];
    //1st way 
    array.forEach(element => {
        array2.push(element);
    });
    console.log("1st way");
    console.log(array2);
    //2nd way
    array2 = array.slice();
    console.log("2nd way");
    console.log(array2);
    //3rd way
    array2 = array.concat();
    console.log("3rd way");
    console.log(array2);

    }

