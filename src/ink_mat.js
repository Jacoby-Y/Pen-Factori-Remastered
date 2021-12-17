const get_mat = ()=> D.mat += D.mat_pc;
const get_ink = ()=> D.ink += D.ink_pc;

const upgr_ink_pc = ()=> {
    if (Math.round(D.cash) < D.ink_uc) return;
    D.cash -= D.ink_uc;
    if (D.cash < 0) D.cash = 0;
    D.ink_pc += D.ink_pu;
    
    D.ink_b_till--;
    if (D.ink_b_till <= 0)
        upgrade_provider("ink");
};
const upgr_mat_pc = ()=> {
    if (Math.round(D.cash) < D.mat_uc) return;
    D.cash -= D.mat_uc;
    if (D.cash < 0) D.cash = 0;
    D.mat_pc += D.mat_pu;
    D.mat_b_till--;
    if (D.mat_b_till <= 0)
        upgrade_provider("mat");
};

const upgr_ink_ps = ()=> {
    if (Math.round(D.cash) < D.ink_ic) return;
    D.cash -= D.ink_ic;
    if (D.cash < 0) D.cash = 0;
    D.ink_ps += 0.2;
}
const upgr_mat_ps = ()=> {
    if (Math.round(D.cash) < D.mat_ic) return;
    D.cash -= D.mat_ic;
    if (D.cash < 0) D.cash = 0;
    D.mat_ps += 0.2;
}


setInterval(() => {
    if (D.ink_ps > 0) D.ink += D.ink_ps/2;
    if (D.mat_ps > 0) D.mat += D.mat_ps/2;
}, 500);