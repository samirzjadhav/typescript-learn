type ChaiOrder ={
    type: string;
    sugar: number;
    strong:boolean;
}

// function makeChai(order: {type: string; sugar:number; strong: boolean}){
//     console.log(order)
// }

// function serveChai(order:{type:string; sugar: number; strong:boolean}){
//     console.log(order)
// }

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order:ChaiOrder){
    console.log(order)
}

type TeaRecipe = {
    milk: number;
    water: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 20;
}

interface CupSize{
    size: 'Small' |  'Large'
}

class Chai implements CupSize{
  size: 'Small' | 'Large' = 'Large'
}

