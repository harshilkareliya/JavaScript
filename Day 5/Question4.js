    let a = document.getElementById("amt").value
    let b = document.getElementById("int").value
    let c = document.getElementById("time").value
    
    let d = (a*b*c)/100

    document.getElementById("amtint").innerHTML=d
    document.getElementById("total").innerHTML=+a + +d