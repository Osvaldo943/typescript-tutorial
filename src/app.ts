
/*We can do it
    const anchor = document.querySelector("a")!;
    console.log(anchor.innerText);
*/

//Interface
interface isPerson {
    name: string,
    age: number,
    speak(text: string): void;
    spend(amount: number): number;
}

const me: isPerson = {
    name: "Osvaldo",
    age: 10,
    
    speak(text: string):void {
        console.log(text);
    },
    spend(amount: 10): number {
        console.log("I spend ", amount);
        return amount;
    }
}

const Func = (props: isPerson) => {
    console.log(props.name)
};
Func(me)







//
import {Invoice} from "./classes/invoice.js"
const invoiceOne = new Invoice("Osvaldo", "work on Osvaldo website", 200);
const invoiceTwo = new Invoice("Mário", "work on Mário website", 200);

let invoices: Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})


//
const form = document.querySelector(".new-item-form")! as HTMLFormElement;

const type = document.querySelector("#type")! as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
const details = document.querySelector("#details")! as HTMLInputElement;
const amount = document.querySelector("#amount")! as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.valueAsNumber)
})