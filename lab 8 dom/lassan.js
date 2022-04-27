
//p.4 
/**
 * document object
 * The document         - object is the root node of the HTML document. Some Useful properties/methods:
 * activeElement        - the element that has focus   Returns the currently focused element in the document
 * addEventListener()   - adds an event listener to the document    Attaches an event handler to the document
 * body                 - Sets or returns the document's body (the <body> element)
 * cookie               - Returns all name/value pairs of cookies in the document
 * createElement()      - creates an element node ,  Creates an element of the specified type
 * documentElement      - Returns the Document Element of the document (the <html> element)
 * 
 * getElementById() , getElementsByClassName() ,getElementsByName() ,getElementsByTagName() 
 * - returns a collection of elements that match the specified parameters
 * - Return element(s) by a specific name/class/tag/id
 * querySelector() , querySelectorAll()     - Returns the first element or elements that matches a specified CSS selector(s) in the document
 * domain               - Returns the domain name of the document
    * - document.title  - Sets or returns the title of the document (the <title> element)
    * - document.body
    * - document.head
    * - document.links
    * - document.images
    * - document.forms
    * - document.anchors
    * - document.applets
    * - document.embeds
    * - document.scripts
    * - document.styleSheets
    * - document.all
    * - document.forms
 */
/*p.4
 * window object
    * The window object        - object is the global object in the browser. Some Useful properties/methods:
    A global variable representing the window in which the script is running. Some Useful properties/methods:
    console     - Provides methods for logging information to the browser's console
    document    - Returns the Document object for the window
    history     - Returns the History object for the window
    innerHeight , innerWidth    - Returns the width/height of a window's content area (viewport) including scrollbars (if rendered)
    localStorage                - Allows to save key/value pairs in a web browser. Stores the data with no expiration date
    location                    - Returns the Location object for the window
    navigator                   - Returns the Navigator object for the window (that contains browser information)
    outerHeight , outerWidth    - Returns the width/height of the whole browser window including sidebar

    Tip: Every HTML element with id "x" or a global var x can be accessed via window.x

    - window.alert() - displays an alert dialog box with the specified message
    pageXOffset , pageYOffset   - Returns the horizontal and vertical scroll positions of the window
    screenX , screenY          - Returns the horizontal and vertical position of the screen
    screenLeft , screenTop     - Returns the horizontal and vertical position of the screen
 */

//p.5 DOM Selecting - querySelector / querySelectorAll
//querySelector() returns the first DOM element , that match a given CSS selector.
var match = document.querySelector('div');  // Select the div

//querySelectorAll() returns a list of DOM ,elements that match a given CSS selector.
var matches = document.querySelectorAll('div.check'); // Select all divs with class check

//Then we can loop over these elements and do,something with their properties/methods
for (i=0; i<matches.length; i++){
    console.log(matches[i].innerHTML);
}

//p.6  Walking the DOM
/**
 * <html>       = document.documentElement The topmost document node is document.documentElement. That’s DOM node of
    <html> tag.
    <body>      = document.body Another widely used DOM node is the <body> element – document.body.
    <head>      = document.head The <head> tag is available as document.head.
    From: https://javascript.info/dom-navigation
 */

    //7  DOM Nodes
    /**
     * DOM nodes are objects that represent the structure of the document.
     * DOM nodes have properties and methods that allow us to manipulate the structure of the document.
     * DOM nodes have the following properties:
     * - nodeName
     * - nodeValue
     * - nodeType
     * - parentNode
     * - childNodes
     * - firstChild
     * - lastChild
     * - previousSibling
     * - nextSibling
     * - attributes
     * - ownerDocument
     * - namespaceURI
     * - prefix
     * - localName
     * - textContent
    */
    //8  DOM Nodes - nodeName
    /**
     * The nodeName property returns the name of the node.
     * The nodeName property is a read-only property.
     * The nodeName property is a string.
     * The nodeName property is the name of the node.
     */
    var nodeName = document.body.nodeName; // returns "BODY"
    var nodeName = document.body.firstChild.nodeName; // returns "P"
    var nodeName = document.body.firstChild.firstChild.nodeName; // returns "#text"
    var nodeName = document.body.firstChild.firstChild.firstChild.nodeName; // returns "#text"
    var nodeName = document.body.firstChild.firstChild.firstChild.firstChild.nodeName; // returns "#text"
    var nodeName = document.body.firstChild.firstChild.firstChild.firstChild.firstChild.nodeName; // returns "#text"
    var nodeName = document.body.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.nodeName; // returns "#text"
    var nodeName = document.body.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.nodeName; // returns "#text"

    //p.7 Walking the DOM - childNodes vs. children
    /**
     * <html>
        <body>
        <div>Begin</div>
        <ul>
             <li>Information</li>
         </ul>
        <div>End</div>
         <script>
            for (var i = 0; i < document.body.childNodes.length; i++) {
                 console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
            }
             for (var i = 0; i < document.body.children.length; i++) {
                console.log( document.body.children[i] ); // Element only - DIV, UL, ..., SCRIPT
            }
         </script>
        </body>
    </html>
*/
//p.8 DOM Manipulation - Create a DOM Element
var el = document.createElement('div');     //Use the createElement() method for creating a DOM element
el.innerHTML = '<p>Hello World!</p>';       //Fill the new element with any HTML content
document.body.appendChild(el);              //"el" can now be inserted into the DOM tree
var textnode = document.createTextNode('Hello World!'); //Create a text node    - "textnode" can now be inserted into the DOM tree
el.appendChild(textnode);                   //Alternatively, use DOM methods for creating content nodes and append them to the new element.

//p.9 DOM Manipulation - Create a DOM Element with Loop
var ul = document.querySelector('ul');      //Select ul element from the DOM
for (var index = 0; index < 10; index++) {  //Loop 10 times
    var li = document.createElement('li');  //Create a li element and assign it to a variable li
    li.className = 'item';                  //Put a class attribute with the value "item"
    // li.setAttribute('class', 'item');
    li.textContent = 'List Item '+ index;   //Append the li element to the ul child
    ul.appendChild(li);                     // The equivalent method is to use setAttribute
}


//p.10 DOM Manipulation - Remove and empty a DOM element
// remove an element
var el = document.querySelector('div'); // select the first returned <div> element
el.parentNode.removeChild(el);
// empty an element
var el = document.querySelector('div');
el.innerHTML = '';
            //JSFiddle: http://jsfiddle.net/gocode/v7ckjys6/

//p.11 DOM Manipulation - Styling a DOM element
var el = document.querySelector('div');
el.style.backgroundColor = 'green';
el.style.display = 'none';
el.style['border-radius'] = '5px';
//JSFiddle - Style with multiple values at once: http://jsfiddle.net/gocode/vaw1phrx/

//p.12 HTML Element Methods
document.querySelector("button").click();       //click() simulates a mouse click on an element.
document.getElementById("myTextField").focus(); //focus() sets focus on the specified element, if it can be focused.
document.getElementById("myTextField").blur();  //blur() removes keyboard focus from the current element.

//p.13 DOM Manipulation Cheat-Sheet
    /**
     * Finding HTML Elements
        *document.querySelector(query)          //Find element by query
        document.querySelectorAll(query)        //Find elements by query
        document.getElementById(id)             //Find an element by element id
        document.getElementsByTagName(name)     //Find elements by tag name
        document.getElementsByClassName(name)   //Find elements by class name 
     */
    /**
     * Changing HTML Elements
        element.innerHTML       = content Change the inner HTML of an element
        element.attribute       = value Change the attribute value of an HTML element
        element.setAttribute(attribute, value)      Change the attribute value of an HTML element
        element.style.property = style Change the style of an HTML element
        element.style.cssText  = style Change the style of an HTML element
        element.textContent     = content Change the text content of an HTML element
        element.value           = value Change the value of an HTML element
        element.checked         = value Change the checked state of an HTML element
        element.selected        = value Change the selected state of an HTML element
        element.disabled        = value Change the disabled state of an HTML element
        element.readonly        = value Change the readonly state of an HTML element
    */
    /**
     * Adding and Deleting Elements
        document.createElement(element)         Create an HTML element
        document.createTextNode(string)         Creates a new text node with the node value of string
        document.removeChild(element)           Remove an HTML element
        document.appendChild(element)           Add an HTML element
        node.replaceChild(newNode, oldNode)     Replaces the child node oldNode of node with newNode
        document.write(text)                    Write into the HTML output stream
        newNode = node.cloneNode(bool)          Creates newNode as a copy (clone) of node. If bool is true,
                                                the clone includes clones of all the child nodes of the original.
    */
//p.14   Events
//Things that happening in browser and running code in response.
var myHTML = document.querySelector('html');        //Select HTML element and assign it into a variable                              
myHTML.onclick = function() {                       //Assign an anonymous function into the variable onclick event
// WRITE HERE WHAT TO DO
// WHEN YOU CLICK ON HTML ELEMENT
};

//p.15  Events - addEventListener function
//target.addEventListener(type, listener[, options]);
addEventListener()   //sets up a function that will be called whenever the specified event is delivered to the target.
//                       Event Type      Event Handler
myHTML.addEventListener('click'         , function() {
    alert('CLICKED!');
   });
//p.16 Events - Inline events handlers
//We can write events on the attribute of the desired element:
//       eEvent Type       Event Handler
<button onclick         =" alert('alert text') ">BUTTON</button>;
//We can also use our declared function as a event handler:
//<button onclick="myFunc('text')">BUTTON</button>

//Tip: it is not a good idea to mix up your HTML and your JavaScript (unless you're using a framework)

// Events - Event Bubbling
//When an event is triggered, it is first sent to the element that triggered it.
//If the element has no event handler for the event, it is sent to the parent element.
//If the parent element has no event handler for the event, it is sent to the parent element's parent, and so on.
//If no event handler is found for the event, the event is not handled.
//If an event handler is found, the event is handled.
//If the event is handled, the event propagation stops.
//If the event is not handled, the event propagation continues.

//p.17 Events - Event Object
/**
 * The event object is automatically passed to event handlers to provide extra features and information.
    Including:
        target      =Returns the element that triggered the event
        type        =Returns the event type
        clientX & clientY (MouseEvent only) 
                    = Returns the horizontal/vertical coordinate of the mouse pointer, relative to the current window,
                     when the mouse event was triggered
        button (MouseEvent only)
                    = Returns which mouse button was pressed when the mouse event was triggered
 */
//p.18 event.code (on KeyboardEvent)
//Get the pressed key name (usually used on a "onkeydown" event)
<input type="text" onkeydown="printCode(event)">;
<div>THE CODE: </div><div class="code"></div>
<script>
    function checkCode(event) {
    return event.code;
};
function printCode(event) {
 document.querySelector('.code').innerHTML = checkCode(event);
}
</script>
</input>
//Note that's not supported in all browsers. For IE & Edge use the old "event.keyCode"

//p.19 Input event.target.value
//Get the input value (usually used on a "oninput" event with input)
/**
 * <style> input {
        display: block;
        margin: 10px 0; }
    </style>
    <p>How many people would you like to invite to the party?</p>
    <input type="number" oninput="showInputs(event.target.value)" />
    <p>Party members:</p>
    <div class="container"></div>
        <button>Send Invitations</button>

    <script>
        function showInputs(value) {
            var container = document.querySelector('.container');
                if (container) {
                 container.innerHTML = '';
         }
        if (value > 0) {
            for (var index = 0; index < value; index++) {
                var input = document.createElement('input');
                input.placeholder = 'Full Name';
                container.appendChild(input);
            }
        }
    }
     </script>
     Think how to show the "send" button only if there're  some members to invite
 */

     //p.20 Mouse Over & Mouse Out events example
/**
 * <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Document</title>
        </head>
        <body>
            <div class="mouse-over-box" style="background-color:#FBB0A6;width:120px;height:20px;padding:40px;">
                //Mouse Over Me!
            </div>
            <script>
                document.querySelector('.mouse-over-box').addEventListener('mouseover', function(e) {
                e.target.innerHTML = 'Ouch!!! <br/>Please go out!';
            });
            document.querySelector('.mouse-over-box').addEventListener('mouseout', function(e) {
            e.target.innerHTML = 'Thanks!!!';
            });
            </script>
        </body>
    </html>
//e.target - (event target) A reference to the object that dispatched the event
 */
//p.21 Special Events - onload & DOMContentLoaded
//onload event will be called only after the DOM and associated resources (like images) got loaded
//<body onload="function() { alert('BODY LOADED!'); }"> .... <body>

//OR 
window.addEventListener('load', function(event) {
    alert('Body Loaded!');
   });
   
   //DOMContentLoaded event will be called once the DOM is loaded - for example - it
    //won't wait for the resources like images to get loaded
    document.addEventListener('DOMContentLoaded', function(event) {
        alert('DOMContentLoaded');
       });
       
//p.22 Events Types
/**
 * There're many events types!  And many more...  https://developer.mozilla.org/en-US/docs/Web/Events
keypress,keydown,keyup,focus,mousedown,mousemove,mouseup,mouseover
 */
//p23 Forms - Form element
/**
 *  HTML Forms are one of the main points of interaction between a user and a web site or
    application. They allow users to send data to the web site. Most of the time that data is sent
    to the web server, but the web page can also intercept it to use it on its own.
    <form action="/my-handling-form-page" method="post">
    ... Form elements ...
       </form>
    The action attribute defines the location (URL) where the form's collected data should be
    sent when it is submitted.
    The method attribute defines which HTTP method to send the data with (it can be "get" or
    "post").
    MDN: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data
 */

//<form>
//    <input type="text" name="name" placeholder="Your name">
//    <input type="email" name="email" placeholder="Your email">
//    <input type="submit" value="Send">
//</form>
//<script>
//    var form = document.querySelector('form');    
//    form.addEventListener('submit', function(e) {
//        e.preventDefault();
//        var data = new FormData(form);
//        var xhr = new XMLHttpRequest();
//        xhr.open('POST', 'https://example.com/');

//        xhr.onload = function() {
//            console.log(xhr.responseText);
//        };
//        xhr.send(data);
//    });
//</script>

// Forms - FormData
/**
 * FormData is a JavaScript object that lets you easily construct a set of key/value pairs
 *   that you can pass to an XMLHttpRequest.
 * MDN: https://developer.mozilla.org/en-US/docs/Web/API/FormData
    */ 
//p25 Forms - FormData - Example
/**
 * <form action="/my-handling-form-page" method="post">
 *   <input type="text" name="name" placeholder="Your name">
 *  <input type="email" name="email" placeholder="Your email">
 * <input type="submit" value="Send">
 * </form>
 * <script>
 *  var form = document.querySelector('form');
 * form.addEventListener('submit', function(e) {
 *    e.preventDefault();
 *   var data = new FormData(form);
 *  var xhr = new XMLHttpRequest();
 * xhr.open('POST', 'https://example.com/');
 * xhr.onload = function() {
 *  console.log(xhr.responseText);

//p.24 Forms - Form element - Action attribute
/**
 * This attribute defines where the data gets sent. Its value must be a valid URL. If this
    attribute isn't provided, the data will be sent to the URL of the page containing the form.
 */
//In this example, the data is sent to an absolute URL — http://foo.com:
<form action="http://foo.com"></form>;

//Here, we use a relative URL — the data is sent to a different URL on the server:
<form action="/contact"></form>
/**
 * When specified with no attributes, as below, the <form> data is sent to the same page that
    the form is present on:

 */
//p.25 Forms - Form element - Method attribute - GET
/**The GET method is the method used by the browser to ask the server to send back a given resource:
!!!"Hey server, I want to get this resource."!!!
In this case, the browser sends an empty body.
Because the body is empty, if a form is sent using this method the data sent to the server is appended to the URL.
After the URL web address has ended, we include a question mark (?) followed by the name/value
pairs, each one separated by an ampersand (&). In this case we are passing two pieces of data
to the server
 */
//urlFormAction?formInputName1=val1&formInputName2=val2&formInputName3=val3 ....
//The request structure:  GET /get?say=Hi&to=Mom HTTP/2.0 Host: httpbin.org

//p.26 Forms - Form element - GET Method example
{
<form action="http://httpbin.org/get" method="get">
 <div>
 <label for="say">What greeting do you want to say?</label>
 <input name="say" id="say" value="Hi" />
 </div>
 <div>
 <label for="to">Who do you want to say it to?</label>
 <input name="to" id="to" value="Mom" />
 </div>
 <div><button>Send my greetings</button></div>
</form>
}
//p.27 Forms - Form element - Method attribute - POST
/**
 * The POST method is a little different.
    It's the method the browser uses to talk to the server when asking for a response that takes
    into account the data provided in the body of the HTTP request:
    "Hey server, take a look at this data and send me back an appropriate result."
    If a form is sent using this method, the data is appended to the body of the HTTP request.

{
    urlFormAction (The form data isn't exist the URL)
    POST /post HTTP/2.0
    Host: httpbin.org
Content-Type: application/x-www-form-urlencoded
Content-Length: 13
say=Hi&to=Mom
}
 */
//p.28 Forms - Form element - POST Method example
{
    <form action="http://httpbin.org/post" method="post">
 <div>
 <label for="say">What greeting do you want to say?</label>
 <input name="say" id="say" value="Hi" />
 </div>
 <div>
 <label for="to">Who do you want to say it to?</label>
 <input name="to" id="to" value="Mom" />
 </div>
 <div><button>Send my greetings</button></div>
</form>
}
//p.29 Forms - Full form example
 {}
<form action="/my-handling-form-page" method="post">
<div>
<label for="name">Name:</label>
<input type="text" id="name" name="user_name">
</div>
<div>
<label for="mail">E-mail:</label>
<input type="email" id="mail" name="user_mail">
</div>
<div>
<label for="msg">Message:</label>
<textarea id="msg" name="user_message"></textarea>
</div>
<button>Submit</button>
</form>;

//p.30 Forms - Input element
/**
The HTML <input> element is used to create interactive controls for web-based forms in order to
accept data from the user
 */


    <><label for="name">Name (4 to 8 characters):</label><input type="text" id="name" name="name" required
        minlength="4" maxlength="8" size="10">
        



    </></>
