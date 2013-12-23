// tabell hide/show


function toggle_visibility(id) {
    var tabell = document.getElementById(id);
    if (tabell.style.display == 'block') tabell.style.display = 'none';
    else tabell.style.display = 'block';
    
    hideAllBut(id);
}


 
























// BILDVÄXLARE

var img1=new Image();
img1.src="../pics/unicooorn.jpg";
var img2=new Image();
img2.src="../pics/penguins.jpg";
var img3=new Image();
img2.src="../pics/tulips.jpg";
var img4=new Image();
img4.src="../pics/cover.jpg";

var pic=1;
function slides() {
    if (!document.images)
    return;
    document.images.slide.src=eval("img"+pic+".src");
    
    if (pic <4)
        pic++;
    
    else
        pic = 1;
        setTimeout("slides()", 2000);
}

slides();
























