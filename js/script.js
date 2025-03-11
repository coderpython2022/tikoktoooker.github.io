function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}


document.addEventListener("DOMContentLoaded", function(event) { 
   
    var username = document.getElementById('username');
    var coins = document.getElementById('coins');
    var dollarGifts = document.getElementById('dollarGifts');
    var coinsGifts = document.getElementById('coinsGifts');





    username.innerHTML = localStorage.getItem('username');
    coins.innerHTML = commafy(localStorage.getItem('coins'));
    dollarGifts.innerHTML = commafy(localStorage.getItem('dollarGifts'));
    coinsGifts.innerHTML = commafy(localStorage.getItem('coinsGifts'));

    });
    

function autofocusInput() {
    document.getElementById("custInp").autofocus = true;
}

function one(){
    document.getElementById('total').innerHTML = 'US$1';
}
function four(){
    document.getElementById('total').innerHTML = 'US$4';
}
function eight(){
    document.getElementById('total').innerHTML = 'US$8';
}
function twelve(){
    document.getElementById('total').innerHTML = 'US$12';
}
function sexteen(){
    document.getElementById('total').innerHTML = 'US$16';
}
function twenty(){
    document.getElementById('total').innerHTML = 'US$20';
}
function fourty(){
    document.getElementById('total').innerHTML = 'US$40';
}

function calcNums() {
    var inp = document.getElementById('custInp');
    var lowCount = document.getElementById('lowCount');
    var totalCustom = document.getElementById('totalCustom');
    var finalTotal = document.getElementById('total');
    if(inp.value < 5000 ){
       lowCount.style.display = "block";
    }else{
        lowCount.style.display = "none";
        totalCustom.innerHTML = 'US$'+ inp.value / 5000;
        finalTotal.innerHTML = 'US$'+ inp.value / 5000;
    } 
}


function changeName() {
    var userInp = document.getElementById('usernameInput');
    var username = document.getElementById('username');
    username.innerHTML = userInp.value;
}

function paymentSuccess(){
    var finalTotal = document.getElementById('total');
    var calc = finalTotal.innerHTML.slice(3);
    var usernameinput = document.getElementById('usernameInput');
    var totalCalc = commafy(calc * 5000);
    Swal.fire({
        title: "Payment is successful",
        icon: "success",
        confirmButtonText: "Done",
        text: usernameinput.value + " is recharged " + totalCalc + " Coins, you can use Coins to send virtual Gifts within 24 hours.",
        draggable: true
      });
}
