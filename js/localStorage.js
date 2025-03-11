
function changeNameLocalStorage() {
    var userInp = document.getElementById('usernameInput');
    localStorage.setItem('username', userInp.value);
    Swal.fire("تم تغيير الاسم بنجاح");
}

function changeCoinsLocalStorage() {
    var coinsInp = document.getElementById('coinsInput');
    localStorage.setItem('coins', coinsInp.value);
    Swal.fire("تم تغيير الكوينات بنجاح");
}

function changeDollarGiftsLocalStorage() {
    var dollarGiftsInp = document.getElementById('dollarGiftsInput');
    localStorage.setItem('dollarGifts', dollarGiftsInp.value);
    Swal.fire("تم تغيير هدايا البث بالدولار بنجاح");
}


function changecoinsGiftsLocalStorage() {
    var coinsGiftsInp = document.getElementById('coinsGiftsInput');
    localStorage.setItem('coinsGifts', coinsGiftsInp.value);
    Swal.fire("تم تغيير هدايا البث بالكوينز بنجاح");
}