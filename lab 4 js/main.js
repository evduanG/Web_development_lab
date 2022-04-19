
// exe 1 name alert
let  staticBool = "true";
newFunction();


function newFunction() {
   exe1handle();
   exe2handle();
   exe3handle();
   exe4handle();
    v =exe5handle();
    if (v) {
        console.log("true");
    } else {
        console.log("false");
    }
   exe6handle();
   exe7handle();
   exe8handle();
   exe9handle();
   exe10handle();
   exe11handle();
    let sum =exe12handle('w3resource.com', 'o' );
    console.log(sum);
    let ans =exe13handle("abc   asdfa","def");
    console.log(ans);
    let ans2 =exe14handle("thequickbrownfoxjumpsoverthelazydog");
    console.log(ans2);
    console.log("thequickbrownfxjmpsvlazydg");
    if (ans2 === "thequickbrownfxjmpsvlazydg") {
        console.log("true");
    }
    let ans14 =exe15handle("abacddbecgf");
    console.log(ans14);
}

function hello(person ) {
    alert("Hello, " + person);
}
function exe1handle(){
    let person = prompt("Please enter your name", "Harry Potter");
    hello(person);
}
// exe 2
function exe2handle(){
    let a = prompt("Enter a");
    let b = prompt("Enter b");
    let c = prompt("Enter c");
    showmultiply(a, b, c);
}
function showmultiply(a, b, c) {
    let result = a * b * c;
    console.log(result);
    alert(result);
}
// exe 3
function exe3handle(){
    let a = prompt("Enter a");
    let b = prompt("Enter b");
    showMax(a, b);
}
function showMax(a, b) {
    let ans = (a > b) ? a : b;
    alert(ans);
}

//exe 4
function exe4handle(){
    let ver_1 = prompt("Enter ver_1");
    console.log(typeof (ver_1));
}

// exe 5
function exe5handle(){
    staticBool = !staticBool ;
    console.log(staticBool);
    return staticBool;
}

//exe 6
function exe6handle(){
    let num = prompt("Enter num");
    for (let index = 0; index < 10; index++) {
        console.log(num);
    }
}

//exe 7
function exe7handle(){
    let x = prompt("Enter num of times");
    helloXTime(x);
}
function helloXTime(x) {
    for (let index = 0; index < x; index++) {
        console.log("hello");
    }
}
//exe 8
function exe8handle(){
    let x = prompt("Enter num of grades");
    average(x);
}
function average(x) {
    let sum = 0;
    for (let index = 0; index < x; index++) {
        sum += +prompt("enter the num ");
    }
    console.log(sum / x);
}
//exe 9
function exe9handle(){
   let str ;
    do {
        str = prompt("Enter str wiil asq until u will enter stop");
        console.log(str);
    }while (str != "stop");
}
//exe 10
/**
 * function take a string  form the user and return the last 2 characters
 */
function exe10handle(){
    let ans = last2("Hello");
    console.log(ans);
}
function last2(str) {
    return str.slice(-2);
}
//exe 11
/**
 * function take a string  form the user 
 * and for each character print it on the console
 * 
 */
function exe11handle(){
    let str = prompt("Enter str");
    for (let i=0 ; i<str.length ; i++){
        console.log(str[i]);
    }
}
//exe 12
/**
 * function thet get string and char and conturn the number of times that char appears in the string
 * @param str
 * @param ch
 * @returns {number}
    */
function exe12handle(str,ch){
    let sum=0;
    for (let i=0 ; i<str.length ; i++){
        if (str[i]===ch ){
           sum++;
        };
    }
    return sum;
}
//exe 13
/**
 * function thet get 2 string and return the merged string 
 * @param str1
 * @param str2
 * @returns {string}
    */
function exe13handle(str1,str2){
    let length = 0;
    if (str1.length>str2.length){
        length = str1.length;
    }else{
        length = str2.length;
    }
    let str = "";
    for (let i=0 ; i<length ; i++){
        if (str1[i]!==undefined){
            str += str1[i];
        }
        if (str2[i]!==undefined){
            str += str2[i];
        }
    }
    return str;
}  //end of exe 13

/**
 * function thet get a string and return the striing thet show char only once
 * @param str
 * @returns {string}
 */
function exe14handle(str){
    let str2 = "";
    let arry = [];
    for (let i=0 ; i<26 ; i++){
        arry[i] = 0;
    }
    for (let i=0 ; i<str.length ; i++){
        let index = str[i].charCodeAt(0)-97;
        if (arry[index]===0){
            str2 += str[i];
            arry[index] = 1;
        }
    }
    return str2;
}
//exe 15
/**
 * function thet get a string and return the first char of the string the show char only once
 * @param str
 * @returns {string}
 */
function exe15handle(str){
    let arry = [];
    for (let i=0 ; i<26 ; i++){
        arry[i] = 0;
    }
    for (let i=0 ; i<str.length ; i++){
        arry[str[i].charCodeAt(0)-97] ++;
    }
    for (let i=0 ; i<26 ; i++){
        if (arry[i]===1){
            return String.fromCharCode(i+97);
        }
    }
    console.log("no char");
    return "no char";
}