const data = {
    // wip // no longer in wip
    kromer: 0,
    shop_items: {
        test_item: {
            cost: 10,
            amount: 0,
            purchase_script: function() {
                if (data.kromer >= data.shop_items.test_item.cost) {
                    data.shop_items.test_item.cost *= 1.2;
                    data.shop_items.test_item.amount += 1;
                    return true;
                } else {
                    return false;
                }
            },
            tick_script: function() {
                data.kromer += data.shop_items.test_item.amount;
            }
        }
    }
}
const user_settings = {
    dolla_sign: false,
}
const aliases = {
    kd: "kromer-display",
    p: { // Pages
        c: "content",
        m: "sect__main",
        ft: "sect__funny-test",
        s: "sect__shop",
        st: "sect__settings",
        b: { // Buttons
            m: "nav__main",
            ft: "nav__funny-test",
            s: "nav__shop",
            st: "nav__settings",
        }
    },
    s: { // Shop Things
        c: { // Cost
            ti: "shop__cost__test_item"
        },
        a: { // Amount
            ti: "shop__amt__test_item"
        },
        r: { // Card
            ti: "shop__card__test_item"
        }
    }
}