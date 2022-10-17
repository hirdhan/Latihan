document.getElementById("add").onclick=() =>{
    let value = document.getElementById("task").value;
    document.getElementById("lists").innerHTML += `<li id="${value}">${value}</li>`;
}
