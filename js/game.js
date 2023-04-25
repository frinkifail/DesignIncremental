function e(element) {return document.getElementById(element);};

var kds = document.getElementsByClassName(aliases.kd);

// Intervals
const update_interval = setInterval(function() {
    // e(aliases.kd).textContent = !user_settings.dolla_sign ? data.kromer.toLocaleString() : data.kromer.toLocaleString()+'$';
    for (var i = 0; i < kds.length; i++) {
        kds.item(i).textContent = !user_settings.dolla_sign ? data.kromer.toLocaleString() : data.kromer.toLocaleString()+'$';
    }
    // shop_check
    e(aliases.s.c.ti).textContent = data.shop_items.test_item.cost.toLocaleString()
    e(aliases.s.a.ti).textContent = data.shop_items.test_item.amount.toLocaleString()
    // shop_tick
    data.shop_items.test_item.tick_script()
}, 50)
const funny_test_interval = setInterval(function() {
    data.kromer += 1;
}, 200)
// Shop / Onclicks
e(aliases.s.r.ti).onclick=()=>{data.shop_items.test_item.purchase_script()}
