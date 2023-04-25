const dolla_sign_chx = document.getElementsByClassName("set__chx__dolla");

// for (var i = 0; i < dolla_sign_chx.length; i++) {
//     dolla_sign_chx.item(i).onchange=()=>{if(dolla_sign_chx.item(i)){user_settings.dolla_sign=true;}else{user_settings.dolla_sign=false;};};
// }
checked_interval = setInterval(() => {
    if (dolla_sign_chx[0].parentElement.parentElement.parentElement.parentElement != document.documentElement.getElementsByTagName('body')[0]) {}
    else {
        if (dolla_sign_chx[0].checked) {
            user_settings.dolla_sign = true;
        } else {
            user_settings.dolla_sign = false;
        };
    }
}, 200)
