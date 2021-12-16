D.settings = {
    cash: {display(v){ return format_num(Math.round(v*10)/10); }, round: 2},

    ink: {display(v){ return format_num(Math.round(v*10)/10); }, round: 2},
    ink_pc: {display(v){ return format_num(Math.round(v*10)/10); }, round: 2},
    ink_ps: {display(v){ return format_num(Math.round(v*10)/10); }, round: 2},
    mat: {display(v){ return format_num(Math.round(v*10)/10); }, round: 2},
    mat_pc: {display(v){ return format_num(Math.round(v*10)/10); }, round: 2},
    mat_ps: {display(v){ return format_num(Math.round(v*10)/10); }, round: 2},

    // mat_uc: {display(v){
    //     console.log(`Mat upgrade cost: ${v}`); return v;
    // }},

    cash_pp: {display(v){ D.pen_info = v; return `+$${v*D.pens*(1+D.pen_mp/100)}`; }},
    pen_info: {display(v){ return `(${v} * ${D.pens}) * ${D.pen_mp}%`; }},

    mat_b_till: {display(v){ return (D.mat_b_max) ? "max" : v }},
    ink_b_till: {display(v){ return (D.ink_b_max) ? "max" : v }},
};

D.tool_tip = "Tool tip's be like";

//* Cash
D.cash = 0; 
D.cash_pp = 1;
//? critical sale?

//* Ink
D.ink = 0; // amount of ink
D.ink_pc = 0.4; // ink per click
D.ink_pp = 1; // ink per pen
D.ink_uc = 5; // ink upgrade cost
D.ink_pu = 0.2; // ink per upgrade
D.ink_ic = 10; // ink idle cost
D.ink_ps = 0; // ink per second


//* Material
D.mat = 0; // amount of mat
D.mat_pc = 0.2; // mat per click
D.mat_pp = 1; // mat per pen
D.mat_uc = 5; // mat upgrade cost
D.mat_pu = 0.2; // mat per upgrade
D.mat_ic = 10; // mat idle cost
D.mat_ps = 0; // mat per second

//* Pens
D.pens = 0; 
D.pen_ps = 0;
D.pen_ic = 10;
D.pen_mc = 25;
D.pen_mp = 0;
D.pen_info = D.cash_pp;
//? critical craft

D.cash_pp = D.cash_pp;