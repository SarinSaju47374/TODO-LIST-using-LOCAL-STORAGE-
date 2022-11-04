//Declarations and initialising
var elements = []
let add = document.querySelector(".add");
let entry = document.querySelector(".entry");
let list = document.querySelector(".todoList");

//EventListeners
add.addEventListener("click",addElem)
document.addEventListener("keypress",function(e){
   if(e.keyCode===13){
      addElem();
   }
})

//Load all the elements from Local Storage
window.onload=function(){
    if(localStorage.getItem("todoData")!==null){
      elements = JSON.parse(localStorage.getItem("todoData"))
    } 
    display();
}

//Functions 
//Update elements array by adding an element to it. Updates the local storaga too.
function addElem(e){
   if(entry.value!==" " && entry.value!==""){
      elements.push(entry.value.trim())
      entry.value=null
      if(localStorage.getItem("todoData")===null){
      localStorage.setItem("todoData",JSON.stringify(elements));
      }  
       else{
         localStorage.setItem("todoData",JSON.stringify(elements));
      }
       display();
   }
}

//After individual updations this function is called to update the TODO list.
function display(){
   list.innerHTML = "";
   for(let i=0;i<elements.length;i++){
      list.innerHTML+='<div class="task"><div class="cont">'+elements[i]+'</div>'+'<div class ="strike" onclick=  strikTask('+i+')><i class="fa-solid fa-pencil"></i></div>'+'<div class ="trash" onclick=delTask('+i+')><i class="fa-solid fa-trash"></i></div></div>'
   }
}

//Update elements array by splicing an element from it. Updates the local storaga too.
function delTask(index){
    elements.splice(index,1);
    if(localStorage.getItem("todoData")===null){
      localStorage.setItem("todoData",JSON.stringify(elements));
   }  
   else{
      localStorage.setItem("todoData",JSON.stringify(elements));
   }
    display();
}  

//Update elements array by adding or removing '<strike>' from spesific element. Updates the local storaga too.
function strikTask(index){
      if(elements[index].includes("<strike>")){
          elements[index]=elements[index].replace("<strike>","")
          elements[index]=elements[index].replace("</strike>","")
      }
      else{
          elements[index]="<strike>"+elements[index]+"</strike>"
      }
      if(localStorage.getItem("todoData")===null){
         localStorage.setItem("todoData",JSON.stringify(elements));
      }  
      else{
         localStorage.setItem("todoData",JSON.stringify(elements));
      }
      display();
}