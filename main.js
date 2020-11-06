function change() {
    var bgChange = document.getElementById("bgreen").value
   
    if (bgChange == "green") {
    document.getElementById("body").style.backgroundColor = "#0392BF"; 
    document.getElementById("section2").style.color = "#fff"; 

    }
}
function change1() {
    var bgChange1 = document.getElementById("bgpink").value
   
    if (bgChange1 == "pink") {
    document.getElementById("body").style.backgroundColor = "#ED48BA"; 
    document.getElementById("section2").style.color = "#fff"; 
    document.getElementById("add-cart").style.border = "2px solid white"; 


    }
}
function change2() {
    var bgChange2 = document.getElementById("bgyellow").value
   
    if (bgChange2 == "yellow") {
    document.getElementById("body").style.backgroundColor = "#FBEC06"; 
    document.getElementById("section2").style.color = "#333"; 
    document.getElementById("select").style.color = "#333";     
    
    }
}
function change3() {
    var bgChange3 = document.getElementById("bgray").value
   
    if (bgChange3 == "gray") {
    document.getElementById("body").style.backgroundColor = "#B3D4E0"; 
    document.getElementById("section2").style.color = "#333";     

    }
}

