export function getRandomEST ():number {
    return Math.floor( (Math.random() * (10000 - 1000) + 1000));
}

export function getRandomLVA ():number {
    return Math.floor( (Math.random() * (10000 - 1000) + 1000));
}

export function getRandomLTU ():number {
    return Math.floor( (Math.random() * (10000 - 1000) + 1000));
}

console.log ("EST-" +getRandomEST());
console.log ("LVA-" +getRandomLVA());
console.log ("LTU-" +getRandomLTU());