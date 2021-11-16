//let para = document.getElementById("para1");
//let borColor = "grey";
//let backColor = 'green';
function changePara(Color){
    document.getElementById("para1").style.backgroundColor = Color;
}


//para.style.borderColor = borColor;
//para.style.backgroundColor = backColor;

function alter(){
    document.getElementById("para1").style.backgroundColor = document.getElementById("backgroundRed").value;
    document.getElementById("para1").style.borderColor = document.getAnimations("borderRed").value;
    document.getElementById("para1").style.borderWidth = document.getAnimations("borderWidth").value;
}
