export class IdEst {
    prefix: string;
    digits: number

    constructor (pref: string, x:number) {
        this.prefix = pref
        this.digits = x
    }

    result (): string {
        return this.prefix + this.digits;
    }
}

export class IdLva {
    prefix: string;
    digits: number

    constructor (pref: string, y:number) {
        this.prefix = pref
        this.digits = y
    }

    result (): string {
        return this.prefix + this.digits;
    }
}

export class IdLtu {
    prefix: string;
    digits: number

    constructor (pref: string, z:number) {
        this.prefix = pref
        this.digits = z
    }

    result (): string {
        return this.prefix + this.digits;
    }
}

export function getRandom(min: number, max:number):number {
    return Math.floor((Math.random() * (max - min) + min));
}

const x = getRandom(1000, 10000)
const est = new IdEst('EST-', x)

const y = getRandom(1000, 10000)
const lva = new IdLva('LVA-', y)

const z = getRandom(1000, 10000)
const ltu = new IdLtu('LTU-', z)

console.log(est.result())
console.log(lva.result())
console.log(ltu.result())

