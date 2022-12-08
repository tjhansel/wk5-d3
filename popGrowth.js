function newPop(pop0, percent, adjustedGrowth, pop){
    for(year = 0;  pop0<pop; year++){
        pop0 = pop0 * (1+percent/100) + adjustedGrowth
    }
    return year
}

// While Loop Solution

const popGrowth = (ps,per,aug,p)=>{
    let year = 0
    while(ps < p){
        ps = ps+(ps*(per/100)) + aug
        year++
    }
    return year
}

console.log(newPop(1500,5,100,5000))
console.log(newPop(1500000, 2.5, 10000, 2000000))

console.log(popGrowth(1500,5,100,5000))
console.log(popGrowth(1500000, 2.5, 10000, 2000000))

