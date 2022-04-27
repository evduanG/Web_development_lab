
//execute the main function

let array = [1,2,3,4,5,6,7,8,9,10]; 
let intervalID =0;
console.log(array);
main();
exe4show();


function   main() {
    console.log("exe 1");

    // exe 2
    console.log("exe 2");
    print_mouse_cordinates();
}

//exe 1 
/**
 * @description whan tha button sohw is clicked, the text in the input files will pop as a alert
 * 
 */
function show(){
    console.log("show button clicked");
    var string_txt_input = document.getElementById("inputExe1").value;
    document.getElementById("inputExe1").value= "";
    console.log(string_txt_input);  // log the value of the input field to the console
    alert(string_txt_input);        // alert the value of the input field
}

//exe 2
function print_mouse_cordinates(){
    window.addEventListener("mousemove", function(event){
        let x = event.pageX;
        let y = event.pageY;
        let string_to_print = "x: " + x + "     y: " +y ;
        //console.log(string_to_print);
        let div = document.getElementById('mouseCordinsin');
        //1st way
        //// ✅ Change (replace) the text of the element 
        div.textContent = string_to_print;
        //2nd way
        // ✅ Change (replace) the content with HTML
        //div.innerHTML = `<span style="background-color: lime">Replacement HTML</span>`;
    }
    );
}
//exe 3
/**
 * @description this function will get the value of the input field in id img_for_exe3 and will show the image in the div id img_exe3
 * @param {string} img_for_exe3 - the id of the input field3
 * @param {string} img_exe3 - the id of the div to show the image
 * @returns {void} 
 */
function showImage(){
    console.log("show image button clicked");
    let img_link = document.getElementById("img_for_exe3").value;
    document.getElementById("img_for_exe3").value = "";
    //let img_link_src = img_link.getAttribute("src");
    console.log(img_link);
    let div = document.getElementById("div_img").innerHTML='<img src="' + img_link + '" style="width:50px;"'+' />';
    // let img = new Image();
    // img.src = img_link.src;
    // document.getElementById("imgExe3").appendChild(img);
}
//exe 4
/*
===========================================================================================================
*/
//let div =     document.getElementById("div_img").'<img src="' + imgName + '" />';}
//<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
/**
 * @description this function wiil set the span in id array_exe4 to be array if array is not empty 
 * @returns void 
 */
function exe4show(){
    if (array.length ===0){
        let span= document.getElementById("array_exe4")  ;     //.append(string);      //  .innerText = string;
         span.textContent="array is empty";
    }else {
       let span= document.getElementById("array_exe4")  ;     //.append(string);      //  .innerText = string;
         span.textContent=array;
    }
}
/**
 * @description this function will remove the last element of the array and call the exe4show function
 * @returns void
 */
function remove(){
    array.pop();
    console.log(array);
    exe4show();
}
//exe4 b 
/*
===========================================================================================================
*/
/**
 * @description this function will get the txt from span id array_exe4b and split it to array
 *              if the array has only one element, the function will change the button text to reset and the array to be empty
 *              if the array is empty it will set the button txet to be remove and the array to be 1,2,3,4,5,6,7,8,9,10
 * @returns void
 */
function exe4show_usingInnerText(){
    let array_exe4 = document.getElementById("array_exe4b").innerText;
    console.log(array_exe4);
    array_exe4 = array_exe4.split(",");
    console.log(array_exe4);
    if (array_exe4.length === 1){
        console.log("array is empty");
        let buttonTxt = document.getElementById("buttonRemov").innerText;
       // console.log(buttonTxt);
        if (buttonTxt === "remove"){
            document.getElementById("buttonRemov").innerText = "reset";
            document.getElementById("array_exe4b").innerText="";
        }else{
            document.getElementById("buttonRemov").innerText = "remove";
            document.getElementById("array_exe4b").innerText="1,2,3,4,5,6,7,8,9,10";
        }
       // swhichButton(true);
    }else{
        //console.log("array is not empty");
        array_exe4.pop();
        let span= document.getElementById("array_exe4b").innerText=array_exe4  ;     //.append(string);      //  .innerText = string;
    }
}
//exe 5 
/*
===========================================================================================================
*/
/**
 * @description this function will get color from the button and set the background color of the html to be the color
 * @returns void
    */
function changeColor (color){
    console.log("change color button clicked");
    document.body.style.backgroundColor = color;
}
//exe 5 b 
/*
===========================================================================================================
*/
/**
 * @description this function will get the value of the input field input_color 
 *              and create a button with the color and add it to the div id div_color
 *              and set the button onclick event to be changeColor(color)
 * @returns void
    */

function addColor (){
    let input_element = document.getElementById("input_color");
    let color = input_element.value;
    input_element.value = "";
    console.log(color);
    if (color === ""){
        // no color
        alert("please enter a color");
    }
    else{
        //cerate a new button
        let newButton = document.createElement(color);
        newButton = document.createElement("button");
        newButton.innerText = color;
        newButton.onclick = function(){
            changeColor(color);
        }
        let div = document.getElementById("div_color");
        div.appendChild(newButton);
    }
}
//exe 6
/*
===========================================================================================================
*/
/**
 * @description this function will get the innerText of the buuton id button_exe6 and change it to be the opposite
 *              if the button text is "start" it will staet a new interval function changeColor_interval and  change it to be "stop" 
 *              else  it wiil stop the interval function and change it to be "start" and change the background color to be white
 * @returns void
 */
function setInterval_main(){
    let txtButton = document.getElementById("button_exe6").innerText;
    if (txtButton === "start"){
        console.log("start button clicked");
        document.getElementById("button_exe6").innerText = "stop";
        intervalID = setInterval(changeColor_interval ,2000);
    }  else{
        console.log("stop button clicked");
        clearInterval(intervalID);
        document.getElementById("button_exe6").innerText = "start";
        changeColor("white");
    }  
}

function changeColor_interval (){
    let array_of_colors = ["red","blue","green","yellow","orange","purple","pink","brown","black","white"];
    let random_color = array_of_colors[Math.floor(Math.random() * array_of_colors.length)];
    console.log(random_color);
    document.body.style.backgroundColor = random_color;
}

//exe 7
function addTask(){
    let task = document.getElementById("input_task").value;
    //clear the input field
    document.getElementById("input_task").value = "";
    console.log(task);
    if (task === ""){
        alert("please enter a task");
    }else{
        // create a new div for the task 
        let newTask_div = document.createElement("div");
        newTask_div.style="margin: auto;width: 60%;border: 3px solid #73AD21;padding: 10px; margin-top: 10px;display: flex;justify-content: space-around;align-items: center;";
        newTask_div.style.alignContent = "center";
        // create a new li for the task 
        let newTask_li = document.createElement("li");
        // set the innerText of the li to be the task
        newTask_li.innerText = task;
        // add the li to the div
        newTask_div.appendChild(newTask_li);
        // create a new button for delete the task div and set the onclick event to be deleteTask(task_div)
        let del = document.createElement("button");
        
        del.innerText = "delete";
        del.onclick = function(){
            deleteTask(newTask_div);
        }
         //add the button to the div
         newTask_div.appendChild(del);

        //create a new button for set the task to be done and set the onclick event to be setTaskDone(task_div)
        let done  = document.createElement("button");
        done.innerText = "done";
        done.onclick = function(){
            setTaskDone(newTask_div);
        }
        // add the button to the div
        newTask_div.appendChild(done);
        let div = document.getElementById("ToDoList_div");
        div.appendChild(newTask_div);
    }
}

function deleteTask(task_div){
    task_div.remove();
}

function setTaskDone(task_div){
    task_div.querySelector("li").style.textDecoration = "line-through";
}

function onclick_ShowS(){
    let txtButton = document.getElementById("button_exe7").innerText;
    if (txtButton === "Show Done"){
        console.log(" Show Done button clicked");
        document.getElementById("button_exe7").innerText = "Show All";
        sohwDoneToDoList();
    }  else{
        console.log("Show All button clicked");
        document.getElementById("button_exe7").innerText = "Show Done";
        showAllToDoList();
    }  
}


//exe 8
function sohwDoneToDoList(){
    let div = document.getElementById("ToDoList_div");
    let array_of_divs = div.querySelectorAll("div");
    console.log(array_of_divs);
    for (let i = 0; i < array_of_divs.length; i++){
        let task_li = array_of_divs[i].querySelector("li");
        if (task_li.style.textDecoration !== "line-through"){
            array_of_divs[i].style.display="none";   
        }
    }
}

function showAllToDoList(){
    let div = document.getElementById("ToDoList_div");
    let array_of_divs = div.querySelectorAll("div");
    console.log(array_of_divs);
    for (let i = 0; i < array_of_divs.length; i++){
        array_of_divs[i].style.display = "block";
    }
}