window.addEventListener('load',()=>{
    const form=document.querySelector("#taskform");
    const input=document.querySelector("#taskinput");
    const tsk_list=document.querySelector("#tasks");

    form.addEventListener('submit',(e)=>
    {
        e.preventDefault();
        const task=input.value;
        if(!task)
        {
            alert("please enter a task");
            return;
        }

        const task_box=document.createElement("div");
        task_box.classList.add("content");

        const task_content=document.createElement("div");
        task_content.classList.add("task");

        const task_input=document.createElement("input");
        task_input.classList.add("text");
        task_input.type="text";
        task_input.value=task;
        task_input.setAttribute("readonly","readonly");

        const task_actions=document.createElement("div");
        task_actions.classList.add("actions");

        const task_edit=document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML="Edit";
        
        const task_del=document.createElement("button");
        task_del.classList.add("del");
        task_del.innerHTML="x";


        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_del); 

        task_content.appendChild(task_input);
        task_content.appendChild(task_actions);

        task_box.appendChild(task_content);
         
        tsk_list.appendChild(task_box);

        input.value=""

        task_edit.addEventListener('click', ()=>{
            if(task_edit.innerText.toLowerCase()=="edit")
            {
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit.innerText="Save";
            }
            else
            {
                task_input.setAttribute("readonly","readonly");
                task_edit.innerText="Edit";
            }
        })

        task_del.addEventListener('click',()=>{
            tsk_list.removeChild(task_box);
        })

        const cross=document.querySelector('#task');
        cross.addEventListener('click',function(ev){
            if( ev.target.tagName==='input')
            {
                ev.target.classList.toggle('checked');
            }
        })



    })
})