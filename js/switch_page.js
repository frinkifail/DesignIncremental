function switch_page(page) {
    e(aliases.p.c).replaceWith(e(aliases.p[page]).cloneNode(true));
    e(aliases.p[page]).id = aliases.p.c;
}
e(aliases.p.b.m).onclick=()=>{switch_page('m');};
e(aliases.p.b.s).onclick=()=>{switch_page('s');};