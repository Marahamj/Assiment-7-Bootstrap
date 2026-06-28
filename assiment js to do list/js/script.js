
const InputBox =document.getElementById("input-task");
const ListContainer =document.getElementById("list-container");
function AddTask(){
    if (InputBox.value ===''){
        alert("you must write your task!")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML =InputBox.value;
        ListContainer.appendChild(li);
         let span= document.createElement("span");
         span.innerHTML="\u00d7"
         li.appendChild(span)

    }
    InputBox.value='';

    }
   ListContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}); 

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
saveData()
function showTask(){
    ListContainer.innerHTML= localStorage.getItem("data");

}
showTask()
