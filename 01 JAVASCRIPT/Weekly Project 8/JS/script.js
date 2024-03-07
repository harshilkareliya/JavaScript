var applicationData = JSON.parse(localStorage.getItem("appData")) || []
console.log(applicationData)

function add_application(){
    let addName = document.getElementById("name").value
    let addEmail = document.getElementById("email").value
    let addField = document.getElementById("field").value
    let addSalary = document.getElementById("salary").value 

    const userData = {
        name : addName,
        email : addEmail,
        field : addField,
        salary : addSalary                                              
    }
    applicationData.push(userData)

    localStorage.setItem("appData",JSON.stringify(applicationData))
    clearData()
}

function clearData(){
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("field").value = "Frontend"
    document.getElementById("salary").value = ""
}


function showData(){
    // document.getElementById("show").innerHTML = ""
    // document.addEventListener("DOMContentLoaded",()=>{
        applicationData.map((showAppData)=>{
            let table = document.createElement("table")
            table.setAttribute("id","table")
            let tableRow = document.createElement("tr")
            tableRow.setAttribute("id","tableRow")
            let name = document.createElement("td")
            name.innerHTML = showAppData.name
            let email = document.createElement("td")
            email.innerHTML = showAppData.email
            let aplied = document.createElement("td")
            aplied.innerHTML = showAppData.field
            let salary = document.createElement("td")
            salary.innerHTML = showAppData.salary
            tableRow.append(name,email,aplied,salary)
            table.append(tableRow)
            console.log(table)
            document.getElementById("show").append(table)
        })
    // })
}
showData()
