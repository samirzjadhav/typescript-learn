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