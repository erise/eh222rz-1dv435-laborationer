// tabell hide/show


function toggle_visibility(id) {
    var tabell = document.getElementById(id);
    if (tabell.style.display == 'block') tabell.style.display = 'none';
    else tabell.style.display = 'block';
    
    hideAllBut(id);
}


 





// VALUTAKONVERTERARE

















// BILDVÄXLARE

var image1=new Image ()
image1.src="../pics/asda.jpg"

var image2=new Image ()
image2.src="../pics/asdasd.jpg"

var image3=new Image ()
image3.src="../pics/unicooorn.jpg"

var step=1
function slideit (){
    document.images.slide.src=eval ("image"+step+".src");
    if(step<3)
    step++
    else
    step=1
    setTimeout("slideit()",2000)
}
slideit();

























