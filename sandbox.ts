
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