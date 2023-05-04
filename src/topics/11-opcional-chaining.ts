export interface Passenger {
    name: string;
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Jesus',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elisabeth']
}

const printChildren = ( passenger: Passenger): number => {
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length 
        != undefined ? passenger.children?.length : 0;


    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildren( passenger1 );