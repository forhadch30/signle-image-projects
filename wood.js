function woodQuantity(chair, table, bed) {

    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const chairTotalWood = chair * chairWood;
    const tableTotalWood = table * tableWood;
    const bedTotalWood = bed * bedWood;

    const totalQuantity = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalQuantity;
}

const totalQuantityWood = woodQuantity(1, 1, 1)
console.log(totalQuantityWood);