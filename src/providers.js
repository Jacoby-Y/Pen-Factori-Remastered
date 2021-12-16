//* Stuff Providers
const new_provider = (name, review, bonus, cost)=>{ return { name: name, review: review, bonus: bonus, cost: cost }};
const upgrade_provider = (str)=>{
    if (D[`${str}_b_max`]) return;
    if (providers[str][D[`${str}_b_index`] + 1] == undefined) {
        D[`${str}_b_max`] = true;
        return;
    }
    D[`${str}_b_index`]++;
    D[`${str}_b_name`] = providers[str][D[`${str}_b_index`]].name;
    D[`${str}_b_review`] = providers[str][D[`${str}_b_index`]].review;
    D[`${str}_pu`] = D[`${str}_b_bonus`] = providers[str][D[`${str}_b_index`]].bonus;
    D[`${str}_uc`] = providers[str][D[`${str}_b_index`]].cost;
    console.log("New upgrade cost: " + providers[str][D[`${str}_b_index`]].cost);
    D[`${str}_b_till`] = 10;
}

const providers = {
    ink: [
        new_provider("Generic Ink Inc.", "Its- good enough.", 0.2, 5),
        new_provider("Average Joe's Ink", "Actually, above average!", 1, 10),
        new_provider("Premium Ink", "A premium cost for the premium ink.", 3, 20),
        new_provider("Mr. Pen's Ink", "John Pensworth, I vouch for him.", 10, 50),
        new_provider("Minecraft Squid Ink", "Blrg brg, blub blug. Shlrrrg!", 25, 100),
    ],
    mat: [
        new_provider("Jeff's Plastics", "Tastes like plastic!", 0.2, 5),
        new_provider("Ally's Aluminum", "Leaves nice bite marks.", 1, 10),
        new_provider("Stevie's Steel Corp.", "Sparks up in my microwave!", 3, 20),
        new_provider("NASA's Lab", "It's some random lab, in NASA.", 10, 50),
        new_provider("Garry's Graphene", "Oh Garry, such a good guy.", 25, 100),
    ],
}

D.mat_b_name = providers.mat[0].name;
D.mat_b_review = providers.mat[0].review;
D.mat_b_bonus = providers.mat[0].bonus;
D.mat_b_till = 10;
D.mat_b_index = 0;
D.mat_b_max = false;

D.ink_b_name = providers.ink[0].name;
D.ink_b_review = providers.ink[0].review;
D.ink_b_bonus = providers.ink[0].bonus;
D.ink_b_till = 10;
D.ink_b_index = 0;
D.ink_b_max = false;