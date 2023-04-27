const dolla_sign_chx = document.getElementsByClassName("set__chx__dolla");

// for (var i = 0; i < dolla_sign_chx.length; i++) {
//     dolla_sign_chx.item(i).onchange=()=>{if(dolla_sign_chx.item(i)){user_settings.dolla_sign=true;}else{user_settings.dolla_sign=false;};};
// }
data_interval = setInterval(() => {
    // dolla sign chx
    if (dolla_sign_chx[0].parentElement.parentElement.parentElement.parentElement != document.body) {}
    else {
        user_settings.dolla_sign = dolla_sign_chx[0].checked; // optimize
    }
    // shop
    // test item
    // WIP
}, 200);
