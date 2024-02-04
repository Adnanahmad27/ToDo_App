const form = document.getElementById("task-form");
const model = document.getElementById("model");
const closeBtn = document.getElementById("cloes-btn");
const addBtn = document.getElementById("addBtn");
const taskList = {
    TODO:[], COMPLETED:[] , STARTED:[]
};
let priorityCnt = [0,0,0];
let taskCnt = [0,0,0];

function toggleModel(){
    model.classList.toggle("hide");
    model.classList.toggle("show");
}
addBtn.addEventListener("click" , toggleModel);
closeBtn.addEventListener("click" , toggleModel);
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    const taskStatus = form.status.value;
    
    const taskInfo = {
        title : form.title.value,
        date : form.date.value,
        priority : form.priority.value,
    }

    taskList[taskStatus].push(taskInfo);
    const taskContainer = document.getElementById(taskStatus);
    if(taskStatus === "TODO"){
        if(taskInfo.priority==="HIGH"){
            priorityCnt[0] = priorityCnt[0]+1;
        };
        taskCnt[0] = taskCnt[0]+1;
        
        taskContainer.children[0].children[0].children[1].innerText = `${taskCnt[0]}`;
        taskContainer.children[0].children[1].children[1].innerText = `${priorityCnt[0]}`;
    }else if(taskStatus === "STARTED"){
        if(taskInfo.priority==="HIGH"){
            priorityCnt[1] = priorityCnt[1]+1;
        };
        taskCnt[1] = taskCnt[1]+1;
        taskContainer.children[0].children[0].children[1].innerText = `${taskCnt[1]}`;
        taskContainer.children[0].children[1].children[1].innerText = `${priorityCnt[1]}`;
    }else{
        if(taskInfo.priority==="HIGH"){
            priorityCnt[2] = priorityCnt[2]+1;
        };
        taskCnt[2] = taskCnt[2]+1;
        taskContainer.children[0].children[0].children[1].innerText = `${taskCnt[2]}`;
        taskContainer.children[0].children[1].children[1].innerText = `${priorityCnt[2]}`;
    }

    // const card = document.createElement("div");
    // card.className = "card";
    // card.innerHTML = ``;
    
    //taskContainer.appendChild(card);
    form.reset();
    toggleModel();
});
/*
<div class="card">
            <div id="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora magni, quidem sunt
                laudantium ducimu dignissimos? Quos <br>voluptatum seditis reiciendis.</div>
            <button id="cardbutton"><i class="fa-solid fa-trash-can"></i></button>
   </div>
*/