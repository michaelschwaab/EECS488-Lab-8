
function validate() {
    let first = document.getElementById("pw1");
    let second = document.getElementById("pw2");
    if(first.value.length >= 8){
        if(first.value == second.value){
            alert("password is Valid!");
        }
        else{
            alert("password does not match");
        }
    }
    else {
        alert("password less than 8 characters")
    }
    
}