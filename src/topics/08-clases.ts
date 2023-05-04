export class Person {
   

    constructor(
        public name: string,
        public lastName: string,
        private address: string = 'No Addres')
        {}
}


// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public ege: number,
//         public realName: string,
//         ){
//             super(realName, 'New York');
//         }
// }

export class Hero  {


    constructor(
        public alterEgo: string,
        public ege: number,
        public realName: string,
        public person: Person
        ){
        }
}

const tony = new Person('Tony','Stark', 'New York')
const iroman = new Hero('Ironman', 45, 'Tony', tony);

console.log(iroman);
