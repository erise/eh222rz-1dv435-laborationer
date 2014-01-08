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
        case "dollar dollar":
            var y = amount * 1;
            document.getElementById('result').innerHTML = "&dollar; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "dollar euro":
            var x = currency2 = 1;
            var y = amount * 0.73;
            document.getElementById('result').innerHTML = "&euro; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "euro euro":
            var y = amount * 1;
            document.getElementById('result').innerHTML = "&euro; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
            break
        case "euro dollar":
            var x = currency2 = 0.73;
            var y = amount / x;
            document.getElementById('result').innerHTML = "&dollar; " + parseFloat(Math.round(y * 100) / 100).toFixed(2);
    }
}


// 1 euro = 1,36 dollar
// 1 dollar = 0,73 euro 
// 2 euro = 2.72 dollar
// 2 dollar = 1.46 euro










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

























