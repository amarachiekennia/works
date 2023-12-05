var task = document.querySelector(".taskText");
var add = document.querySelector("#AddTaskBtn");
var ul = document.querySelector(".newTask");

add.addEventListener("click", function(){
    // create another variable (holder)that will hold task and value ie:
    holder = task.value;
    console.log(holder)

    if (task == 0){
        alert("please add a text")
    }

    else{
        ul.innerHTML += `<li class="taskLists">
        <input type="checkbox" name="" id=""><span>${holder}</span> 
        
        <button class="delete">Remove</button>
        <button>Edit</button>
    </li> `

    // to clear the texts on the "taskinput" input:
    task.value = ""

    // To remove the buttons
    var wipe = document.querySelectorAll(".delete");
    for(var i = 0; i < wipe.length; i++){
        wipe[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    }
})
