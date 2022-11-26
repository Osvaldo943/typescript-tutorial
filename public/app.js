/*We can do it
const anchor = document.querySelector("a")!;
console.log(anchor.innerText);

*/
import { Invoice } from "./classes/invoice.js";
const invoiceOne = new Invoice("Osvaldo", "work on Osvaldo website", 200);
const invoiceTwo = new Invoice("Mário", "work on Mário website", 200);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
