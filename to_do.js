const task=document.getElementById("input")
const situation=document.getElementsByClassName("checked")
const listContainer=document.getElementById("list-container")

function addTask(){

    if(task.value=== ''){
        alert("please write your Task !");
    }
    else{
        let li=document.createElement("LI");
        li.innerHTML=task.value;
        listContainer.appendChild(li);
        task.value='';
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        
    }

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

task.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});




