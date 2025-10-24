"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message1 = "Hello";
message1 = "bye";
console.log(message1);
var age1 = 20;
console.log(age1);
var isActive = true;
console.log(isActive);
var numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);
var data = "Hello";
data = 2;
console.log(data);
// Function with type annotations
function add(a, b) {
    console.log(a + b);
    return a + b;
}
add(5, 10);
// Object with type annotations
var person = { name: "Chiranjeevee", age: 41 };
person.spouse = "Deekshitha";
person.kid = "Anirudh";
console.log(person);
// Class with type annotations
var CartPage = /** @class */ (function () {
    function CartPage(page) {
        this.page = page;
        this.cartProducts = page.locator("div li").first();
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator("text=Checkout");
    }
    return CartPage;
}());
var classname = /** @class */ (function () {
    function classname(hello) {
        this.message = hello;
    }
    classname.prototype.teacher = function () {
        console.log(this.message + "students");
        return this.message + "students";
    };
    return classname;
}());
// Create an instance and call the method to print the statement
var obj = new classname("Hello ");
obj.teacher(); // This will print "Hello students"
