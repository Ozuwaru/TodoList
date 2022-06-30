window.addEventListener("load",()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#n-task-input");
    const list_el = document.querySelector("#tasks");

form.addEventListener("submit",(e)=>{
    e.preventDefault(); 

    const task = input.value;
    if(!task){
        alert("Please fill out the task")
        return;
    }
    
    
    const divS= document.createElement("div");
    divS.classList.add("div")
    const task_el = document.createElement("div");
    task_el.classList.add("textDiv");
    divS.appendChild(task_el)
     
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task
    task_input_el.setAttribute("readonly",true)
    
    divS.appendChild(task_input_el);
    const task_btn_el = document.createElement("div")
    task_btn_el.classList.add("actions");


    const edit_btn = document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerHTML = "Edit"


    const delete_btn = document.createElement("button");
    edit_btn.classList.add("delete");
    delete_btn.innerHTML = "Delete";

    //agregamos los botones al div actions
    task_btn_el.appendChild(edit_btn);
    task_btn_el.appendChild(delete_btn);+
    
    divS.appendChild(task_btn_el);


    list_el.appendChild(divS);
    

    input.value = "";

    edit_btn.addEventListener("click",()=>{
        if (edit_btn.innerHTML.toLowerCase()=="edit"){
            task_input_el.removeAttribute('readonly');
            task_input_el.focus();
            edit_btn.innerText ="Save"
        }else{
            console.log("Save")
            task_input_el.setAttribute("readonly",true);
            edit_btn.innerText="Edit";
        }
        
    })

    delete_btn.addEventListener("click",()=>{
        list_el.removeChild(divS);
    })
})  
})