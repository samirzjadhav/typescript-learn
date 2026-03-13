// in this object ts we learn about object how to used in ts 
const chai = {
    name: 'masala chai',
    price: 20,
   isHot: true
}

let tea: {
    name: string,
    price:number,
    isHot: boolean
}

tea = {
    name:'Gingar Tea',
    price: 25,
    isHot: true

}

type Tea = {
    name: string,
    price: number;
    ingredient: string[]
}

const adrakgChai : Tea ={
    name: 'Adhrak chai',
    price: 25,
    ingredient: ['adhrak','tea leaves']
}


