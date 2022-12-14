/*

//explicit types

let nome: string;
let age: number;
let isActive: boolean;


nome = "Osvaldo"
age = 18;
isActive = true;
//

//Union types
let uid: string | number;
uid = 123;
uid = "123"

let names: (number | string | boolean)[] = []
names.push("Osvaldo")
names.push(10)
names.push(true)

let user: object;

user = {
    id: 1,
    name: "Osvaldo"
}

let user2: {
    id: number,    
    name: string,
}

user2 = {id:1, name:"Jorge"}



//Dynamic types

let a: any = 23;
a = "Boas notas"
a = false;


let mix: any[] = [];

mix.push(10);
mix.push("Osvaldo de Sousa")

let user: {
    id: any;
    name: any;
}
user = {
    id: 1, 
    name: "Osvaldo",
}


//Working with functin

let func: Function;

func = () => {
    console.log("Hello world, again")
}
func()

let add = (a: number, b: number, c: number = 1):number => {
    console.log(c)
    return a + b;
}
const result = add(10, 11);

console.log(result)
//


//Using AntiAliased

type StriOrNum = string | number;
type newUserWidthName = { name: string, uid: StriOrNum }

const createUser = (user: newUserWidthName) => {
    console.log(user.uid, "Olá", user.name)
}
let user = {
    uid: 10,
    name: "Osvaldo",
    as: "",
}
createUser(user)
*/

//DOM & Type cascating

