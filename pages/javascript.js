// tabell hide/show


function toggle_visibility(id) {
    var tabell = document.getElementById(id);
    if (tabell.style.display == 'block') tabell.style.display = 'none';
    else tabell.style.display = 'block';
    
    hideAllBut(id);
}


 





// VALUTAKONVERTERARE

function calculation() {
    var amount = document.getElementById('amount').value;
    var currency1 = document.getElementById('select1').value;
    var currency2 = document.getElementById('select2').value;

    switch (currency1 + ' ' + currency2) {
        case "pound pound":
            var y = amount * 1;
            document.getElementById('result').innerHTML = "&pound; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "pound real":
            var x = currency2 = 3.40;
            var y = amount * x;
            document.getElementById('result').innerHTML = "R$ " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "real real":
            var y = amount * 1;
            document.getElementById('result').innerHTML = "R$ " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "real pound":
            var x = currency2 = 3.40;
            var y = amount / x;
            document.getElementById('result').innerHTML = "&pound; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
    }
}


// 1 euro = 1,36 dollar
// 1 dollar = 0,73 euro










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

























