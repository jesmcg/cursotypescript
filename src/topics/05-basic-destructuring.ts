
interface AudioPlayer{
    audioValue: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioValue: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed sheeran',
        year: 2015
    }
}

const song = 'New Song'

const {
    song: anotherSog, 
    songDuration: duration,  
    audioValue: value, 
    details: details
} = audioPlayer;

const { author } = details;

// console.log(`Audio Value: ${ value } `);
// console.log(`Song: ${ anotherSog } `);
// console.log(`Duration: ${ duration } `);
// console.log(`Author: ${ author } `);
// console.log(`Año: ${ year } `);

const [, , trunks = "Not Found"]: string[] = ['Goku', 'Vegeta']

console.log('Personaje 3: ', trunks);


export {};