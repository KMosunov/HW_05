export function getRandomEST (min: number, max:number):number {
    return Math.floor( (Math.random() * (max - min) + min));
}

export function getRandomLVA (min: number, max:number):number {
    return Math.floor( (Math.random() * (max - min) + min));
}

export function getRandomLTU (min: number, max:number):number {
    return Math.floor( (Math.random() * (max - min) + min));
}

console.log ("EST-" +getRandomEST(1000,10000));
console.log ("LVA-" +getRandomLVA(1000,10000));
console.log ("LTU-" +getRandomLTU(1000,10000));


//export let x= Math.floor((Math.random() * 9000) + 1000);
//export let y= Math.floor((Math.random() * 9000) + 1000);
//export let z= Math.floor((Math.random() * 9000) + 1000);