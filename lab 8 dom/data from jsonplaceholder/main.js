

getData();
function getData() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json =>{
        init_todolist(json);
    } );
}

function init_todolist(json) {
    let array=json;
    console.log(array);
    array.forEach(item => addTask(item));
}

function addTask(item) {
    let todo_list = document.getElementById('listToDo');
    let div = document.createElement('div');
    div.id=item.id;
    div.className=item.userId;
    let li = document.createElement('li');
    li.innerHTML = item.title;
    if (item.completed) {
        li.style.textDecoration = 'line-through';
    }
    div.appendChild(li);
    let done = document.createElement('button');
    done.innerHTML = 'Done';
    done.onclick = function() {
        if (!item.completed) {
            li.style.textDecoration = 'line-through';
        }
    };
    div.appendChild(done);
    let delete_btn = document.createElement('button');
    delete_btn.innerHTML = 'Delete';
    delete_btn.onclick = function() {
        div.remove();
    }
    div.appendChild(delete_btn);
    todo_list.appendChild(div);
}



function addTask_fromInput(){
    let txt = document.getElementById('newToDoItem').value;
    document.getElementById('newToDoItem').value = '';
    let todo_list = document.getElementById('listToDo');
    let div = document.createElement('div');
    div.id=1;
    div.className='type_input';
    let li = document.createElement('li');
    li.innerHTML = txt;
    div.appendChild(li);
    let done = document.createElement('button');
    done.innerHTML = 'Done';
    done.onclick = function() {
        if (!item.completed) {
            li.style.textDecoration = 'line-through';
        }
    };
    div.appendChild(done);
    let delete_btn = document.createElement('button');
    delete_btn.innerHTML = 'Delete';
    delete_btn.onclick = function() {
        div.remove();
    }
    div.appendChild(delete_btn);
    todo_list.appendChild(div);
}

function showDone(){
    let todo_list = document.getElementById('listToDo');
    let divs = todo_list.querySelectorAll('div');
    divs.forEach(div => {
        let li = div.querySelector('li');
        if (li.style.textDecoration == 'line-through') {
            div.style.display = 'none';
        }
    });
    document.getElementById('showDone').style.display = 'none';
    document.getElementById('showAll').style.display = 'block';
}

function showAll (){
    let todo_list = document.getElementById('listToDo');
    let divs = todo_list.querySelectorAll('div');
    divs.forEach(div => {
        div.style.display = 'block';
    });
    document.getElementById('showDone').style.display = 'block';
    document.getElementById('showAll').style.display = 'none';
}