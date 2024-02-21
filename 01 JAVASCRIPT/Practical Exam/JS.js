var task = JSON.parse(localStorage.getItem("alltask"))||[]


function enterdata(){
    let task_name = document.getElementById("task-name").value
    let task_detail = document.getElementById("task-detail").value
    let task_priority = document.getElementById("task-priority").value
    let index = task.length+1

    var adddata = {
        index : index,
        taskname : task_name,
        taskdetail : task_detail,
        taskpriority : task_priority
    }
    task.push(adddata);
    localStorage.setItem("alltask",JSON.stringify(task))

    showdata()
    clear();
}
showdata(task)


function clear(){
    let task_name = document.getElementById("task-name").value = ''
    let task_detail = document.getElementById("task-detail").value = ''
    let task_priority = document.getElementById("task-priority").value = "high"
}

function showdata(){
    document.getElementById("showtask").innerHTML = ""
    task.map((tasks)=>{
        let li = document.createElement("li")
        li.setAttribute("id","showli")
        li.innerHTML = `<strong>${tasks.taskname} </strong> - ${tasks.taskdetail} (Priority : ${tasks.taskpriority})`
        let button = document.createElement("button")
        button.innerHTML = "Delete"
        button.setAttribute("id","deletetask")
        li.append(button)
        document.getElementById("showtask").append(li)
    })
}

function filtertask(){
    let filterpriority = document.getElementById("filterpriority").value
    console.log(filterpriority)
    if(filterpriority === 'all'){
        showdata()
    }
    else if(filterpriority == "high" || filterpriority == "low" || filterpriority == "medium"){
        let filtered = task.filter(ft => ft.taskpriority === filterpriority)
        showfilterdata(filtered)
    }
    else if(filterpriority == "htol"){
        let filtered = task.filter(ft => ft.taskpriority === "high")
        let filtered2 = task.filter(ft => ft.taskpriority === "medium")
        let filtered3 = task.filter(ft => ft.taskpriority === "low")
        showfilterdata2(filtered,filtered2,filtered3)
    }
    else{
        let filtered = task.filter(ft => ft.taskpriority === "low")
        let filtered2 = task.filter(ft => ft.taskpriority === "medium")
        let filtered3 = task.filter(ft => ft.taskpriority === "high")
        showfilterdata2(filtered,filtered2,filtered3)
    }
}

function showfilterdata(filtered){
    document.getElementById("showtask").innerHTML = ""

    filtered.map((tasks)=>{
        let li = document.createElement("li")
        li.setAttribute("id","showli")
        li.innerHTML = `<strong>${tasks.taskname} </strong> - ${tasks.taskdetail} (Priority : ${tasks.taskpriority})`

        document.getElementById("showtask").append(li)
    })
}

function showfilterdata2(filtered,filtered2,filtered3){
    document.getElementById("showtask").innerHTML = ""
    
    filtered.map((tasks)=>{
        let li = document.createElement("li")
        li.setAttribute("id","showli")
        li.innerHTML = `<strong>${tasks.taskname} </strong> - ${tasks.taskdetail} (Priority : ${tasks.taskpriority})`
        document.getElementById("showtask").append(li)
    })
    filtered2.map((tasks)=>{
        let li = document.createElement("li")
        li.setAttribute("id","showli")
        li.innerHTML = `<strong>${tasks.taskname} </strong> - ${tasks.taskdetail} (Priority : ${tasks.taskpriority})`
        document.getElementById("showtask").append(li)
    })
    filtered3.map((tasks)=>{
        let li = document.createElement("li")
        li.setAttribute("id","showli")
        li.innerHTML = `<strong>${tasks.taskname} </strong> - ${tasks.taskdetail} (Priority : ${tasks.taskpriority})`
        document.getElementById("showtask").append(li)
    })
}
