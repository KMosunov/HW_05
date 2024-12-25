import {getRandom, IdEst} from '../src/Id_Op2';
import {IdLva} from "../src/Id_Op2";
import {IdLtu} from "../src/Id_Op2";

const x = getRandom(1000, 10000)
const est = new IdEst('EST-', x)

const y = getRandom(1000, 10000)
const lva = new IdLva('LAT-', y)

const z = getRandom(1000, 10000)
const ltu = new IdLtu('LTU-', z)

test('Test EST', ()=> {
    console.log('Код для Эстонии: '+est.result())
    console.log('Код для Эстонии начинается с EST ' + est.prefix.startsWith('EST'));
    expect(est.result().length).toBe(8);
    expect(/EST-\d{4}/.test(est.result())).toBeTruthy()
    }
)

test('Test LVA', ()=> {
        console.log('Код для Латвии: '+lva.result())
        console.log('Код для Латвии начинается с LAT ' + lva.prefix.startsWith('LAT'));
        expect(lva.result().length).toBe(8);
        expect(/LAT-\d{4}/.test(lva.result())).toBeTruthy()
    }
)

test('Test LTU', ()=> {
        console.log('Код для Литвы: '+ltu.result())
        console.log('Код для Литвы начинается с LTU ' + ltu.prefix.startsWith('LTU'));
        expect(ltu.result().length).toBe(8);
        expect(/LTU-\d{4}/.test(ltu.result())).toBeTruthy()
    }
)