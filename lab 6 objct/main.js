
main();
function main() {
    var cat = constructorCat("Cat", 2, "white", "10kg");
    console.log(cat);
    cat.sayMewo();

    let cat2 = exe1();
    console.log(cat2);
    cat2.sayMewo();
    exe2(cat2);

    let name3 = prompt("Enter name of cat");
    console.log(exe3(cat2, name3));
    let object1 = {
        name: "Cat",
        age: 2,
        color: "white",
        weight: "10kg"
    };
    let object2 = {
        eys: 2,
        legs: 4,
        tail: 1
    };
    console.log(exe4(object1, object2));
    exe5();
    exe6();


}


//
function exe1() {
    let nameOfCat = prompt("Enter name of cat");
    let age = prompt("Enter age cat");
    let weight = prompt("Enter weight cat");
    let color = prompt("Enter color cat");
    return constructorCat(nameOfCat, age, weight , color);
}


function constructorCat(name, age, weight , color) {
var Cat = {
    nameOfCat: name,
    age: age,
    color: color,
    weight: weight,
    sayMewo: function() {
        console.log("Mewo");
    }
}
return Cat;
}

//exe2
/**
 * @param {Cat} cat
 * ask the user to enter a new properties for the cat and the new value 
 * and then update the cat object
 */
function exe2(cat) {
    let newProperty = prompt("Enter new property");
    let newValue = prompt("Enter new value");
    cat[newProperty] = newValue;
    return cat;
}

//exe3
/**
 * @param {Cat} cat
 * @parm {string} name3
 * @returns true if the cat has the same name as the name3
 * otherwise return false
    */
function exe3(cat, name3) {
    if (cat.nameOfCar === name3) {
        return true;
    }
    return false; 
}

//exe4
/**
 * @param object1 
 * @param object2
 * @returns new object with the properties of object1 and object2
 * and the values of object1 and object2
    */
function exe4(object1, object2) {
    let newObject = {};
    for (let key in object1) {
        newObject[key] = object1[key];
    }
    for (let key in object2) {
        newObject[key] = object2[key];
    }
    return newObject;
}

//exe5
/**
 * create a new object 10 cats
 * each cat has a name, age, color, weight
 * and a method sayMewo
 * @returns the array of cats
    */
 function exe5() {

   let clowder = constructor_clowder();
    clowder.creat_N_Cat(10);
    clowder.cats.forEach(cat => {
        cat.color = prompt("Enter color cat", "white");
    });
    console.log(clowder);
    return clowder;
}

function constructor_clowder() {
    let clowder = {
        cats : [],
        addCat : function(name, age, weight, color) {
            this.cats.push(constructorCat(name, age, weight, color));
        },
        creat_N_Cat : function(n) {
            for (let i = 0; i < n; i++) {
                this.addCat("Cat" + i, i, i, "white");
            }
        },
    };
    return clowder;
}

//exe6
/**
 * make a clowder object and set the name eche cat to user input
 * and then call the function exe3 to check if the cat is in the clowder
 * @param {clowder} clowder
 * @returns true if the cat is in the clowder
 * otherwise return false
 * @returns {boolean}
    */
function exe6() {
    let clowder = constructor_clowder();
    clowder.creat_N_Cat(10);
    clowder.cats.forEach(cat => {
        cat.nameOfCat = prompt("Enter name of cat", "mechi");
    });
    let name3 = prompt("Enter name of cat");
    clowder.cats.forEach(cat => {
       let ans =exe3(cat, name3);
         if (ans) {
                
                console.log("The cat is in the clowder");
                return true;
            } 
    });
    console.log("The cat is not in the clowder");
    return false;

}
