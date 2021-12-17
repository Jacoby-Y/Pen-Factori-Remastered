const can_craft_pen = ()=> (D.mat < D.mat_pp || D.ink < D.ink_pp) ? false : true;

const craft_pen = ()=>{
    if (!can_craft_pen()) return;
    D.mat -= D.mat_pp;
    D.ink -= D.ink_pp;
    D.pens += 1;
    D.cash_pp = D.cash_pp;
};
const sell_pens = ()=>{
    if (D.pens <= 0) return;
    D.cash += D.cash_pp * D.pens * (1+D.pen_mp/100);
    D.pens = 0;
    D.cash_pp = D.cash_pp;
};
const upgr_idle_craft = ()=>{
    if (Math.round(D.cash) < D.pen_ic) return;
    D.cash -= D.pen_ic;
    if (D.cash < 0) D.cash = 0;
    D.pen_ps += 1;
};
const upgr_marketing = ()=>{
    if (Math.round(D.cash) < D.pen_mc) return;
    D.cash -= D.pen_mc;
    if (D.cash < 0) D.cash = 0;
    D.pen_mp += 1;
    D.cash_pp = D.cash_pp;
}

const max_pen_craft = ()=>{
    const mat = Math.floor(D.mat / D.mat_pp);
    const ink = Math.floor(D.ink / D.ink_pp);
    return Math.min(mat, ink);
}
const craft_pens = (num)=>{
    D.mat -= D.mat_pp * num;
    D.ink -= D.ink_pp * num;
    D.pens += num;
    // D.cash += num * D.cash_pp;
}

setInterval(() => {
    if (D.pen_ps <= 0) return;
    const max = max_pen_craft();
    // console.log(`max: ${max}`);
    if (D.pen_ps <= max) craft_pens(D.pen_ps);
    else craft_pens(max);
    
    D.cash_pp = D.cash_pp;
}, 1000);