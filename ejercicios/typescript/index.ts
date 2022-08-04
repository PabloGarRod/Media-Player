// Boolean
let muted: boolean = true;
muted = false;

//Number
let numero = 6
let numerador: number = 6
let denominador:number = numero
let result = numerador/denominador

//String
let nombre: string = 'Richard'
let frase = `Me llamo ${nombre}`

//Array
let people: string[] = [];
people = ['Isable', 'Nicole', 'Raul'];
//people.push('900')
let peopleAndNumbers: Array < string | number > = []
peopleAndNumbers.push('Ricardo')
peopleAndNumbers.push(500)

//Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin: any = 'Joker';
comodin = { type: 'wildcard'}
comodin = 7;

//Object

let carta: object = { type: 'wildcard'}

//Funciones

function add(a: number, b: number): number{
    return a + b;
}

const sum = add(4, 5)

function createAdder(a: number): (number)=>number{
    return function(b: number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);


function fullName(firstName: string, lastName: string = 'Smith'): string{
    return `${firstName} ${lastName}`
};

const richard = fullName('Richard');
console.log(richard)