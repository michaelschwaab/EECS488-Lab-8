let ix = 1;

function slideright() {
    ix=ix+1;
    if(ix == 6){ix=1;}
    switch(ix){
        case 1:
            document.getElementById("pic").src="bird1.jpg";
            break;
        case 2:
            document.getElementById("pic").src="bird2.jpg";
            break;
        case 3:
            document.getElementById("pic").src="bird3.jpg";
            break;
        case 4:
            document.getElementById("pic").src="bird4.jpg";
            break;
        case 5:
            document.getElementById("pic").src="bird5.jpg";
            break;

    }
    
}

function slideleft() {
    ix=ix-1;
    if(ix < 1){ix=5;}
    switch(ix){
        case 1:
            document.getElementById("pic").src="bird1.jpg";
            break;
        case 2:
            document.getElementById("pic").src="bird2.jpg";
            break;
        case 3:
            document.getElementById("pic").src="bird3.jpg";
            break;
        case 4:
            document.getElementById("pic").src="bird4.jpg";
            break;
        case 5:
            document.getElementById("pic").src="bird5.jpg";
            break;

    }

}