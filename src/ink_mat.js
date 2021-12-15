const get_mat = ()=> D.mat += D.mat_pc;
const get_ink = ()=> D.ink += D.ink_pc;

const upgr_ink_pc = ()=> {
    if (D.cash < D.ink_uc) return;
    D.cash -= D.ink_uc;
    D.ink_pc += 0.2;
};
const upgr_mat_pc = ()=> {
    if (D.cash < D.mat_uc) return;
    D.cash -= D.mat_uc;
    D.mat_pc += 0.2;
};

const upgr_ink_ps = ()=> {
    if (D.cash < D.ink_ic) return;
    D.cash -= D.ink_ic;
    D.ink_ps += 0.2;
}
const upgr_mat_ps = ()=> {
    if (D.cash < D.mat_ic) return;
    D.cash -= D.mat_ic;
    D.mat_ps += 0.2;
}


setInterval(() => {
    if (D.ink_ps > 0) D.ink += D.ink_ps/2;
    if (D.mat_ps > 0) D.mat += D.mat_ps/2;
}, 500);