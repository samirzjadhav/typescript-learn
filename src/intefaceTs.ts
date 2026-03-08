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


type Response = {ok: true} | {ok:false}
class  myRes implements Response {
    ok: boolean = true
}


type TeaType = 'masala' | 'gingar'| 'leamon';

function orderChai(t: TeaType){
    console.log(t)
}

type BaseChai = {teaLeaves: number}
type Extra = {masala :number}

const MasalaChaiWithMe = BaseChai & Extra

const cup:MasalaChaiWithMe ={
    teaLeaves =  2,
    masala: 1
}

type User = {
    username: string;
    bio?:string
}

const u1: User = {username: 'samir'}
const u2: User  = {username:'mohit', bio: 'I am youtuber and I love Gaming'}
