import {getRandomEST} from '../src/Id_Op1'
import {getRandomLVA} from "../src/Id_Op1";
import {getRandomLTU} from "../src/Id_Op1";

test ('Test_EST', () => {
    const id1: number = getRandomEST()
    const country1: string = 'EST-'
    const result1= country1+id1;

    console.log('Код для Эстонии: ' +result1);
    console.log('Код для Эстонии начинается с EST ' + country1.startsWith('EST'));
    expect(result1.length).toBe(8);
    expect(/EST-\d{4}/.test(result1)).toBe(true)

})

test ('Test_LVA', () => {
    const id2: number = getRandomLVA()
    const country2: string = 'LVA-'
    const result2= country2+id2;

    console.log('Код для Латвии: ' +result2);
    console.log('Код для Латвии начинается с LVA ' + country2.startsWith('EST'));
    expect(result2.length).toBe(8);
    expect(/LVA-\d{4}/.test(result2)).toBe(true)

})

test ('Test_LTU', () => {
    const id3: number = getRandomLTU()
    const country3: string = 'LTU-'
    const result3= country3+id3;

    console.log('Код для Литвы: ' +result3);
    console.log('Код для Литвы начинается с LTU ' + country3.startsWith('EST'));
    expect(result3.length).toBe(8);
    expect(/LTU-\d{4}/.test(result3)).toBe(true)

})