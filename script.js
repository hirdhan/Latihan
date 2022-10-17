let arr = [];
function singkron() {    
    document.getElementById("lists").innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
    document.getElementById("lists").innerHTML += `<li id="${i}">${arr[i]}
    <input type="text" id="edit${i}" />
    <button onclick="edit(${i});">Edit</button><button onclick="del(${i});">delete</button></li>`;
    
}}


function add() {
    let value = document.getElementById("task").value;
    arr.push(value);
    singkron();
}

function edit(i) {
    arr[i] = document.getElementById(`edit${i}`).value;
    singkron();
}

function del(i) {
    arr.splice(i, 1);
    singkron();
}
