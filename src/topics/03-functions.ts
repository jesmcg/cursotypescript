// function addNumbers(a: number, b: number):number {
     
//     return a + b;

// }

// const addRows = (a: number, b: number): string => {
//     return `${a + b}`;
// }

// function multiply (firstNumber: number, secondNumber?: number, base: number = 2){
//     return firstNumber * base;
// }

// const result: number = addNumbers(1, 2);
// const result2: string = addRows(1,2);
// const multiplyResult: number = multiply(5);
// console.log({result, result2, multiplyResult});
interface Character {
    name: string;
    hp: number;
    showHp : () => void;
}


const healCharacter = ( character: Character, amout: number ) => {
    
    character.hp += amout;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter( strider, 20);
healCharacter( strider, 30);

strider.showHp();


export {}
