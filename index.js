


const addtolist=document.getElementById("addtolist");
const removefromlist=document.getElementById("removefromlist");
const todoitem=document.getElementById("todoitem");
const todolist=document.getElementById("todolist");

addtolist.addEventListener("click",function(){
    const r=todoitem.value;
todolist.innerHTML += `<li onclick="this.remove()"> ${r}</li>`; 
todoitem.value="";

});

removefromlist.addEventListener("click",function(){

    const deleteitem=todolist.firstElementChild;
    if(deleteitem)
    {
        todolist.removeChild(deleteitem);
    }
    else{
        alert("No Item Left!");
    }
});